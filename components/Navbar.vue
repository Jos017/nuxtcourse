<script lang="ts" setup>
interface NavItem { label: string, path: string }

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'All Todos', path: '/project' },
  { label: 'Add Todos', path: '/project/todos/add/new' },
]
</script>

<template>
  <nav>
    <ul>
      <li v-for="item in NAV_ITEMS">
        <NuxtLink :to="item.path">{{ item.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>


<style scoped>
nav {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #ddd;
  text-decoration: underline;
}
</style>