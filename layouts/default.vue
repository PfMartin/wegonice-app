<template>
  <v-layout>
    <nav-bar />
    <v-main>
      <div class="d-flex flex-column justify-space-between h-screen">
        <v-container>
          <slot></slot>
        </v-container>
        <div>
          <bottom-bar />
        </div>
      </div>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import NavBar from '~/components/NavBar.vue'
import BottomBar from '~/components/BottomBar.vue'
</script>
