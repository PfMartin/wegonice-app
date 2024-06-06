<template>
  <v-layout>
    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item
          prepend-icon="mdi-account-circle"
          subtitle="email from store"
          title="User name from store"
        >
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-head-lightbulb"
          title="Authors"
          value="authors"
          to="authors"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-book-open"
          title="Recipes"
          value="recipes"
          to="recipes"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts"></script>
