<template>
    <header class="header">
        <div class="header-content container">
            <NuxtLink
                to="/"
                aria-label="Home">
                <AtomIcon
                    name="logo"
                    class="logo" />
            </NuxtLink>
            <nav class="nav-links">
                <ul class="links">
                    <li>
                        <BaseLink to="/works/">Works</BaseLink>
                    </li>
                    <li>
                        <BaseLink to="/articles/">Articles</BaseLink>
                    </li>
                    <li>
                        <BaseLink to="/about/">About</BaseLink>
                    </li>
                </ul>
            </nav>
            <div class="buttons-container">
                <ChangeLanguage />
                <BaseAction>Let's work</BaseAction>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import AtomIcon from '~/components/atom/atom-icon/AtomIcon.vue'
import BaseLink from '~/components/base/base-link/BaseLink.vue'
import BaseAction from '~/components/base/base-actions/BaseAction.vue'
import ChangeLanguage from '~/components/widgets/change-language/ChangeLanguage.vue'
</script>

<style scoped>
.header {
    position: sticky;
    top: 0;
    z-index: 20;
    background-color: white;
}

.header-content {
    display: flex;
    gap: 5.5rem;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;
    color: var(--color-bw-400);
}

.logo {
    width: 5.25rem;
    height: 1.5rem;
    color: var(--color-bw-400);

    transition: color 150ms linear;

    &:hover {
        color: var(--color-accent-purple-dark);
    }
}

.nav-links {
    display: flex;
    width: 100%;
    flex-grow: 1;
    justify-content: flex-end;
}

.links {
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: end;
    gap: 3.75rem;
}

.buttons-container {
    display: flex;
    gap: 1rem;
    align-items: center;
}
</style>
