export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}`,
      consoleIt: (data: any) => console.log('consoleIt', data)
    }
  }
})