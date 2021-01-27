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

    <v-btn class="hidden-sm-and-down" text to="/menu">Menu</v-btn>

    <v-spacer class="hidden-sm-and-down"/>

    <v-btn class="hidden-sm-and-down" text to="/sign"> Sign In </v-btn>
    <v-btn class="hidden-sm-and-down" color="brown lighteen-3" to="/join"> Join </v-btn>
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
};
</script>

<style scoped>
a {
  color: #fff;
  text-decoration: none;
}
</style>
