import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    // public: {
    //   apiBase: 'http://localhost:3030',
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
          content: 'A simple to use nuxt3 starter boilerplate',
        },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/scss/abstracts/variables.scss"; @import "~/node_modules/vuetify/lib/styles/main.sass";',
        },
      },
    },

    plugins: [svgLoader()],
  },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    '@invictus.codes/nuxt-vuetify',
    '@vueuse/nuxt',
    '@nuxtjs/device',
    'nuxt-icon',
  ],

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/scss/main.scss'
  ],

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light'
      },
    },
  },

  // @Doc SeoKit: Comment in <seo-kit /> tag for enabling nuxt seo extension
  // extends: ['nuxt-seo-kit'],

  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },
})
