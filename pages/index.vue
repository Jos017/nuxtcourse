<script setup lang="ts">
const {$hello, $consoleIt} = useNuxtApp()
console.log('useNuxtApp', useNuxtApp())
</script>

<template>
  <h1>Home Page</h1>
  <p>{{ $hello('Jose') }}</p>
  <p>{{ $consoleIt('Jose') }}</p>
</template>