<template>
    <Component
        :is="component"
        :to="to"
        :disabled="isButton ? disabled || isLoading : null"
        :type="isButton ? type : null"
        :class="{
            'button-primary': apperrance === 'primary',
        }"
        class="relative inline-flex items-center justify-center space-x-2.5 transition">
        <AtomIcon
            v-if="iconLeft"
            :name="iconLeft"
            :class="isLoading ? 'opacity-0' : null"
            class="size-5" />
        <span :class="{ 'opacity-0': isLoading }">
            <slot />
        </span>
        <AtomIcon
            v-if="iconRight"
            :name="iconRight"
            :class="isLoading ? 'opacity-0' : null"
            class="size-5" />
        <span
            v-if="isLoading"
            class="loading-animation absolute inset-0 !ml-0 flex w-full items-center justify-center space-x-2">
            <!-- TODO: Добавить background -->
            <span class="inline-block size-2 rounded-full"></span>
            <!-- TODO: Добавить background -->
            <span class="inline-block size-2 rounded-full"></span>
            <!-- TODO: Добавить background -->
            <span class="inline-block size-2 rounded-full"></span>
        </span>
    </Component>
</template>

<script setup lang="ts">
import AtomIcon from '~/components/atom/atom-icon/AtomIcon.vue'

import {
    atomNavigateProps,
    atomNavigatePropsLikeButton,
    atomNavigatePropsLikeNuxtLink,
} from './atom-navigate.types'

/**
 * Минимальное время отображения лоадера - 500мс,
 * чтобы при быстрых ответах от сервера кнопка не «моргала».
 */
const LOADER_MIN_DISPLAY_INTERVAL = 500

const props = defineProps({
    ...atomNavigateProps,
    ...atomNavigatePropsLikeButton,
    ...atomNavigatePropsLikeNuxtLink,
})

const component = computed(() => {
    if (props.to) return resolveComponent('NuxtLink')
    return 'button'
})

const isButton = computed(() => {
    return component.value === 'button'
})

const isLoading = ref(false)

watchEffect(() => {
    if (!props.loading) {
        setTimeout(() => {
            isLoading.value = false
        }, LOADER_MIN_DISPLAY_INTERVAL)
    } else {
        isLoading.value = true
    }
})
</script>
<style scoped>
.loading-animation span:nth-child(1) {
    animation: bounce 1s infinite;
}

.loading-animation span:nth-child(2) {
    animation: bounce 1s 100ms infinite;
}

.loading-animation span:nth-child(3) {
    animation: bounce 1s 200ms infinite;
}

@keyframes bounce {
    0%,
    100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        opacity: 1;
    }
    50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        opacity: 0.5;
    }
}
</style>
