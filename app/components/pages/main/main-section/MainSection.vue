<template>
    <section
        ref="section"
        class="main-section container">
        <div class="main-section-content">
            <div class="section-content-left">
                <div class="text">
                    <h2 class="text-64">{{ title }}</h2>
                    <div
                        v-if="description"
                        v-html="description"
                        class="text-16" />
                </div>
                <BaseLink
                    :to="link"
                    right-icon="arrow-right">
                    {{ linkText }}
                </BaseLink>
            </div>
            <div
                :class="{ animated: targetIsVisible }"
                class="section-content-right">
                <picture v-if="image">
                    <source
                        v-if="imageWebp"
                        type="image/webp"
                        :srcset="imageWebp" />
                    <img
                        loading="lazy"
                        width="1800"
                        height="1200"
                        :alt="title"
                        :src="image" />
                </picture>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import BaseLink from '~/components/base/base-link/BaseLink.vue'
import { useIntersectionObserver } from '@vueuse/core'

interface Props {
    title: string
    description?: string
    link: string
    linkText: string
    image: string
    imageWebp?: string
}

defineProps<Props>()

const target = useTemplateRef<HTMLDivElement>('section')
const targetIsVisible = shallowRef<boolean>(false)

const { stop } = useIntersectionObserver(
    target,
    ([entry]) => {
        if (entry?.isIntersecting) {
            setTimeout(
                () => {
                    targetIsVisible.value = true
                },
                Math.min(Math.floor(Math.random() * 1000), 300)
            )
            stop()
        }
    },
    { threshold: 0.75 }
)
</script>

<style scoped>
.main-section {
    width: 100%;
    padding-right: 0;
    padding-left: 2.5rem;
    overflow: hidden;
    background-color: var(--color-bw-100);
}

.main-section-content {
    display: flex;
    justify-content: space-between;
    gap: 2.5rem;
}

.main-section-content .section-content-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.5rem;
    padding: 2.5rem 0;

    & .text > h2 {
        letter-spacing: 0.25rem;
        font-weight: 200;
    }

    & .text > div {
        margin-top: 1.5rem;
    }
}

.main-section-content .section-content-right {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 60%;
    width: 100%;

    opacity: 0;
    transform: translateX(25%);

    transition-property: transform, opacity;
    transition: 300ms linear;

    &.animated {
        opacity: 1;
        transform: translateX(0);
    }
}

.main-section-content .section-content-right img {
    width: 100%;
    height: 100%;
    max-height: 23rem;
    object-fit: cover;

    clip-path: polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%);
}
</style>
