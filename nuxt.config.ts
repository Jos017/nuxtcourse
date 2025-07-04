import type { NuxtPage } from "nuxt/schema"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
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
    'pages:extend' (pages) {
      const setMiddleware = (pages: NuxtPage[]) => {
        for (const page of pages) {
          if (page.path.startsWith('/notes')) {
            page.meta ||= {}
            page.meta.middleware=['custom']
          }
        }
      }

      setMiddleware(pages);
    }
  }
})
