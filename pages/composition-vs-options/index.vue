<script setup lang="ts">
import { NuxtLink } from '#components';

</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Aspect</th>
        <th>
          <NuxtLink to="/composition-vs-options/composition-api">Composition API</NuxtLink>
        </th>
        <th>
          <NuxtLink to="/composition-vs-options/options-api">Options API</NuxtLink>
        </th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td>Syntax and Structure</td>
        <td>Function based (setup())</td>
        <td>Object based</td>
      </tr>
      <tr>
        <td>Reusability</td>
        <td>High, via composable functions</td>
        <td>Moderate, via mixins or higher order components</td>
      </tr>
      <tr>
        <td>TypeScript Support</td>
        <td>Natural and ergonomic</td>
        <td>Less intuitive</td>
      </tr>
      <tr>
        <td>Readability</td>
        <td>Can be less readable due to function-based logic</td>
        <td>More readable with clear separation of concerns</td>
      </tr>
      <tr>
        <td>Reactivity</td>
        <td>Explicit (ref, reactive)</td>
        <td>Implicit (data, computed, methods)</td>
      </tr>
      <tr>
        <td>Lifecycle hooks</td>
        <td>Imported and used in setup</td>
        <td>Defined as properties</td>
      </tr>
    </tbody>

  </table>
</template>

<style lang="css" scoped>
th {
  background-color: #ccc;
}

td,
th {
  padding: 0.25rem;
  border: 1px solid #000;
}

tr td:first-child {
  font-weight: 700;
}
</style>