<script setup lang="ts">
import type { Directive } from 'vue';

const testStr = ref('This is showing from variable'); // inferring type string
const five = ref(6); // inferring type number
const imageWidth = ref(200);
const imageHeight = ref(150);
const imageUrl = ref(`https://picsum.photos/200/150`);

const updateImageSize = (width: number, height: number): void => {
  if (width <= 0 || height <= 0) {
    console.error('Could not update image size, width and height must be greater than 0');
    return
  }
  imageUrl.value = `https://picsum.photos/${width}/${height}`
}

const vFocus: Directive = {
  mounted:  (el: HTMLElement) => el.focus(),
}

</script>

<template>
  <div>
    <h1>Data Binding and Directives</h1>
    <h3>Showing string from variable</h3>
    <p>{{ testStr }}</p>
    <br>
    <h3>Showing number from variable</h3>
    <!-- Interpolation -->
    <p>{{ five === 5 ? `The number "${five}" is five` : `The number "${five}" is not equal to five` }}</p>
    <br>
    <h3>Showing image from variable with v-bind directive</h3>
    <!-- Using v-bind(:) -->
    <!-- We can replace v-bind with : -->
    <img v-bind:src="imageUrl" alt="Random image" />
    <br>
    <h3 v-debug>Updating image from input with v-model directive</h3>
    <!-- Using v-model -->
    <input type="number" placeholder="Width" v-model="imageWidth" />
    <!-- Using creating a directive v-focus-->
    <input type="number" placeholder="Height" v-model="imageHeight" v-focus />
    <button @click="updateImageSize(imageWidth, imageHeight)">Update Image</button>
  </div>
</template>