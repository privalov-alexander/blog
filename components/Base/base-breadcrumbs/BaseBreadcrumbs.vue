<template>
    <nav class="container">
        <ol
            itemtype="https://schema.org/BreadcrumbList"
            itemscope
            aria-label="Breadcrumb"
            class="mx-auto flex flex-wrap">
            <li
                v-for="(breadcrumb, index) in breadcrumbs"
                :key="breadcrumb.url"
                itemtype="https://schema.org/ListItem"
                itemscope
                itemprop="itemListElement"
                class="relative ml-1 after:ml-1 after:content-['/'] first:ml-0 last:after:hidden">
                <NuxtLink
                    v-if="index !== breadcrumbs.length - 1"
                    :to="breadcrumb.url"
                    itemprop="item"
                    :aria-current="
                        index + 1 === breadcrumbs.length ? 'page' : null
                    "
                    class="relative transition-all duration-300">
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
import type { PropType } from 'vue'

import type { BaseBreadcrumbsItemType } from './base-breadcrumbs.types'

defineProps({
    breadcrumbs: {
        type: Array as PropType<BaseBreadcrumbsItemType[]>,
        required: true,
    },
})
</script>
