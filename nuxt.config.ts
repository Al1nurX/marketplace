// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-10",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      Montserrat: [300, 400, 500, 600, 700],
      Roboto: [300, 400, 500, 600, 700],
    },
  },
  colorMode: {
    preference: "light",
  },
  alias: {
    '@assets': '/assets',
  },
});
