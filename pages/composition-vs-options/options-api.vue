<script>
export default {
  data() {
    return {
      title: 'Options API'
    }
  },
  methods: {
    hello() {
      return 'Hello from options api'
    }
  },
  mounted() {
    setTimeout(() => {
      this.title = 'Options API Updated after 2 seconds'
    }, 2000)
  }
}
</script>

<template>
  <h1>{{ title }}</h1>
  <p>{{ hello() }}</p>
</template>