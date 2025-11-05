import vue from '@vitejs/plugin-vue'

export default {
    plugins: [vue()],
    resolve: {
        alias: {
            '~': '/',
        },
    },
    test: {
        environment: 'jsdom',
    },
    server: {
        watch: {
            ignored: [
                '**/node_modules/**',
                '**/.git/**',
                '**/dist/**'
            ],
            // code below solve 'ENOSPC' error on linux
            usePolling: true,
            interval: 100
        }
    }
}
