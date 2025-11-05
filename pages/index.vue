<template>
    <main>
        <h1 class="text-3xl font-bold underline">Nuxt 3 Template</h1>
        <BaseButton @click="isOpenModal = true"> Open modal </BaseButton>
        <BaseModal
            :is-open="isOpenModal"
            @close="isOpenModal = false">
            This modal
        </BaseModal>
    </main>
</template>

<script setup lang="ts">
import BaseButton from '~/components/base/base-button/BaseButton.vue'
import BaseModal from '~/components/base/base-modal/BaseModal.vue'

const isOpenModal = ref(false)
</script>
