export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.directive('debug', {
    mounted: (el: HTMLElement) => console.log('debug -->', el.innerHTML),
  });
});
