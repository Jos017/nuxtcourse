<script setup lang="ts">
const updateLayout = () => {
  setPageLayout('custom-second')
}
</script>

<template>
  <h1>About Page</h1>
  <button @click="updateLayout()">Update Layout</button>
</template>