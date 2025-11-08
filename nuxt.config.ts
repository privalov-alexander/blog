// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            api_url: process.env.API_URL,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
        },
    },
    router: {
        options: {
            scrollBehaviorType: 'smooth',
        },
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    property: 'og:site_name',
                    content: 'www.qtim.pro',
                },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '96x96',
                    href: '/favicon/favicon-96x96.png',
                },
                {
                    rel: 'icon',
                    type: 'image/svg+xml',
                    href: '/favicon/favicon.svg',
                },
                {
                    rel: 'shortcut icon',
                    href: '/favicon/favicon.ico',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/favicon/apple-touch-icon.png',
                },
                {
                    rel: 'manifest',
                    href: '/favicon/site.webmanifest',
                },
            ],
        },
    },
    srcDir: 'app',
    compatibilityDate: '2025-11-05',
    devtools: { enabled: false },
    css: [
        '@/assets/css/index.css',
        '@/assets/css/layout.css',
        '@/assets/fonts/jost/stylesheet.css',
    ],
    postcss: {
        plugins: {
            autoprefixer: {},
        },
    },
    modules: ['@pinia/nuxt', '@nuxt/eslint'],
})
