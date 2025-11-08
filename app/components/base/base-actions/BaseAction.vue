<template>
    <Component
        :is="component"
        :to="to"
        :type="isButton ? type : null"
        :class="{ disabled: disabled }"
        :disabled
        class="base-action text-20">
        <AtomIcon
            v-if="leftIcon"
            :name="leftIcon"
            class="icon" />
        <slot />
        <AtomIcon
            v-if="rightIcon"
            :name="rightIcon"
            class="icon" />
    </Component>
</template>

<script setup lang="ts">
import AtomIcon from '~/components/atom/atom-icon/AtomIcon.vue'

import type { BaseActionProps } from './base-action.type'

const props = withDefaults(defineProps<BaseActionProps>(), {
    type: 'button',
})

const component = computed(() => {
    return props.to ? resolveComponent('NuxtLink') : 'button'
})

const isButton = computed<boolean>(() => {
    return component.value === 'button'
})
</script>

<style scoped>
.base-action {
    position: relative;
    padding: 1rem 2rem;
    display: flex;
    flex-shrink: 0;

    justify-content: center;
    align-items: center;
    outline: none;
    transition-property: background-color, border-color, color;
    transition: 150ms linear;
    gap: 0.5rem;
    border: 1px solid transparent;
    border-radius: 25rem;

    &.disabled {
        color: var(--color-bw-200);
        background-color: var(--color-bw-100);
        border-color: var(--color-bw-100);
    }

    &:not(.disabled) {
        cursor: pointer;
        color: var(--color-bw-100);
        background-color: var(--color-bw-400);
        border-color: var(--color-bw-400);

        &:hover,
        &:focus {
            background-color: var(--color-bw-100);
            color: var(--color-bw-300);
        }

        &:active {
            background-color: var(--color-bw-400);
            color: var(--color-bw-100);
        }
    }

    & > .icon {
        width: 1.25rem;
        height: 1.25rem;
    }
}
</style>
