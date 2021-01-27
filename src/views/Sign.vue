<template>
  <v-container fill-height>
    <v-layout align-center justify-center fill-height>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">

          <v-toolbar dark color="primary">
            <v-toolbar-title>Sign In</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>

              <v-text-field
              prepend-icon="mdi-account"
              name="email"
              label="E-mail"
              type="email"
              v-model="email"
              :rules="emailRules"
              required
              />

              <v-text-field
              id="password"
              prepend-icon="mdi-lock"
              name="password"
              label="Password"
              type="password"
              v-model="password"
              :rules="passwordRules"
              required
              />
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" :disabled="!valid" @click="submit"> Sign </v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Join',
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 6 || 'Password must be greater than 6 characters',
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('userLogin', {
          email: this.email,
          password: this.password,
        });
      }
    },
  },
};
</script>

<style scoped>

</style>
