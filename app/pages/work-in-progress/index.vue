<template>
    <main class="main container">
        <h1
            :class="{ animated: isAnimated }"
            class="text-112">
            Work <span>in progress</span>
        </h1>

        <BaseLink
            to="/"
            right-icon="arrow-right"
            class="link">
            Go to main page
        </BaseLink>
    </main>
</template>

<script setup lang="ts">
import BaseLink from '~/components/base/base-link/BaseLink.vue'

const isAnimated = shallowRef<boolean>(false)

useSeoMeta({
    title: 'Coming Soon',
    description:
        'This page is under construction. Stay tuned for new updates, innovative projects, and digital solutions from',
    ogTitle: 'Coming Soon',
    ogDescription:
        'This page is under construction. Stay tuned for new updates, innovative projects, and digital solutions from',
})

onMounted(() => {
    setTimeout(() => {
        isAnimated.value = true
    }, 300)
})
</script>

<style scoped>
.main {
    min-height: calc(100dvh - 15.1rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > h1 {
        position: relative;
        width: 100%;
        opacity: 0;
        transition-property: width, opacity;
        transition: 500ms linear;

        &::before {
            content: '';
            position: absolute;
            bottom: -1.75rem;
            left: 0;
            height: 0.25rem;
            width: 0;
            opacity: 0;
            background: var(--color-bw-400);

            transition-property: width, opacity;
            transition: 300ms 600ms linear;
        }

        &.animated::before {
            opacity: 1;
            width: 100%;
        }
    }

    & > h1.animated {
        opacity: 1;
        width: 55%;
    }

    & > h1 > span {
        display: block;
        text-align: right;
    }

    & > .link {
        margin-top: 3rem;
    }
}
</style>
