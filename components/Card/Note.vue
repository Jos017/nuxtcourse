<script setup lang="ts">
export interface CardNoteProps {
  title: string;
  content: string;
}
const { title, content } = defineProps<CardNoteProps>();
</script>

<template>
  <div class="card-note">
    <h3 class="card-note__title">{{ title }}</h3>
    <p class="card-note__content">{{ content }}</p>
  </div>
</template>

<style scoped>
.card-note {
  border: 1px solid gray;
  border-radius: 20px;
}

.card-note__title {
  padding: 10px;
  border-bottom: 1px solid black;
}

.card-note__content {
  padding: 10px;
}
</style>