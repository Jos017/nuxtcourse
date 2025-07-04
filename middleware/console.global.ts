export default defineNuxtRouteMiddleware((to, from) => {
  console.log('global middleware');
  console.log('navigate from', from, 'to', to)
})