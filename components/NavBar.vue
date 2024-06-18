<template>
  <v-bottom-navigation v-if="xs">
    <div>
      <v-btn class="xs-nav-item" icon :to="userLink">
        <v-icon>{{ icon.user }}</v-icon>
      </v-btn>
    </div>
    <div>
      <v-btn class="xs-nav-item" icon :to="route.home">
        <v-icon>{{ icon.home }}</v-icon>
      </v-btn>
      <v-btn class="xs-nav-item" icon :to="route.authors">
        <v-icon>{{ icon.authors }}</v-icon>
      </v-btn>
      <v-btn class="xs-nav-item" icon :to="route.recipes">
        <v-icon>{{ icon.recipes }}</v-icon>
      </v-btn>
    </div>
    <div>
      <v-btn class="xs-nav-item" icon :to="route.login">
        <v-icon>{{ icon.logout }}</v-icon>
      </v-btn>
    </div>
  </v-bottom-navigation>

  <v-navigation-drawer v-else permanent rail expand-on-hover>
    <div class="d-flex flex-column justify-space-between h-100">
      <v-list>
        <v-list-item
          :prepend-icon="icon.user"
          subtitle="email from store"
          title="User name from store"
          :to="userLink"
        >
        </v-list-item>
      </v-list>

      <v-list density="compact" nav>
        <v-list-item
          :prepend-icon="icon.home"
          title="Home"
          value="home"
          :to="route.home"
        >
        </v-list-item>
        <v-list-item
          :prepend-icon="icon.authors"
          title="Authors"
          value="authors"
          :to="route.authors"
        ></v-list-item>
        <v-list-item
          :prepend-icon="icon.recipes"
          title="Recipes"
          value="recipes"
          :to="route.recipes"
        ></v-list-item>
      </v-list>

      <v-list>
        <v-list-item
          :prepend-icon="icon.logout"
          title="Logout"
          value="logout"
          :to="route.login"
        ></v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

enum icon {
  user = 'mdi-account-circle',
  home = 'mdi-home',
  authors = 'mdi-head-lightbulb',
  recipes = 'mdi-book-open',
  logout = 'mdi-logout',
}

enum route {
  home = '/home',
  authors = '/authors',
  recipes = '/recipes',
  login = '/auth/login',
}

const userId = '12345678' // TODO: use user id from store
const userLink = computed(() => `/user/${userId}`)

const { xs } = useDisplay()
</script>

<style scoped lang="scss">
.xs-nav-item {
  font-size: inherit;
  height: 100%;
  text-transform: none;
  transition: inherit;
  width: auto;
  border-radius: 0;
}
</style>
