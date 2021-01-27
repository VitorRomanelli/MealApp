<template>
  <v-container>
    <v-layout column>
      <h1 class="title my-3">My recipes</h1>
      <div v-for="(item, index) in userRecipes" class="mb-2" :key="index">
        {{item}}
      </div>

      <v-flex class="mt-4">
        <v-btn color = " primary " to = " / menu "> Vá para o menu </ v -btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  computed: {
    userRecipes() {
      return this.$store.state.userRecipes;
    },
  },
  mounted() {
    this.getRecipes();
  },
  methods: {
    getRecipes() {
      this.$store.dispatch('getUserRecipes');
    },
  },
};
</script>

<style scoped>

</style>>
