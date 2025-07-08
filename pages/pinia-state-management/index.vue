<script setup lang="ts">
const counterStore = useCounterStore();
const counterPersistenceStore = useCounterPersistence();
</script>

<template>
  <div>
    <h1>Pinia state management</h1>
    <ul>
      <li>To install Pinia, run <code>npm install pinia @pinia/nuxt</code></li>
      <li>To configure Pinia in nuxt 3 you need to add this configuration
        <pre>
          <code>
            // nuxt.config.ts
            export default defineNuxtConfig({
              modules: ['@pinia/nuxt'],
            })
          </code>
        </pre>
      </li>
    </ul>
    <CardCounterWithStore />
    <div>
      <h5>Counter store data read in the parent</h5>
      <p>Count: {{ counterStore.count }}</p>
      <p>Double Count: {{ counterStore.doubleCount }}</p>
      <button @click="counterStore.increment">Increment</button>
    </div>

    <h2>Pinia Persistence</h2>
    <div class="box">
      <h4>Counter store with persistence</h4>
      <p>Count: {{ counterPersistenceStore.count }}</p>
      <button @click="counterPersistenceStore.increment">Increment</button>
    </div>
  </div>
</template>

<style scoped>
code {
  display: inline-block;
  background-color: gainsboro;
  padding: 2px 4px;
  border-radius: 4px;
}

pre>code {
  padding-right: 80px;
}

.box {
  border: 1px solid gray;
  border-radius: 8px;
  padding: 10px
}
</style>