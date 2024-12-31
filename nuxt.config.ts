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
      path: '~/components', // 컴포넌트가 있는 디렉터리
      pathPrefix: false, // 경로 기반 이름 생성을 비활성화
    },
  ],
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css', '~/assets/css/globals.css'],
  plugins: ['~/plugins/element-plus.js'],
});
