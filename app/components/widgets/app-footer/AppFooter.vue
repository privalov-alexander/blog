<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-container">
                <p class="text-16">Is there a project?</p>
                <div class="footer-content">
                    <p class="text-112 footer-heading">Let’s work together</p>
                    <div class="footer-contacts">
                        <div>
                            <p>For all questions</p>
                            <div>
                                <BaseLink to="tel:89202780068">
                                    +7 (920) 278—00—68
                                </BaseLink>
                                <BaseLink to="mailto:qtim@agency.com">
                                    qtim@agency.com
                                </BaseLink>
                            </div>
                        </div>
                        <div>
                            <p>Office in Russia</p>
                            <div>
                                <p>139 Ruben Station Lake Drew, NM 52678</p>
                            </div>
                        </div>
                        <div>
                            <p>Office in Dubai</p>
                            <div>
                                <p>139 Ruben Station Lake Drew, NM 52678</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="footer-nav text-16">
                <ul>
                    <li><BaseLink target="_blank">Facebook</BaseLink></li>
                    <li><BaseLink target="_blank">Instagram</BaseLink></li>
                    <li><BaseLink target="_blank">Telegram</BaseLink></li>
                </ul>
                <button
                    type="button"
                    class="go-button text-32">
                    <span>Go</span>
                </button>
                <ul>
                    <li><BaseLink target="_blank">Behance</BaseLink></li>
                    <li><BaseLink target="_blank">Linkedin</BaseLink></li>
                    <li><BaseLink to="/privacy/">Privacy Policy</BaseLink></li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<script setup lang="ts">
import BaseLink from '~/components/base/base-link/BaseLink.vue'
</script>

<style scoped>
.footer {
    margin-top: 8.75rem;
    padding-top: 8.75rem;
    overflow: hidden;
    background-color: var(--color-accent-purple-light);
}

.footer .footer-container .footer-content {
    margin-top: 3.5rem;
    display: flex;
    justify-content: space-between;

    & > .footer-heading {
        flex-basis: 50%;
        flex-shrink: 0;
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 20px;
        line-height: 120%;
    }
}

.footer-content .footer-contacts {
    display: flex;
    flex-direction: column;
    gap: 2.25rem;

    & > div {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        & > div {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }
    }
}

.footer .footer-nav {
    margin-top: 17.125rem;
    width: 100%;
    display: flex;
    padding-bottom: 1.75rem;
    justify-content: space-between;

    & > ul {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    & .go-button {
        position: relative;
        background-color: transparent;
        cursor: pointer;

        color: white;

        & > span {
            z-index: 30;
            position: relative;
        }

        &::before,
        &::after {
            content: '';
            position: absolute;
            left: 50%;
            top: 40%;
            transform: translate(-50%, -40%) scale(1);
            border-radius: 100%;
        }

        &::before {
            z-index: 20;
            padding: 10rem;
            background-color: var(--color-bw-400);
            transition: transform 300ms 150ms ease-in;
        }

        &::after {
            z-index: 10;
            padding: 10rem;
            background-color: var(--color-bw-200);
            opacity: 0.5;
            transition-property: transform, opacity;
            transition: 300ms ease-in;
            box-shadow: 0 0 20px 4px var(--color-bw-200);
        }

        &:hover::before,
        &:hover::after {
            transform: translate(-50%, -40%) scale(1.25);
        }
    }
}
</style>
