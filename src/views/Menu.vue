<template>
  <v-container>
      <HomePlans />
      <MealRecipes />
  </v-container>
</template>

<script>
export default {
  name: 'Menu',
  components: {
    HomePlans: () => import('../components/HomePlans'),
    MealRecipes: () => import('../components/MealRecipes'),
  },
};
</script>

<style scoped>

</style>
