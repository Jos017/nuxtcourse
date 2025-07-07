<script setup lang="ts">
const buttonColors = reactive({
  color: '#fff',
  bg: '#000'
})

// onBeforeMount(() => {
//   alert('This alert is showing before the page is mounted')
// })
// onMounted(() => {
//   setTimeout(() => {
//     alert('This alert is showing after the page is mounted')
//   }, 0)
// })
//
// onBeforeUnmount(() => {
//   alert('This alert is showing before the page is unmounted')
// })
// onUnmounted(() => {
//   setTimeout(() => {
//     alert('This alert is showing after the page is unmounted')
//   }, 0)
// })
// onBeforeUpdate(() => {
//   alert('Your color will change')
// })
// onUpdated(() => {
//   setTimeout(() => {
//     alert('your color has changed')
//   }, 0)
// })

// HOOKS
// ---- watch ----
watch(() => [buttonColors.bg, buttonColors.color], ([newBg, newColor], [oldBg, oldColor]) => {
  console.log('the new background color is ', newBg)
  console.log('the old background color is ', oldBg)
  console.log('the new color is ', newColor)
  console.log('the old color is ', oldColor)
}, { deep: true })

const randomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
const contrastHexColor = (hexColor: string) => {
  const r = parseInt(hexColor.slice(1, 3), 16)
  const g = parseInt(hexColor.slice(3, 5), 16)
  const b = parseInt(hexColor.slice(5, 7), 16)
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
  return yiq >= 128 ? '#000000' : '#FFFFFF'
}
const updateButtonColors = () => {
  buttonColors.bg = randomHexColor()
  buttonColors.color = contrastHexColor(buttonColors.bg)
}
</script>

<template>
  <div>
    <h1>Lifecycle and Hooks</h1>
    <button :style="{ backgroundColor: buttonColors.bg, color: buttonColors.color }" @click="updateButtonColors()">
      Change color
    </button>
  </div>
</template>