<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        xl="3"
        lg="4"
        md="6"
        sm="12"
        xs="12"
      >
        <v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as papa from 'papaparse';

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      jobListings: [],
      jobs: [],
    };
  },

  mounted() {
    const ref = this.$store.state.storage.child('Sample_Data_File.csv');
    ref
      .getDownloadURL()
      .then(this.loadCSV)
      .catch();
  },

  methods: {
    loadCSV(csvURL) {
      papa.parse(csvURL, {
        download: true,
        complete: (data) => {
          this.jobListings = data.data;
        },
      });
    },
  },
};

</script>
