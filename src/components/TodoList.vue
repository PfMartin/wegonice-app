<template>
  <q-list bordered padding v-if="props.todos.length">
    <q-item v-for="todo in props.todos" :key="todo.id">
      <q-item-section>
        <span :class="todo.isCompleted ? 'completed-line' : ''">{{
          todo.content
        }}</span>
      </q-item-section>
      <q-item-section avatar>
        <q-toggle
          class="item-secondary"
          icon="done"
          v-model="todo.isCompleted"
        ></q-toggle>
      </q-item-section>
    </q-item>
    <q-separator spaced />
  </q-list>
</template>

<script setup lang="ts">
import { Todo } from './models';

interface Props {
  todos?: Todo[];
}

const props = withDefaults(defineProps<Props>(), {
  todos: () => [],
});
</script>

<style scoped lang="scss"></style>
