<template>
  <div>
    <h1>Slots and Scoped Slots</h1>
    <CardSlots>
      <p>This is being inserted from the parent using implicit default slot</p>
    </CardSlots>
    <CardSlots>
      <template v-slot>
        <p>This is being inserted from the parent using explicit default slot</p>
      </template>
      <template v-slot:subtitle>
        <p>This is being inserted from the parent using named subtitle slot</p>
      </template>
      <template v-slot:footer>
        <p>This is being inserted from the parent using named footer slot</p>
      </template>
      <template v-slot:scoped="myProps">
        <p>This is being inserted from the parent using scoped slot: {{ myProps.value }}</p>
      </template>
    </CardSlots>
  </div>
</template>