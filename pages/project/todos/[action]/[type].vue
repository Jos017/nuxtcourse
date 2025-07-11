<script setup lang="ts">
import type { Todo } from '~/stores/todo';

definePageMeta({ layout: 'project' })
const route = useRoute();
const todoStore = useTodoStore();
const { todos } = storeToRefs(todoStore);
const isEdit = computed(() => route.params.action === 'edit');
const todoId = computed(() => Number(route.params.type));
const foundTodo = computed(() => todos.value.find((todo) => todo.id === todoId.value));
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
  <div>
    <TodoForm :todo="todo" :is-edit="isEdit" />
  </div>
</template>

<style></style>