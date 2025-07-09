<script lang="ts" setup>
import type { CardNoteProps } from '~/components/Card/Note.vue';

const foo = useFoo();

const randomNumber = (): number => {
  return Math.floor(Math.random() * 100) + 1
}
const notes = ref<CardNoteProps[]>([])
const inputNewNote = useTemplateRef('inputNewNote');

const addNote = (value: string) => {
  if (value == '' || value == undefined) return
  notes.value.push({ title: 'Note ' + (notes.value.length + 1), content: value });
}
</script>

<template>
  <div>
    <h1>Notes Page {{ foo }}</h1>
    <InputNewNote ref="inputNewNote" />
    <button @click="addNote(inputNewNote?.$el.value)">Add new note</button>
    <div class="notes-container">
      <NuxtLink v-for="note, index in notes" :to="'/notes/' + randomNumber()" :key="index">
        <CardNote :title="note.title" :content="note.content" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.notes-container {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>