import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({}).overrideRules({
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'vue/attributes-order': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
})
