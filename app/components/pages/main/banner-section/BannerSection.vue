<template>
    <section
        ref="banner"
        class="container">
        <h1
            :class="{ animated: targetIsVisible }"
            class="banner text-112">
            Qtim —
            <span>a step into the future</span>
        </h1>
    </section>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const target = useTemplateRef<HTMLDivElement>('banner')
const targetIsVisible = shallowRef<boolean>(false)

const { stop } = useIntersectionObserver(
    target,
    ([entry]) => {
        if (entry?.isIntersecting) {
            targetIsVisible.value = true
            stop()
        }
    },
    { threshold: 0.75 }
)
</script>

<style scoped>
.banner {
    overflow: hidden;
    font-weight: 200;

    & > span {
        display: block;
        text-align: right;

        opacity: 0;
        transform: translateX(25%);

        transition-property: transform, opacity;
        transition: 500ms ease-in-out;
    }

    &.animated > span {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
