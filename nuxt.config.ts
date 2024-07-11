// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-10",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/icon"],
  googleFonts: {
    families: {
      Inter: [400, 500],
      Marmelad: [400],
      "Alegreya Sans SC": [400, 800],
      Montserrat: [400, 500, 600, 700],
      Roboto: [400],
    },
  },
});
