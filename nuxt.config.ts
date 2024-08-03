// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-10",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts", "nuxt-swiper"],
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 900],
      Montserrat: [300, 400, 500, 600, 700, 900],
      Roboto: [300, 400, 500, 600, 700, 900],
    },
  },
  colorMode: {
    preference: "light",
  },
  // alias: {
  //   '@assets': '/assets',
  // },
});
