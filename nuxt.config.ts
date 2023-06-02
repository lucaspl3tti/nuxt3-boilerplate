import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    // public: {
    //   apiBase: 'https://backend.garnele-online.de/wp-json',
    // },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt3 Boilerplate',
      meta: [
        {
          name: 'description',
          content:
            'A simple to use nuxt3 starter boilerplate',
        },
      ]
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/scss/abstracts/variables.scss";',
        },
      },
    },

    plugins: [svgLoader()],
  },

  imports: {
    dirs: ['stores']
  },

  modules: [
    ['@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate']
      }
    ],
    '@vueuse/nuxt',
    '@nuxtjs/device',
    'bootstrap-vue-next/nuxt',
    'nuxt-icon',
  ],

  css: ['bootstrap/scss/bootstrap.scss', '~/assets/scss/main.scss'],

  extends: ['nuxt-seo-kit'],

  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
})
