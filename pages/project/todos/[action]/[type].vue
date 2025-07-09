<script setup lang="ts">
import type { Todo } from '~/stores/todo';

definePageMeta({ layout: 'project' })
const route = useRoute();
const todoStore = useTodoStore();
const isEdit = computed(() => route.params.action === 'edit');
const todoId = computed(() => Number(route.params.type));
const foundTodo = computed(() => todoStore.getTodoById(todoId.value));
const todo = ref<Todo>({
  id: 0,
  title: '',
  description: '',
  isCompleted: false,
  createdAt: '',
  updatedAt: '',
})

onMounted(() => {
  if (isEdit.value) {
    if (foundTodo.value) {
      todo.value = { ...foundTodo.value }
    }

    console.log(todo.value)
  }
})
</script>

<template>
  <TodoForm :todo="todo" :is-edit="isEdit" />
</template>

<style></style>