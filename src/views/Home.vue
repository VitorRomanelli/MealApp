<template>
  <div style="width: 100%; height: 100%;">
    <HomeHero />
    <HomeDetails />
    <HomePlans />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    HomeHero: () => import('../components/HomeHero'),
    HomeDetails: () => import('../components/HomeDetails'),
    HomePlans: () => import('../components/HomePlans'),
  },
};
</script>

<style scoped>

</style>
