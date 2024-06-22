<template>
  <v-footer>
    <v-row justify="center" no-gutters>
      <v-col cols="4"></v-col>
      <v-col class="text-center" cols="4"
        >Copyright &copy; {{ yearSpan }} <strong>WeGoNice</strong></v-col
      >
      <v-col class="text-center d-flex justify-end pr-2" cols="4">{{
        config.public.version
      }}</v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const config = useRuntimeConfig()

const yearSpan = computed(() => {
  const startingYear = 2024
  const currentYear = new Date().getFullYear()

  return startingYear === currentYear
    ? currentYear
    : `${startingYear} - ${currentYear}`
})
</script>
