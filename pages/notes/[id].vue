<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})

const { copyToClipboard } = useClipboardCopy();
const copyUrl = () => {
  copyToClipboard(window.location.href)
}

</script>

<template>
  <div>
    <h1>Notes Dynamic page Id: {{ $route.params.id }}</h1>
    <button @click="copyUrl">Copy URL</button>
  </div>
</template>