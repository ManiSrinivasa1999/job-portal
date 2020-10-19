<template>
  <v-container>
    <v-data-iterator
      :items="jobs"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          dark
          color="primary"
          class="mb-1"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="fas fa-search"
            label="Search"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="fas fa-search"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="sortDesc"
              mandatory
            >
              <v-btn
                large
                depressed
                color="primary"
                :value="false"
              >
                <v-icon>fas fa-arrow-up</v-icon>
              </v-btn>
              <v-btn
                large
                depressed
                color="primary"
                :value="true"
              >
                <v-icon>fas fa-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="(job, i) in props.items"
            :key="i"
            cols="12"
            lg="4"
            xl="4"
            md="6"
            sm="12"
            xs="12"
          >
            <v-card color="#3B3DA2">
              <v-card-title class="white--text">
                {{ job[1].jobtitle }}
              </v-card-title>
              <v-card-text class="white--text">
                {{ job[1].company }}
              </v-card-text>
              <v-card-text class="white--text">
                {{ job[1].jobdescription }}
              </v-card-text>
              <v-card-text class="white--text">
                {{ job[1].experience }}
              </v-card-text>
              <v-card-text class="white--text">
                {{ job[1].joblocation_address }}
              </v-card-text>
              <v-card-text class="white--text">
                {{ job[1].skills }}
              </v-card-text>
              <v-card-text class="white--text">
                {{ job[1].payrate }}
              </v-card-text>
              <v-card-text class="white--text">
                {{ job[1].industry.split('/').toString() }}
              </v-card-text>
              <v-card-actions>
                <v-btn class="primary">
                  Apply Now
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
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
      sortDesc: false,
      search: '',
      sortBy: 'Experience',
      keys: [
        'Experience',
        'Location',
        'Skill',
        'Industry',
        'Salary Range',
      ],
    };
  },
  mounted() {
    // this.$store.state.db.collection('job-data')
    //   .orderBy('experience')
    //   .limit(1)
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       const job = [];
    //       job.push(doc.id);
    //       job.push(doc.data());
    //       this.jobs.push(job);
    //     });
    //   });
  },
  methods: {

  },
};
</script>

<style></style>
