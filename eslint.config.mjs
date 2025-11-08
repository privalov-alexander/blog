// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
    rules: {
        '@typescript-eslint/unified-signatures': 'off',
        'vue/html-self-closing': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-v-html': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
    },
})
