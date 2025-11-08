<template>
    <svg aria-hidden="true">
        <use :xlink:href="`/assets/svg/icon.svg#${name}`"></use>
    </svg>
</template>

<script setup lang="ts">
import type { AtomIconType } from './atom-icon.type'

interface Props {
    name: AtomIconType
}

defineProps<Props>()
</script>
