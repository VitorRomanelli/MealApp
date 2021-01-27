<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12 class=" display-1 font-weight-black my-5 text-xs-center">
        Available Meal Plans
      </v-flex>
    </v-layout>

    <v-layout row wrap>

      <v-col xs="12" sm="12" md="4">
        <v-card>
          <v-img src="http://source.unsplash.com/hjCA3ecCXAQ" height="500px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">KETO</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-text primary-title>
            <div>
              <h3 class="headline mb-0">Keto</h3>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
                voluptatum minus voluptas totam culpa provident sequi, at odio
                aspernatur dolorum libero velit. Voluptate eius pariatur
                temporibus beatae molestias officiis nulla!
              </div>
            </div>
          </v-card-text>
          <v-card-actions v-if="['Menu'].includes($route.name)">
            <v-btn outlined block color="green" @click="showRecipes('keto')">
              Selecione este plano
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col xs="12" sm="12" md="4">
        <v-card>
          <v-img src="http://source.unsplash.com/6S27S6pZ6o0" height="500px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">PALEO</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-text primary-title>
            <div>
              <h3 class="headline mb-0">Paleo</h3>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris felis, varius rutrum massa a, dignissim ornare dui. Cras
                eget velit eu dui tristique lobortis sit amet vel tellus.
              </div>
            </div>
          </v-card-text>
          <v-card-actions v-if="['Menu'].includes($route.name)">
            <v-btn outlined block color="green" @click="showRecipes('paleo')">
              Selecione este plano
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col xs="12" sm="12" md="4">
        <v-card>
          <v-img src="http://source.unsplash.com/1SPu0KT-Ejg" height="500px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">VEGAN</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-text primary-title>
            <div>
              <h3 class="headline mb-0">Vegan</h3>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris felis, varius rutrum massa a, dignissim ornare dui. Cras
                eget velit eu dui tristique lobortis sit amet vel tellus.
              </div>
            </div>
          </v-card-text>
          <v-card-actions v-if="['Menu'].includes($route.name)">
            <v-btn outlined block color="green" @click="showRecipes('vegan')">
              Selecione este plano
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'HomePlans',
  methods: {
    showRecipes(plan) {
      this.$store.dispatch('getRecipes', plan);
    },
  },
};
</script>

<style scoped>
</style>
