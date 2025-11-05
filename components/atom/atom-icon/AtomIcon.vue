<template>
    <svg
        aria-hidden="true"
        width="24"
        height="24">
        <use :xlink:href="`/assets/svg/icon.svg#${name}`"></use>
    </svg>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'

import { type AtomIconType, atomIconNameArray } from './atom-icon.type'

defineProps({
    name: {
        /*
         * Название иконки
         */
        type: String as PropType<AtomIconType>,
        validator: (value: AtomIconType) => {
            return atomIconNameArray.includes(value)
        },
        required: true,
    },
})
</script>
