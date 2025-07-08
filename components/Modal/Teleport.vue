<script setup>
const isModalShown = ref(false)

const showModal = () => {
  isModalShown.value = true
}
const closeModal = () => {
  isModalShown.value = false
}
</script>

<template>
  <div>
    <button @click="showModal">Show Modal</button>
    <Teleport to="body">
      <div v-if="isModalShown" class="modal">
        <p>This is a modal</p>
        <button @click="closeModal">Close</button>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  box-shadow: 0 2px 10px gainsboro;
}
</style>