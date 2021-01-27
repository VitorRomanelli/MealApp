<template>
  <v-container>

    <v-row>
      <v-col xl="12" sm="6" md="6" lg="4" v-for="(item, index) in recipes" :key="index">

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
            <v-btn color = "green" dark > Pedido </v-btn>
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
  },
};
</script>

<style scoped>
</style>
