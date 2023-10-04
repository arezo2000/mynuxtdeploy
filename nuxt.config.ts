// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
    stripeSecret: process.env.NUXT_STRIPE_SECRET,
    stripeWebhookSecret: '',
    public: {
      stripeKey: process.env.NUXT_STRIPE_PUBLIC_KEY,
    },
  },
   nitro: {
    prerender: {
      routes: ['/landing'],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    '@pinia/nuxt'
  ],
});