<script setup lang="ts">
import type { Todo } from '~/stores/todo';

interface TodoFormProps {
  todo: Todo,
  isEdit: boolean
}

const { todo, isEdit } = defineProps<TodoFormProps>()
const todoStore = useTodoStore();
const router = useRouter();
const form = computed(() => todo);

const handleFormSubmit = () => {
  if (isEdit) {
    form.value.updatedAt = new Date().toISOString();
    todoStore.updateTodo(form.value);
    router.push('/project/todos/' + form.value.id);
  } else {
    form.value.id = new Date().getTime();
    form.value.createdAt = new Date().toISOString();
    console.log(form.value)
    todoStore.addTodo(form.value);
    router.push('/project/todos/' + form.value.id);
  }
}
</script>

<template>
  <form @submit.prevent="handleFormSubmit">
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" v-model="form.title" required />
    </div>
    <div>
      <label for="description">Description</label>
      <input type="text" id="description" v-model="form.description" required />
    </div>

    <button type="submit" class="btn-success">{{ isEdit ? 'Update TODO' : 'Create TODO' }}</button>
  </form>
  {{ form }}
</template>


<style scoped>
form {
  background-color: #fff;
  padding: 10px;
  margin: 20px 0;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
}

div {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 700;
}

input,
textarea {
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
</style>