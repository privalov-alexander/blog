<template>
    <main class="container">
        <BaseBreadcrumbs :breadcrumbs="BREADCRUMBS" />

        <h1 class="text-84 articles-heading">Articles</h1>

        <section class="articles-section">
            <div class="articles">
                <BaseCard
                    v-for="article in articlesByPage"
                    :key="article.id"
                    :to="`/articles/${article.id}`"
                    :title="article.title"
                    :image="article.image" />
            </div>
            <BasePagination
                v-model="currentPage"
                :pagination="pagination" />
        </section>
    </main>
</template>

<script setup lang="ts">
import type { IArticle } from '~/types/article.type'
import BaseCard from '~/components/base/base-card/BaseCard.vue'
import BasePagination from '~/components/base/base-pagination/BasePagination.vue'
import BaseBreadcrumbs from '~/components/base/base-breadcrumbs/BaseBreadcrumbs.vue'
import type { BreadcrumbItem } from '~/components/base/base-breadcrumbs/base-breadcrumbs.type'

const BREADCRUMBS: BreadcrumbItem[] = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'Articles',
        url: '/articles/',
    },
]

const route = useRoute()
const nuxtApp = useNuxtApp()

const currentPage = ref<number>(Number(route.query.page) || 1)

// Server does not support pagination -> simulate
const { data: articles, error } = await useApiFetch<IArticle[]>('/posts/', {
    key: 'articles',
    getCachedData(key) {
        return nuxtApp.payload.data[key]
    },
})

if (error.value) {
    throw createError({
        ...error.value,
        fatal: true,
    })
}

const pagination = computed(() => {
    return {
        total: 86,
        count: 1,
        per_page: 8,
        current_page: currentPage.value,
        total_pages: 11,
        links: {
            previous:
                currentPage.value === 1
                    ? undefined
                    : `/articles?page=${currentPage.value - 1}`,
            next:
                currentPage.value === 11
                    ? undefined
                    : `/articles?page=${currentPage.value + 1}`,
        },
        available_per_pages: [],
    }
})

const articlesByPage = computed<IArticle[]>(() => {
    if (!articles.value) return []

    return articles.value
        .slice(8 * (currentPage.value - 1), currentPage.value * 8)
        .map((article) => ({
            ...article,
            image: 'https://placehold.co/280x280',
        }))
})
</script>

<style scoped>
.articles-heading {
    margin-top: 7.5rem;
}

.articles {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem 2rem;
    margin-top: 3.75rem;
}

.articles-section {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}
</style>
