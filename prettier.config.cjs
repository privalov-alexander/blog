module.exports = {
    plugins: ['prettier-plugin-organize-attributes'],
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    bracketSameLine: true,
    singleAttributePerLine: true,
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
        '^~/app/components/(.*)$', // Компоненты Vue
        '^~/app/composables/(.*)$', // Composables функции
        '^~/app/store/(.*)$', // Vuex store модули
        '^~/app/utils/(.*)$', // Утилиты
        '^~/app/plugins/(.*)$', // Плагины
        '^~/app/assets/(.*)$', // Статические ресурсы, такие как изображения или стили
        '^~/app/styles/(.*)$', // Стили
        '^[./]', // Локальные импорты (файлы и директории, начинающиеся с . или /)
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
}
