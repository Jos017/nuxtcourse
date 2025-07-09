<script lang="ts" setup>
definePageMeta({ layout: 'project' })
const todoStore = useTodoStore();
const { todos } = storeToRefs(todoStore);
</script>

<template>
  <Banner />
  <TodoList :todos="todos" />
</template>


<style></style>