<template>
  <h1>User {{ $route.params.id }}</h1>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'User detail',
  middleware: 'auth',
})
</script>
