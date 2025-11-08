<template>
    <nav class="container">
        <ol
            itemtype="https://schema.org/BreadcrumbList"
            itemscope
            aria-label="Breadcrumb"
            class="breadcrumb-list">
            <li
                v-for="(breadcrumb, index) in breadcrumbs"
                :key="breadcrumb.url"
                itemtype="https://schema.org/ListItem"
                itemscope
                itemprop="itemListElement"
                class="breadcrumb-item">
                <NuxtLink
                    v-if="index !== breadcrumbs.length - 1"
                    :to="breadcrumb.url"
                    itemprop="item"
                    :aria-current="
                        index + 1 === breadcrumbs.length ? 'page' : null
                    "
                    class="breadcrumb-link text-16">
                    <span itemprop="name">
                        {{ breadcrumb.name }}
                    </span>
                </NuxtLink>
                <span
                    v-else
                    itemprop="name">
                    {{ breadcrumb.name }}
                </span>
                <meta
                    itemprop="position"
                    :content="(index + 1).toString()" />
            </li>
        </ol>
    </nav>
</template>
<script setup lang="ts">
import type { BreadcrumbItem } from '~/components/base/base-breadcrumbs/base-breadcrumbs.type'

interface Props {
    breadcrumbs: BreadcrumbItem[]
}

defineProps<Props>()
</script>

<style scoped>
.breadcrumb-list {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
}

.breadcrumb-item {
    position: relative;
    margin-left: 0.25rem;
}

.breadcrumb-item::after {
    margin-left: 0.25rem;
    content: '/';
}

.breadcrumb-item:first-child {
    margin-left: 0;
}

.breadcrumb-item:last-child::after {
    display: none;
}

.breadcrumb-link {
    position: relative;
    color: var(--color-bw-200);
    transition: color 150ms linear;
}

.breadcrumb-link:not(:last-child) {
    &:hover,
    &:focus {
        color: var(--color-bw-400);
    }
}
</style>
