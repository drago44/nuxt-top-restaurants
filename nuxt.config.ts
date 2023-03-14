// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Restaurantly',
      meta: [{ name: 'description', content: 'My amazing site.' }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
        },
        {
          rel: 'preload',
          href: 'https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png',
          as: 'script',
        },
      ],
    },
  },
});
