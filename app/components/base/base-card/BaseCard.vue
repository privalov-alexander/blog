<template>
    <NuxtLink
        :to="to || undefined"
        class="card">
        <article>
            <picture v-if="image">
                <source
                    v-if="imageWebp"
                    type="image/webp"
                    :srcset="imageWebp" />
                <img
                    loading="lazy"
                    width="280"
                    height="280"
                    :alt="title"
                    :src="image"
                    class="card-image" />
            </picture>
            <p class="card-title">
                {{ title }}
            </p>
        </article>
    </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
    to: string | null
    title: string
    image: string
    imageWebp?: string
}

defineProps<Props>()
</script>

<style scoped>
.card picture {
    overflow: hidden;
    aspect-ratio: 1;
    width: 100%;
    height: auto;
    display: block;
}

.card-image {
    aspect-ratio: 1;
    width: 100%;
    height: auto;
    object-fit: cover;

    transition: transform 150ms linear;
}

.card:hover .card-image {
    transform: scale(1.1);
}

.card-title {
    margin-top: 1.5rem;
    overflow: hidden;
    line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
</style>
