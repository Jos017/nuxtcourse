<script setup lang="ts">
const value = ref('Value from card slots')
</script>

<template>
  <div class="card-child">
    <h3>This is child with slots</h3>
    <h4>
      <slot name="subtitle"></slot>
    </h4>
    <hr>
    <!-- Explicit default slot -->
    <!-- <slot name="default"></slot> -->

    <slot></slot> <!-- implicit default slot -->

    <slot name="scoped" :value="value"></slot>

    <slot name="footer"></slot>
  </div>
</template>

<style lang="css" scoped>
.card-child {
  border: 1px solid gray;
  border-radius: 8px;
  padding: 10px
}
</style>