<script setup lang="ts">
import type { NuxtError } from '#app';
const props = defineProps<{ error: NuxtError }>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <h2>Error {{ props.error }}</h2>
    <button @click="handleError">Clear</button>
  </div>
</template>