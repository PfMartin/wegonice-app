<template>
  <v-layout>
    <nav-bar />
    <v-main>
      <slot></slot>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
</script>
