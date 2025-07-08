<script setup>
const value = ref('Value from child')
const props = defineProps({ message: { type: String, default: 'This is a default value' } })
const emit = defineEmits(['update'])

const sendUpdate = () => {
  emit('update', value.value)
}
</script>

<template>
  <div class="card-child">
    <h3>This is child component</h3>
    <hr>
    <p>{{ message }}</p>
    <button @click="sendUpdate">Update</button>
  </div>
</template>

<style lang="css" scoped>
.card-child {
  border: 1px solid gray;
  border-radius: 8px;
  padding: 10px
}
</style>