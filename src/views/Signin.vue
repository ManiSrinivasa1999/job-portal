<template>
  <v-row>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-container>
          <v-row class="fullheight" justify="center" align="center">
            <v-col
              cols="12"
              md="6"
              class="text-center"
            >
              <v-img
                src="@/assets/signin.png"
              >
              </v-img>
            </v-col>
            <v-col
              cols="12"
              md="6"
              class="text-center"
            >
              <h1 class="text-h3 font-weight-bold">
                Sign in to your Job Portal
              </h1>
              <div id="firebaseui-auth-container"></div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import * as firebaseui from 'firebaseui';
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  // data
  data() {
    return {
      dialog: true,
    };
  },

  // life-cycle-hooks
  mounted() {
    this.$nextTick(() => {
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebaseui-auth-container', {
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        signInSuccessUrl: '/',
      });
    });
  },
};
</script>

<style lang='scss' scoped>
.fullheight {
  height: 90vh;
}
</style>
