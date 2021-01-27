<template>
  <span>

  <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
    <v-list>
      <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item-content>
              {{item.title}}
            </v-list-item-content>
          </v-list-item>
        <v-divider :key="`divider-${index}`" />
      </template>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar app color="brown darken-4" dark>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />

    <v-spacer class="hidden-md-and-up" />

    <router-link to="/">
      <v-toolbar-title> {{appTitle}} </v-toolbar-title>
    </router-link>

    <v-btn class="hidden-sm-and-down ml-3" to="/menu" text>Menu</v-btn>

    <v-spacer class="hidden-sm-and-down"/>

    <div v-if="!isAuthenticated" class="hidden-sm-and-down">
      <v-btn class="mr-3" to="/sign" text> Sign In </v-btn>
      <v-btn color="brown lighteen-3" to="/join"> Join </v-btn>
    </div>

    <div v-else>
      <v-btn class="mr-3" text color="white" to="/about"> Profile </v-btn>
      <v-btn outlined color="white" @click="logout"> Logout </v-btn>
    </div>
  </v-app-bar>

  </span>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      appTitle: 'Meal',
      drawer: false,
      items: [
        { title: 'Menu' },
        { title: 'Sign In' },
        { title: 'Join' },
      ],
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('userSignOut');
    },
  },
};
</script>

<style scoped>
a {
  color: #fff;
  text-decoration: none;
}
</style>
