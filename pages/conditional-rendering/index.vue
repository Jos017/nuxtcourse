<script setup lang="ts">
const isWelcomeVisible = ref(true);
const status = ref('default');
const fruits = ['apple', 'banana', 'cherry']
const user = reactive({
  name: 'Jose Rios',
  age: 30,
  email: 'example@example.com'
})
</script>

<template>
  <h1>Conditional and List Rendering</h1>
  <h2 v-if="isWelcomeVisible">Welcome to my page of conditional rendering</h2>
  <button @click="isWelcomeVisible = !isWelcomeVisible">Toggle visibility</button>

  <!-- v-if, v-else, v-else-if removes the element from the DOM -->
  <br>
  <h3 class="success" v-if="status === 'success'">Status: Success</h3>
  <h3 class="error" v-else-if="status === 'error'">Status: Error</h3>
  <h3 class="loading" v-else-if="status === 'loading'">Status: Loading</h3>
  <h3 class="default" v-else="status === 'default'">Status: Default</h3>

  <!-- v-show is the same as v-if but it doesn't remove the element from the DOM (display: none) -->
  <br>
  <h3 class="success" v-show="status === 'success'">Status: Success</h3>
  <h3 class="error" v-show="status === 'error'">Status: Error</h3>
  <h3 class="loading" v-show="status === 'loading'">Status: Loading</h3>
  <h3 class="default" v-show="status === 'default'">Status: Default</h3>

  <button @click="status = 'success'">Success</button>
  <button @click="status = 'error'">Error</button>
  <button @click="status = 'loading'">Loading</button>

  <h2>List Rendering</h2>
  <ul>
    <li v-for="(fruit, index) in fruits" :key="index">{{ fruit + ' -- ' + index }}</li>
  </ul>
  <ul>
    <li v-for="(value, key) in user" :key="key">{{ key + ': ' + value }}</li>
  </ul>
</template>

<style scoped>
.success {
  color: green
}

.error {
  color: red
}

.loading {
  color: gray
}

.default {
  color: black
}
</style>