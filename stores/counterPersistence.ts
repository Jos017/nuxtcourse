import SecureLS from 'secure-ls';

export const useCounterPersistence = defineStore('counterPersistence', {
  state: () => ({
    count: 10,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
  // By default, pinia persists when set to true and save as a cookie
  // persist: true
  persist: {
    storage: {
      getItem: (key) =>
        new SecureLS({
          isCompression: false,
          encodingType: 'AES',
          encryptionSecret: '@Sdl#sd1234d,.',
        }).get(key),
      setItem: (key, value) =>
        new SecureLS({
          isCompression: false,
          encodingType: 'AES',
          encryptionSecret: '@Sdl#sd1234d,.',
        }).set(key, value),
    },
  },
});
