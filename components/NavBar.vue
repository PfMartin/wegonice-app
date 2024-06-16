<template>
  <v-app-bar-nav-icon v-if="xs" @click="toggleDrawer"></v-app-bar-nav-icon>
  <v-navigation-drawer
    :permanent="!xs"
    :temporary="xs"
    :rail="!xs"
    :expand-on-hover="!xs"
    v-model="drawer"
  >
    <v-list>
      <v-list-item
        prepend-icon="mdi-account-circle"
        subtitle="email from store"
        title="User name from store"
        :to="userLink"
      >
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <div class="d-flex flex-column justify-space-between">
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-home"
          title="Home"
          value="home"
          to="/home"
        >
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-head-lightbulb"
          title="Authors"
          value="authors"
          to="/authors"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-book-open"
          title="Recipes"
          value="recipes"
          to="/recipes"
        ></v-list-item>
      </v-list>

      <v-list>
        <v-list-item
          prepend-icon="mdi-logout"
          title="Logout"
          value="logout"
          to="/auth/login"
        ></v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const userId = '12345678'
const userLink = computed(() => `/user/${userId}`)

const { xs } = useDisplay()

const drawer = ref(false)

const toggleDrawer = () => (drawer.value = !drawer.value)
</script>
