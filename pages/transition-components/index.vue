<script lang="ts" setup>
const show = ref(false)
</script>

<template>
  <div>
    <h1>Transition Components</h1>
    <button @click="show = !show">Toggle</button>
    <Transition name="fade">
      <p v-if="show">Hello</p>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>