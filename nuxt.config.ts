// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-10",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts", "nuxt-swiper"],
  googleFonts: {
    families: {
      Inter: true,
      Montserrat: true,
      Roboto: true,
    },
  },
  colorMode: {
    preference: "light",
  },
  // alias: {
  //   '@assets': '/assets',
  // },
});
