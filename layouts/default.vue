<script setup lang="ts">
interface MenuItem { label: string, path: string }

const menu: MenuItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Notes', path: '/notes' },
  { label: 'Composition vs Options', path: '/composition-vs-options' },
  { label: 'Data Binding', path: '/data-binding-and-directives' },
  { label: 'Methods and Computed', path: '/methods-and-computed-properties' },
  { label: 'Conditional and List Rendering', path: '/conditional-rendering' },
  { label: 'Lifecycle and Hooks', path: '/lifecycle-and-hooks' },
  { label: 'Props and custom events', path: '/props-and-custom-events' }
]

</script>

<template>
  <header>
    <ul class="menu">
      <li v-for="item in menu" class="menu__item">
        <NuxtLink :to="item.path">{{ item.label }}</NuxtLink>
      </li>
    </ul>
  </header>

  <main>
    <slot></slot>
  </main>
</template>

<style lang="css" scoped>
.menu {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin: 0 auto;
  max-width: 1200px;
  list-style: none;
}
</style>