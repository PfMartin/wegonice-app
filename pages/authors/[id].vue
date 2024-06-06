<template>
  <h1>Author {{ $route.params.id }}</h1>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Author Detail',
  middleware: 'auth',
})
</script>
