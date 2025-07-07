<script setup lang="ts">
const title = ref('Composition API')
const hello = () => "Hello from Composition API"
onMounted(() => {
  setTimeout(() => {
    title.value = 'Composition API Updated after 1 seconds'
  }, 1000)
})
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ hello() }}</p>
  </div>
</template>