<template>
  <q-page class="row items-center justify-evenly">
    <todo-list :todos="todos"/>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Todo } from 'components/models';
import TodoList from 'components/TodoList.vue'

defineOptions({
  name: 'IndexPage'
});

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1',
    isCompleted: false,
  },
  {
    id: 2,
    content: 'ct2',
    isCompleted: false,
  },
  {
    id: 3,
    content: 'ct3',
    isCompleted: false,
  },
  {
    id: 4,
    content: 'ct4',
    isCompleted: false,
  },
  {
    id: 5,
    content: 'ct5',
    isCompleted: false,
  }
]);

</script>
