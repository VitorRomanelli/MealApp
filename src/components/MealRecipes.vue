<template>
  <v-container>

    <v-row>
      <v-col xs="12" sm="6" md="6" lg="4" v-for="(item, index) in recipes" :key="index">

        <v-card>
          <v-responsive>
            <v-img :src="item.recipe.image" />
          </v-responsive>

          <v-card-text>

            <div class="title my-3"> {{item.recipe.label}} </div>
            <div class="subheadline">Ingredients</div>

            <ul>
              <li v-for="(ingredient, idx) in item.recipe.ingredientLines" :key="idx">
                {{ingredient}}
              </li>
            </ul>
          </v-card-text>

          <v-card-actions>
            <v-btn color = "green" dark @click="orderRecipe(item)"> Order </v-btn>
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'MealRecipes',
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    orderRecipe(item) {
      if (this.isAuthenticated) {
        this.$store.dispatch('addRecipe', item);
      } else {
        this.$router.push('/sign');
      }
    },
  },
};
</script>

<style scoped>
</style>
