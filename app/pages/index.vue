<template>
    <main class="container">
        <BannerSection />

        <div class="sections-container">
            <MainSection
                v-for="section in sections"
                :key="section.title"
                :title="section.title"
                :description="section.description"
                :link="section.link"
                :link-text="section.linkText"
                :image="section.image"
                :image-webp="section.imageWebp" />
        </div>
    </main>
</template>

<script setup lang="ts">
import MainSection from '~/components/pages/main/main-section/MainSection.vue'
import BannerSection from '~/components/pages/main/banner-section/BannerSection.vue'

const sections = [
    {
        title: 'Who we are',
        description:
            'Qtim is a forward-thinking digital studio specializing in creative design, web development, and innovative solutions. We combine technology and creativity to bring ideas to life.',
        linkText: 'Learn more',
        link: '/about',
        image: '/assets/images/main-section/about-us.png',
        imageWebp: '/assets/images/main-section/about-us.webp',
    },
    {
        title: 'Our Work',
        description:
            'From branding to web experiences, we craft projects that stand out. Explore our portfolio to see how we transform concepts into impactful digital solutions.',
        linkText: 'See our works',
        link: '/works',
        image: '/assets/images/main-section/works.png',
        imageWebp: '/assets/images/main-section/works.webp',
    },
    {
        title: 'Insights & Ideas',
        description:
            'Dive into our blog for the latest trends, tips, and case studies in design, development, and digital strategy. Stay inspired and informed.',
        linkText: 'Read articles',
        link: '/articles',
        image: '/assets/images/main-section/articles.png',
        imageWebp: '/assets/images/main-section/articles.webp',
    },
]

useSeoMeta({
    title: 'QTIM | Innovative Digital Solutions for Your Business',
    description:
        'Discover QTIM’s cutting-edge digital services and creative solutions that help businesses grow and succeed in the digital era.',
    ogTitle: 'QTIM | Innovative Digital Solutions for Your Business',
    ogDescription:
        'Discover QTIM’s cutting-edge digital services and creative solutions that help businesses grow and succeed in the digital era.',
})
</script>

<style scoped>
.sections-container {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin-top: 5rem;
}
</style>
