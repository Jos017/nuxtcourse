<script setup lang="ts">
definePageMeta({    
  layout: 'custom',
  middleware: [(to, from) => console.log('in page middleware'), 'name'],
})

const updateLayout = () => {
  setPageLayout('custom-second')
}
</script>

<template>
  <h1>About Page</h1>
  <button @click="updateLayout()">Update Layout</button>
</template>