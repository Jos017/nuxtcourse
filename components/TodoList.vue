<script lang="ts" setup>
import type { Todo } from '~/stores/todo';

interface TodoListProps {
  todos: Todo[];
}

const { todos } = defineProps<TodoListProps>()
</script>

<template>
  <ul>
    <li v-for="{ isCompleted, id, title } in todos" :key="id">
      <nuxt-link :to="`/project/todos/${id}`">{{ title }}</nuxt-link>
      <span v-if="isCompleted">✅</span>
      <span v-else>❌</span>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 30px;
}

li {
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f9f9f9;
}
</style>