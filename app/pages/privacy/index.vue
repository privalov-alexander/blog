<template>
    <main class="container">
        <BaseBreadcrumbs :breadcrumbs="BREADCRUMBS" />
        <h1 class="text-84 privacy-heading">Privacy Policy</h1>

        <div class="text-20 privacy-text">
            <p class="last-update">Last updated: November 8, 2025</p>

            <p>
                This Privacy Policy describes how we collect, use, and protect
                information when you visit our website (the “Service”). This
                document is provided for demonstration and does not constitute
                legal advice.
            </p>

            <h2 class="text-36">1. Information We Collect</h2>
            <h3 class="text-36">1.1. Information You Provide</h3>
            <ul>
                <li>
                    Name, email address, or other details you voluntarily submit
                    through forms.
                </li>
                <li>
                    Messages you send through contact forms or feedback tools.
                </li>
            </ul>

            <h3 class="text-36">1.2. Automatically Collected Information</h3>
            <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent on them</li>
                <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 class="text-36">2. How We Use Information</h2>
            <ul>
                <li>Providing and maintaining the Service</li>
                <li>Improving the functionality and content</li>
                <li>Responding to user inquiries</li>
                <li>Monitoring analytics to understand user interactions</li>
                <li>Enhancing security and preventing potential issues</li>
            </ul>

            <h2 class="text-36">3. Cookies and Tracking Technologies</h2>
            <p>
                The Service may use cookies, local storage, or similar
                technologies to remember preferences, analyze website traffic,
                and improve usability. You can disable cookies in your browser
                settings.
            </p>

            <h2 class="text-36">4. Sharing Your Information</h2>
            <p>
                We do not sell or intentionally disclose personal information to
                third parties. However, we may use third-party tools such as
                analytics providers or hosting platforms, which process data
                according to their own privacy policies.
            </p>

            <h2 class="text-36">5. Data Security</h2>
            <p>
                We take reasonable measures to protect your information from
                unauthorized access, alteration, or disclosure. However, no
                method of transmission over the Internet is 100% secure.
            </p>

            <h2 class="text-36">6. Third-Party Links</h2>
            <p>
                The Service may contain links to external websites. We are not
                responsible for the content or privacy practices of those sites.
            </p>

            <h2 class="text-36">7. Children’s Privacy</h2>
            <p>
                The Service is not intended for children under 13. We do not
                knowingly collect personal information from children.
            </p>

            <h2 class="text-36">8. Changes to This Policy</h2>
            <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated “Last updated” date.
            </p>

            <h2 class="text-36">9. Contact Us</h2>
            <p>
                If you have any questions regarding this Privacy Policy, you can
                contact us at:
            </p>

            <p>
                Email:
                <BaseLink to="mailto:qtim@agency.com">
                    qtim@agency.com
                </BaseLink>
            </p>
        </div>
    </main>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '~/components/base/base-breadcrumbs/base-breadcrumbs.type'
import BaseBreadcrumbs from '~/components/base/base-breadcrumbs/BaseBreadcrumbs.vue'
import BaseLink from '~/components/base/base-link/BaseLink.vue'

const BREADCRUMBS: BreadcrumbItem[] = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'Privacy Policy',
        url: '/privacy/',
    },
]

useSeoMeta({
    title: 'Privacy Policy | QTIM',
    description:
        'Read QTIM’s Privacy Policy to learn how we collect, use, and protect your data while providing our services.',
    ogTitle: 'Privacy Policy | QTIM',
    ogDescription:
        'Read QTIM’s Privacy Policy to learn how we collect, use, and protect your data while providing our services.',
})
</script>

<style scoped>
.privacy-heading {
    margin-top: 7.5rem;
}

.privacy-text {
    margin-top: 4rem;

    & > p,
    & > ul,
    & > ol {
        margin-top: 0.5rem;
    }

    & > h2,
    & > h3 {
        margin-top: 1.75rem;
        font-weight: 500;
    }
}
</style>
