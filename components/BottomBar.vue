<template>
  <v-footer>
    <v-row justify="center" no-gutters>
      <v-col cols="4"></v-col>
      <v-col class="text-center" cols="4"
        >{{ new Date().getFullYear() }} <strong>WeGoNice</strong></v-col
      >
      <v-col class="text-center d-flex justify-end pr-2" cols="4">{{
        config.public.version
      }}</v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
</script>
