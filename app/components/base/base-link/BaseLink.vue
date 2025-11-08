<template>
    <NuxtLink
        :to="to || undefined"
        :class="{ 'accent-link': appearance === 'accent' }"
        class="link text-20">
        <AtomIcon
            v-if="leftIcon"
            :name="leftIcon" />
        <slot />
        <AtomIcon
            v-if="rightIcon"
            :name="rightIcon" />
    </NuxtLink>
</template>

<script setup lang="ts">
import type { AtomIconType } from '~/components/atom/atom-icon/atom-icon.type'
import AtomIcon from '~/components/atom/atom-icon/AtomIcon.vue'

interface Props {
    appearance?: 'dark' | 'accent'
    leftIcon?: AtomIconType | null
    rightIcon?: AtomIconType | null
    to?: string | null
}

withDefaults(defineProps<Props>(), {
    appearance: 'dark',
    leftIcon: null,
    rightIcon: null,
    to: null,
})
</script>

<style scoped>
.link {
    display: inline-flex;
    gap: 0.5rem;
    max-width: fit-content;
    position: relative;
    color: var(--color-bw-400);

    &::before {
        content: '';
        position: absolute;

        bottom: -0.25rem;
        left: 0;

        height: 0.125rem;
        width: 0;

        background-color: var(--color-bw-400);

        transition: width 150ms linear;
    }

    &:hover::before {
        width: 100%;
    }
}

.link.accent-link {
    color: var(--color-accent-purple-dark);

    &::before {
        background-color: var(--color-accent-purple-dark);
    }
}

.link svg {
    width: 1.5rem;
    height: 1.5rem;
}
</style>
