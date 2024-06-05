<template>
  <NuxtLayout>
    <v-app>
      <NuxtPage>
        <HomeView />
      </NuxtPage>
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import HomeView from './views/HomeView.vue'
</script>
