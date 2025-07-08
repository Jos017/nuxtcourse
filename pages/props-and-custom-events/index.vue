<script setup lang="ts">
const dynamicContent = ref('hello from parent')

const handleUpdate = (value: string) => {
  console.log('handleUpdate --> ' + value)
}
</script>

<template>
  <div>
    <h1>Props and Custom Events</h1>
    <CardChild :message="dynamicContent" @update="handleUpdate" />
  </div>
</template>