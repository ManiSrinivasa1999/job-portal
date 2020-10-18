<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(job, i) in jobs"
        :key="i"
      >
        <v-card>
          <v-card-title>
            {{ job.jobtitle }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    this.$store.state.db.collection('job-data')
      .limit(5)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.jobs.push(doc.data());
        });
      });
  },
};
</script>

<style></style>
