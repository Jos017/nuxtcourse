<script setup lang="ts">
const {$hello, $consoleIt} = useNuxtApp()
console.log('useNuxtApp', useNuxtApp())

// API Server
const { data } = await useFetch('/api/hello')
</script>

<template>
  <h1>Home Page</h1>
  <p>{{ $hello('Jose') }}</p>
  <p>{{ $consoleIt('Jose') }}</p>
  <br><br>
  <h2>Testing API</h2>
  <p>{{ data }}</p>
</template>