<script lang="ts" setup>
definePageMeta({ layout: 'project' })
const todoStore = useTodoStore();
const { todos } = storeToRefs(todoStore);
</script>

<template>
  <div>
    <Banner />
    <TodoList :todos="todos" />
  </div>
</template>


<style></style>