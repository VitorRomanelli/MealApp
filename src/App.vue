<template>
  <v-app>
    <AppNavigation />

    <v-main transition="slide-x-transition">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    AppNavigation: () => import('./components/AppNavigation'),
  },
};
</script>

<style>
</style>
