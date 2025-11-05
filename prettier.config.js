module.exports = {
    plugins: [
        '@trivago/prettier-plugin-sort-imports',
        import('prettier-plugin-organize-attributes'),
        import('prettier-plugin-tailwindcss'),
    ],
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    bracketSameLine: true,
    singleAttributePerLine: true,
    tailwindConfig: './tailwind.config.js',
    attributeGroups: [
        '^v-if$',
        '^v-else-if$',
        '^v-else$',
        '^v-for$',
        '^:is$',
        '^:key$',
        '^v-show$',
        '^v-cloak$',
        '^v-once$',
        '^v-pre$',
        '^(id|:id)$',
        '^(to|:to)$',
        '^v-model$',
        '^v-model:[a-zA-Z]+$',
        '$DEFAULT',
        '^(style|:style)$',
        '^(width|:width)$',
        '^(height|:height)$',
        '^(alt|:alt)$',
        '^(src|:src)$',
        '^:.*$',
        '^:class$',
        '^class$',
        '^@.*$',
    ],
    importOrder: [
        '^@nuxtjs/(.*)$', // Nuxt.js модули
        '<THIRD_PARTY_MODULES>', // Внешние модули из node_modules
        '^~/components/(.*)$', // Компоненты Vue
        '^~/composables/(.*)$', // Composables функции
        '^~/store/(.*)$', // Vuex store модули
        '^~/utils/(.*)$', // Утилиты
        '^~/plugins/(.*)$', // Плагины
        '^~/assets/(.*)$', // Статические ресурсы, такие как изображения или стили
        '^~/styles/(.*)$', // Стили
        '^[./]', // Локальные импорты (файлы и директории, начинающиеся с . или /)
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
}
