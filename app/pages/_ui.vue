<template>
    <main class="container">
        <h1 class="text-84">UI</h1>

        <section class="ui-section">
            <h2 class="text-36">AtomIcon</h2>
            <div class="ui-section-grid grid-cols-4">
                <article
                    v-for="icon in icons"
                    :key="icon"
                    class="ui-item">
                    <AtomIcon
                        :name="icon"
                        class="ui-atom-icon" />
                    <p class="ui-item-name text-20">{{ icon }}</p>
                </article>
            </div>
        </section>

        <section class="ui-section">
            <h2 class="text-36">BaseLink</h2>
            <div class="ui-section-grid grid-cols-4">
                <article class="ui-item">
                    <BaseLink to="/">Home</BaseLink>
                </article>
                <article class="ui-item">
                    <BaseLink
                        to="/"
                        left-icon="arrow-left">
                        Home
                    </BaseLink>
                </article>
                <article class="ui-item">
                    <BaseLink
                        to="/"
                        right-icon="arrow-right">
                        Home
                    </BaseLink>
                </article>
                <article class="ui-item">
                    <BaseLink
                        to="/"
                        left-icon="arrow-left"
                        right-icon="arrow-right">
                        Home
                    </BaseLink>
                </article>

                <article class="ui-item">
                    <BaseLink
                        to="/"
                        appearance="accent">
                        Home
                    </BaseLink>
                </article>
                <article class="ui-item">
                    <BaseLink
                        to="/"
                        appearance="accent"
                        left-icon="arrow-left">
                        Home
                    </BaseLink>
                </article>
                <article class="ui-item">
                    <BaseLink
                        to="/"
                        appearance="accent"
                        right-icon="arrow-right">
                        Home
                    </BaseLink>
                </article>
                <article class="ui-item">
                    <BaseLink
                        to="/"
                        appearance="accent"
                        left-icon="arrow-left"
                        right-icon="arrow-right">
                        Home
                    </BaseLink>
                </article>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import AtomIcon from '~/components/atom/atom-icon/AtomIcon.vue'
import BaseLink from '~/components/base/base-link/BaseLink.vue'
import type { AtomIconType } from '~/components/atom/atom-icon/atom-icon.type'

const icons: AtomIconType[] = ['logo', 'arrow-left', 'arrow-right']
</script>

<style>
.ui-section {
    margin-top: 2.5rem;
}

.ui-section:first-of-type {
    margin-top: 5rem;
}

.ui-section-grid {
    display: grid;
    gap: 2rem 1.25rem;
    margin-top: 2rem;
}

.ui-section-grid.grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
}
.ui-section-grid.grid-cols-4 {
    grid-template-columns: repeat(4, 1fr);
}

.ui-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.ui-item-name {
    text-align: center;
}

.ui-atom-icon {
    width: auto;
    height: 24px;
    color: var(--color-bw-400);
}
</style>
