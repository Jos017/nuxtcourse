import type { NuxtPage } from 'nuxt/schema';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  app: {
    head: {
      title: 'My Nuxt App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'My Nuxt App' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: ['~/assets/css/main.css'],
  features: { devLogs: false },
  // WE CAN CONFIG IF THE FOLDER FOR COMPONENTS USES PREFIX
  // components: [
  //   {
  //     path: '~/components',
  //     pathPrefix: false,
  //   }
  // ]

  // GLOBAL MIDDLEWARES ORDER CAN BE CONFIGURED BY ADDING A NUMBER BEFORE THE MIDDLEWARE NAME
  // CONFIGURING MIDDLEWARE FOR NOTES PAGES
  hooks: {
    'pages:extend'(pages) {
      const setMiddleware = (pages: NuxtPage[]) => {
        for (const page of pages) {
          if (page.path.startsWith('/notes')) {
            page.meta ||= {};
            page.meta.middleware = ['custom'];
          }
        }
      };

      setMiddleware(pages);
    },
  },
});
