<script lang="ts" setup>
definePageMeta({ layout: 'project', pageTransition: { name: 'rotate', mode: 'out-in' } })
const route = useRoute();
const todoStore = useTodoStore();
const todoId = Number(route.params.id);
const todo = computed(() => todoStore.getTodoById(todoId));

const toggleCompletedStatus = () => {
  todoStore.toggleCompletedStatus(todoId);
}
</script>

<template>
  <div>
    <h1>{{ todo?.title }}</h1>
    <p>{{ todo?.description }}</p>

    <hr>

    <p>Completed: {{ todo?.isCompleted ? 'Yes' : 'No' }}</p>
    <p>Created at: {{ todo?.createdAt }}</p>

    <NuxtLink :to="`/project/todos/edit/${todo?.id}`" class="btn">Edit</NuxtLink>

    <button v-if="todo?.isCompleted" class="btn-danger" @click="toggleCompletedStatus">
      Mark as not completed
    </button>
    <button v-else class="btn-success" @click="toggleCompletedStatus">
      Mark as completed
    </button>
  </div>
</template>

<style>
.btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
  font-size: 16px;
}

.btn:hover {
  background-color: #0056b3;
}

.btn-success {
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
  font-size: 16px
}

.btn-success:hover {
  background-color: #218838;
  color: #fff;
}

.btn-danger {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
  font-size: 16px
}

.btn-danger:hover {
  background-color: #c62828;
  color: #fff;
}
</style>
