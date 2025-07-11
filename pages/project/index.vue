<script lang="ts" setup>
definePageMeta({ layout: 'project' })
const todoStore = useTodoStore();
const { todos } = storeToRefs(todoStore);

onMounted(async () => {
  await todoStore.getAllTodos();
})
</script>

<template>
  <div>
    <Banner />
    <TodoList :todos="todos" />
    <button>delete</button>
  </div>
</template>


<style></style>