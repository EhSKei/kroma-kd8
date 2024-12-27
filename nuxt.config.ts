// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  compatibilityDate: '2024-12-27',

  typescript: {
    typeCheck: true,
  },
  build: {
    transpile: ['element-plus'], // element-plus의 컴포넌트를 transpile
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  plugins: [
    { src: '~/plugins/element-plus.js', mode: 'client' },
    { src: '~/plugins/dayjs.js', mode: 'client' },
  ],
  modules: ['@nuxtjs/tailwindcss'],

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/globals.css',
    'element-plus/dist/index.css',
  ],
});
