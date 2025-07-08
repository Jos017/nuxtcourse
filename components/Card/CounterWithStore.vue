<script setup lang="ts">
const counterStore = useCounterStore();
</script>

<template>
  <div class="card">
    <h3>Counter</h3>
    <p>Count from store: {{ counterStore.count }}</p>
    <p>Double Count from store: {{ counterStore.doubleCount }}</p>
    <button @click="counterStore.increment">Increment</button>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid gray;
  border-radius: 8px;
  padding: 10px
}
</style>