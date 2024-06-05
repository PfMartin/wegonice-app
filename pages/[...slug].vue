<template>
  <p>Welcome to WeGoNice</p>
  <v-btn>Hello</v-btn>
  <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Home",
  middleware: 'auth'
})
</script>

<style scoped lang="scss">
</style>