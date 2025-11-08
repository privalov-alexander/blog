<template>
    <div class="change-language">
        <button
            type="button"
            :aria-label="`language ${selectedLanguage}`"
            class="language-button"
            @click="toggleMenu">
            <AtomIcon
                :name="iconByLanguage[selectedLanguage]"
                class="icon" />
        </button>

        <div
            :class="{ open: isLanguageMenuOpen }"
            class="language-list">
            <button
                v-for="language in LANGUAGES"
                :key="language"
                type="button"
                :aria-label="
                    selectedLanguage === language
                        ? `language ${selectedLanguage} already selected`
                        : `select ${selectedLanguage} language`
                "
                :class="{ selected: selectedLanguage === language }"
                class="language-button">
                <AtomIcon
                    :name="iconByLanguage[language]"
                    class="icon"
                    @click="selectLanguage(language)" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import AtomIcon from '~/components/atom/atom-icon/AtomIcon.vue'
import type { AtomIconType } from '~/components/atom/atom-icon/atom-icon.type'

const LANGUAGES: string[] = ['en-US']

const iconByLanguage: { [key: string]: AtomIconType } = {
    'en-US': 'english',
}

const selectedLanguage = defineModel<string>({
    default: 'en-US',
})

const isLanguageMenuOpen = shallowRef(false)

function toggleMenu() {
    isLanguageMenuOpen.value = !isLanguageMenuOpen.value
}

function selectLanguage(language: string) {
    selectedLanguage.value = language
    toggleMenu()
}
</script>

<style scoped>
.change-language {
    position: relative;
    flex-shrink: 0;
    z-index: 20;
    border-radius: 100%;
}

.language-list {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-10px);
    opacity: 0;
    pointer-events: none;

    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    width: max-content;
    padding: 0.875rem;

    transition-property: opacity, transform;
    transition: 150ms linear;

    &.open {
        opacity: 1;
        pointer-events: auto;
        transform: translateX(-50%) translateY(0px);
    }
}

.language-button {
    width: 3.25rem;
    height: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #0000001a;
    border-radius: 100%;
    background: white;
    cursor: pointer;

    transition: background-color 150ms linear;

    & > .icon {
        width: 1.5rem;
        height: 1.5rem;
        transition: transform 150ms linear;
    }

    &:hover > .icon {
        transform: scale(1.5);
    }

    &.selected {
        background: var(--color-accent-purple-light);
    }
}
</style>
