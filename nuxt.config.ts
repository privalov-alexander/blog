// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            api_url: process.env.API_URL,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
        },
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'ru',
            },
            meta: [
                {
                    name: 'viewport',
                    content:
                        'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no',
                },
                {
                    name: 'msapplication-TileColor',
                    content: '#f31a34',
                },
                {
                    name: 'theme-color',
                    content: '#ffffff',
                },
            ],
            link: [
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    type: 'image/x-icon',
                    href: '/favicons/apple-touch-icon.png',
                },
                {
                    rel: 'icon',
                    sizes: '32x32',
                    type: 'image/png',
                    href: '/favicons/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    sizes: '16x16',
                    type: 'image/png',
                    href: '/favicons/favicon-16x16.png',
                },
                {
                    rel: 'manifest',
                    href: '/favicons/site.webmanifest',
                },
                {
                    rel: 'mask-icon',
                    color: '#f31a34',
                    href: '/favicons/safari-pinned-tab.svg',
                },
            ],
        },
    },

    devtools: { enabled: true },
    css: ['~/assets/css/tailwind.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@pinia/nuxt'],
})
