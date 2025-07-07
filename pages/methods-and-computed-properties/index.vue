<script setup lang="ts">
const firstName = ref('Jose')
const lastName = ref('Rios')
const count = ref(0)
const increment = () => count.value++;
const greet = (name: string) => alert(`Hello ${name}`)

const fullName = computed({
  get() {
    return `${firstName.value} ${lastName.value}`.trim()
  },
  set(newValue) {
    const names = newValue.split(' ')
    firstName.value = names[0] || ''
    lastName.value = names[1] || ''
  }
})
</script>

<template>
  <div>
    <h1>Methods and Computed Properties</h1>
    <button @click="increment">Increment</button>
    <h3>Count: {{ count }}</h3>
    <button @click="greet('Jose')">Greet</button>
    <h3>First name: {{ firstName }}</h3>
    <h3>Last name: {{ lastName }}</h3>
    <input v-model="fullName" />
    <h3>Full name: {{ fullName }}</h3>
  </div>
</template>