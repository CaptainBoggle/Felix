export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    [
      '@nuxt/image',
      {
        provider: 'static',
        dir: 'assets/images',
      },

    ],
    '@nuxt/content',
    '@nuxtjs/sitemap',
    'nuxt-simple-robots',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: true,
      crawlLinks: true,
      routes: ['/', '/sitemap.xml'],
    },
  },

  image: {
    domains: ['felixmontanari.com'],
  },

  site: {
    url: 'https://felixmontanari.com',
  },

  sitemap: {
    enabled: true,
    cacheMaxAgeSeconds: 3600,
    discoverImages: true,
    credits: false,
  },

  content: {},

  robots: {
    enabled: true,
    disallow: ['/404'],
    credits: false,
  },
});
