<template>
  <v-layout>
    <div class="w-100 h-screen d-flex flex-column justify-space-between">
      <v-container>
        <slot></slot>
      </v-container>

      <div>
        <bottom-bar />
      </div>
    </div>
  </v-layout>
</template>

<script setup lang="ts">
import BottomBar from '../components/BottomBar.vue'
</script>
