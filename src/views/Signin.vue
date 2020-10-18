<template>
  <v-row
    align="center"
    justify="space-around"
    class="btn-top"
  >
    <v-btn
      tile
      @click="trySampleRequest();"
    >
      Sign in with Google
      <!-- <v-icon right>
        fab fa-google-plus-g
      </v-icon> -->
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'Signin',
  data() {
    return {

    };
  },
  methods: {
    trySampleRequest() {
      const params = JSON.parse(localStorage.getItem('oauth2-test-params'));
      if (params && params.access_token) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET',
          `${'https://www.googleapis.com/drive/v3/about?fields=user&'
            + 'access_token='}${params.access_token}`);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        xhr.onreadystatechange = (e) => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.response);
          } else if (xhr.readyState === 4 && xhr.status === 401) {
            // Token invalid, so prompt for user permission.
            this.oauth2SignIn();
          }
        };
        xhr.send(null);
      } else {
        this.oauth2SignIn();
      }
    },

    /*
    * Create form to request access token from Google's OAuth 2.0 server.
    */
    oauth2SignIn() {
      // Google's OAuth 2.0 endpoint for requesting an access token
      const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

      // Create <form> element to submit parameters to OAuth 2.0 endpoint.
      const form = document.createElement('form');
      form.setAttribute('method', 'GET'); // Send as a GET request.
      form.setAttribute('action', oauth2Endpoint);

      // Parameters to pass to OAuth 2.0 endpoint.
      const params = {
        // eslint-disable-next-line @typescript-eslint/camelcase
        client_id: '626064367386-2eaagap3k18j6846cb80a7tamo5h85gb.apps.googleusercontent.com',
        // eslint-disable-next-line @typescript-eslint/camelcase
        redirect_uri: 'http://localhost:8080/access-token/',
        // eslint-disable-next-line @typescript-eslint/camelcase
        response_type: 'token',
        scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
        // eslint-disable-next-line @typescript-eslint/camelcase
        include_granted_scopes: 'true',
      };
      // Add form parameters as hidden input values.
      // eslint-disable-next-line no-restricted-syntax
      for (const p in params) {
        if (Object.prototype.hasOwnProperty.call(params, p)) {
          const input = document.createElement('input');
          input.setAttribute('type', 'hidden');
          input.setAttribute('name', p);
          input.setAttribute('value', params[p]);
          form.appendChild(input);
        }
      }

      // Add form to page and submit it to open the OAuth 2.0 endpoint.
      document.body.appendChild(form);
      form.submit();
    },
  },
};
</script>

<style>

.btn-top {
  padding: 50vh 0 50vh 0 !important;
}

</style>
