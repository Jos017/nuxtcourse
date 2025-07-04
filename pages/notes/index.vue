<script lang="ts" setup>
const randomNumber = (): number => {
  return Math.floor(Math.random() * 100) + 1
}
const notes: string[] = ['note 1', 'note 2', 'note 3']
</script>

<template>
  <h1>Notes Page</h1>
  <ul>
    <li v-for="note in notes">
      <NuxtLink :to="'/notes/' + randomNumber()">{{ note }}</NuxtLink>
    </li>
  </ul>
</template>