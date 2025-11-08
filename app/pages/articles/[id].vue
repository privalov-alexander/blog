<template>
    <main
        v-if="article"
        class="container">
        <BaseBreadcrumbs :breadcrumbs="BREADCRUMBS" />

        <h1 class="text-84 article-heading">{{ article.title }}</h1>

        <picture v-if="article.image">
            <img
                loading="lazy"
                width="1216"
                height="700"
                :alt="article.title"
                src="https://placehold.co/280x280"
                class="article-image" />
        </picture>

        <section class="about-section">
            <h2 class="text-16">About</h2>
            <div
                v-if="article.description"
                v-html="article.description"
                class="text-36" />
        </section>
    </main>
</template>

<script setup lang="ts">
import type { IArticle } from '~/types/article.type'
import type { BreadcrumbItem } from '~/components/base/base-breadcrumbs/base-breadcrumbs.type'
import BaseBreadcrumbs from '~/components/base/base-breadcrumbs/BaseBreadcrumbs.vue'

const route = useRoute()
const nuxtApp = useNuxtApp()

const { data: article, error } = await useApiFetch<IArticle>(
    '/posts/' + route.params.id,
    {
        key: 'article' + route.params.id,
        getCachedData(key) {
            return nuxtApp.payload.data[key]
        },
    }
)

if (error.value) {
    throw createError({
        ...error.value,
        fatal: true,
    })
}

const BREADCRUMBS: BreadcrumbItem[] = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'Articles',
        url: '/articles/',
    },
    {
        name: article.value?.title || '',
        url: '/articles/' + route.params.id,
    },
]
</script>

<style scoped>
.article-heading {
    margin-top: 7.5rem;
}

.article-image {
    aspect-ratio: 16/9;
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-top: 2.5rem;
}

.about-section {
    margin-top: 5rem;
    max-width: 55%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>
