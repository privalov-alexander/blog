<template>
    <nav
        aria-label="Пагинация"
        class="pagination">
        <NuxtLink
            :to="getPrevLink"
            :rel="canGoFirstOrPrev ? 'prev' : null"
            :aria-current="null"
            :class="{ disabled: !canGoFirstOrPrev }"
            class="previous-page"
            @click.prevent="onClickPage(modelValue - 1)">
            <AtomIcon
                name="chevron-left"
                class="icon" />
        </NuxtLink>
        <ul class="page-list text-16">
            <li
                v-for="(page, index) of displayedPages"
                :key="`${page}-${index}`"
                style="display: flex">
                <NuxtLink
                    v-if="typeof page === 'number'"
                    :to="getLink(page)"
                    :aria-current="modelValue === page ? true : null"
                    :aria-label="`Страница ${page}`"
                    :class="{ active: modelValue === page }"
                    class="page"
                    @click.prevent="onClickPage(page)">
                    {{ page }}
                </NuxtLink>
                <span
                    v-else
                    class="divider">
                    {{ page }}
                </span>
            </li>
        </ul>
        <NuxtLink
            :to="getNextLink"
            :rel="canGoLastOrNext ? 'next' : null"
            :aria-current="null"
            :class="{ disabled: !canGoLastOrNext }"
            class="next-page"
            @click.prevent="onClickPage(modelValue + 1)">
            <AtomIcon
                name="chevron-right"
                class="icon" />
        </NuxtLink>
    </nav>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { BasePaginationType } from '~/components/base/base-pagination/base-pagination.type'
import AtomIcon from '~/components/atom/atom-icon/AtomIcon.vue'

interface Props {
    /**
     * Объект приходящий из запроса
     */
    pagination: BasePaginationType
    /**
     * Максимальное количество отображаемых кнопок (минимальное кол-во 5)
     */
    max?: number
    /**
     * Разделитель, который выводится если кнопок больше props.max
     */
    divider?: string
}

const PAGE_KEY = 'page'
const modelValue = defineModel({
    type: Number as PropType<number>,
    required: true,
})

const props = withDefaults(defineProps<Props>(), {
    max: 5,
    divider: '...',
})

const displayedPages = computed(() => {
    const maxDisplayedPages = Math.max(props.max, 5)
    const r = Math.floor(
        (Math.min(maxDisplayedPages, props.pagination?.total_pages) - 5) / 2
    )
    const r1 = modelValue.value - r
    const r2 = modelValue.value + r

    const beforeWrapped = r1 - 1 > 1
    const afterWrapped = r2 + 1 < props.pagination?.total_pages

    const items: Array<number | string> = []

    if (props.pagination?.total_pages <= maxDisplayedPages) {
        for (let i = 1; i <= props.pagination?.total_pages; i++) {
            items.push(i)
        }
        return items
    }

    items.push(1)

    if (beforeWrapped) items.push(props.divider)

    if (!afterWrapped) {
        const addedItems =
            modelValue.value + r + 2 - props.pagination?.total_pages
        for (
            let i = modelValue.value - r - addedItems;
            i <= modelValue.value - r - 1;
            i++
        ) {
            items.push(i)
        }
    }

    for (
        let i = Math.max(2, r1);
        i <= Math.min(props.pagination?.total_pages, r2);
        i++
    ) {
        items.push(i)
    }

    if (!beforeWrapped) {
        const addedItems = 1 - (modelValue.value - r - 2)
        for (
            let i = modelValue.value + r + 1;
            i <= modelValue.value + r + addedItems;
            i++
        ) {
            items.push(i)
        }
    }

    if (afterWrapped) items.push(props.divider)

    if (r2 < props.pagination?.total_pages) {
        items.push(props.pagination?.total_pages)
    }

    // Replace divider by number on start edge case [1, '…', 3, ...]
    if (items.length >= 3 && items[1] === props.divider && items[2] === 3) {
        items[1] = 2
    }

    // Replace divider by number on end edge case [..., 48, '…', 50]
    if (
        items.length >= 3 &&
        items[items.length - 2] === props.divider &&
        items[items.length - 1] === items.length
    ) {
        items[items.length - 2] = items.length - 1
    }

    return items
})

const canGoFirstOrPrev = computed(() => modelValue.value > 1)
const canGoLastOrNext = computed(
    () => modelValue.value < props.pagination?.total_pages
)

const getPrevLink = computed(() => {
    return canGoFirstOrPrev.value
        ? `${urlWithoutPage.value}${PAGE_KEY}=${modelValue.value - 1}`
        : null
})

const getNextLink = computed(() => {
    return canGoLastOrNext.value
        ? `${urlWithoutPage.value}${PAGE_KEY}=${modelValue.value + 1}`
        : null
})

const getLink = (page: number) => {
    return modelValue.value !== page
        ? `${urlWithoutPage.value}${PAGE_KEY}=${page}`
        : null
}
const route = useRoute()
const urlWithoutPage = computed(() => {
    let url = route.path
    const queries = route.query
    if (Object.keys(queries)) {
        url += '?'
    }
    Object.keys(queries).forEach((query) => {
        if (query !== PAGE_KEY) {
            url += query + '=' + queries[query] + '&'
        }
    })
    return url
})

function onClickPage(page: number | string) {
    modelValue.value = Number(page)
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
</script>

<style scoped>
.pagination {
    display: flex;
    gap: 1rem;
}

.previous-page,
.next-page {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
    padding: 0.5rem;
    color: var(--color-bw-200);
    border: 1px solid var(--color-bw-200);
    width: 3rem;
    height: 3rem;

    transition-property: color, background-color, border-color;
    transition: 150ms linear;

    &:hover,
    &:focus {
        color: var(--color-bw-300);
        border-color: var(--color-bw-300);
    }

    &:active {
        color: var(--color-bw-100);
        border-color: var(--color-bw-400);
        background-color: var(--color-bw-400);
    }

    &.disabled {
        color: var(--color-bw-100);
        border-color: var(--color-bw-100);
        pointer-events: none;
    }

    & > .icon {
        width: 1.5rem;
        height: 1.5rem;
    }
}

.page-list {
    display: flex;
    gap: 0.5rem;
}

.page {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
    padding: 0.5rem 1rem;
    width: 3rem;
    height: 3rem;
    user-select: none;

    background-color: var(--color-bw-100);

    transition-property: color, background-color;
    transition: 150ms linear;

    &:hover,
    &:focus {
        color: var(--color-bw-100);
        background-color: var(--color-bw-200);
    }

    &.active,
    &:active {
        color: var(--color-bw-100);
        background-color: var(--color-bw-400);
    }
}

.divider {
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0.5rem 1rem;
}
</style>
