// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css', '~/assets/css/globals.css'],
  plugins: ['~/plugins/element-plus.js'],
});
