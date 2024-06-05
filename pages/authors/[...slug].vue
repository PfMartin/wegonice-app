<template>
  <p>Authors Landing Page</p>
</template>

<script setup lang="ts">
import { definePageMeta } from 'nuxt/dist/pages/runtime';

definePageMeta({
  middleware: 'auth'
})
</script>