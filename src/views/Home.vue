<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(job, i) in jobs"
        :key="i"
        cols="12"
        lg="4"
        xl="3"
        md="6"
        sm="12"
        xs="12"
      >
        <v-card color="#3B3DA2">
          <v-card-title class="white--text">
            {{ job[1].jobtitle }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        xl="6"
        lg="6"
        md="8"
        sm="12"
        xs="12"
      >
        <v-pagination
          v-model="page"
          class="my-4"
          :length=length
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
      page: 1,
      length: 2000 / 20,
    };
  },
  mounted() {
    this.$store.state.db.collection('job-data')
      .limit(1)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const job = [];
          job.push(doc.id);
          job.push(doc.data());
          this.jobs.push(job);
        });
      });
  },
};
</script>

<style></style>
