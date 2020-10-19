<template>
  <!-- App.vue -->
  <v-app class="app-bar-color">
    <v-app-bar app v-if="$vuetify.breakpoint.lgAndUp" class="app-bar-color">
      <v-spacer></v-spacer>
      <div class="mr-16 pr-16">
        <v-btn
          large
          to="/"
          class="pa-2 ma-2 btn text-body-2 font-weight-bold primary"
        >
          Home
        </v-btn><v-btn
          large
          to="/signin"
          class="pa-2 ma-2 btn text-body-2 font-weight-bold primary"
        >
          Signin
        </v-btn><v-btn
          large
          to="/register"
          class="pa-2 ma-2 btn text-body-2 font-weight-bold primary"
        >
          Register
        </v-btn>
      </div>
    </v-app-bar>
    <v-app-bar app v-else-if="$vuetify.breakpoint.mdAndDown">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="success" icon v-bind="attrs" v-on="on">
              <v-icon>fas fa-bars</v-icon>
            </v-btn>
          </template>
          <v-list no-action>
            <v-list-item
              to="/"
            >
              <v-list-item-content>
                <v-list-item-title>
                  Home
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              to="/signin"
            >
              <v-list-item-content>
                <v-list-item-title>
                  Signin
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              to="/register"
            >
              <v-list-item-content>
                <v-list-item-title>
                  Register
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar-nav-icon>
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import { dom } from '@fortawesome/fontawesome-svg-core';

export default {
  mounted() {
    dom.watch();
  },

  data() {
    return {
      drawer: null,
    };
  },
};
</script>

<style scoped>
.app-bar-color {
  background-color: #10163A !important;
}
</style>
