<template>
    <AtomNavigate v-bind="props">
        <slot />
    </AtomNavigate>
</template>

<script setup lang="ts">
import AtomNavigate from '~/components/atom/atom-navigate/AtomNavigate.vue'
import {
    atomNavigateProps,
    atomNavigatePropsLikeNuxtLink,
} from '~/components/atom/atom-navigate/atom-navigate.types'

const props = defineProps({
    ...atomNavigateProps,
    ...atomNavigatePropsLikeNuxtLink,
})
</script>
