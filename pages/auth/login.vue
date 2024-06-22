<template>
  <v-sheet class="mt-10 mx-auto pa-4" width="500">
    <h1>Login</h1>
    <v-form
      @submit.prevent
      fast-fail
      validate-on="input"
      @submit="login"
      v-model="isFormValid"
    >
      <v-text-field v-model="email" :rules="emailRules" label="Email" />
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
      />
      <v-btn type="submit" block :disabled="!isFormValid">Login</v-btn>
    </v-form>
    <v-row class="mt-1 pa-3 d-flex justify-end">
      <span>Don't have an account yet?</span>&nbsp;<NuxtLink to="/auth/register"
        >Register now.</NuxtLink
      ></v-row
    >
  </v-sheet>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Login',
  layout: 'auth',
})

const isFormValid = ref(false)

const email = ref('')
const emailRules = [
  (value: string) =>
    (value.includes('@') && value.includes('.')) || 'Invalid email address',
]

const password = ref('')
const passwordRules = [
  (value: string) =>
    value.length > 6 || 'Password must be longer than 6 characters',
]

const login = () => {
  if (!isFormValid.value) {
    return
  }
  console.warn(email.value)
  console.warn(password.value)
}
</script>
