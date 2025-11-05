<template>
    <TransitionRoot
        appear
        as="template"
        :show="isOpen">
        <Dialog
            as="div"
            class="relative z-10"
            @close="closeModal">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/50 backdrop-blur" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div
                    class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <button
                                class="text-474A55 absolute right-4 top-4 p-1"
                                @click="closeModal">
                                <AtomIcon
                                    name="close"
                                    class="size-6" />
                            </button>
                            <slot />
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import type { PropType } from 'vue'

import AtomIcon from '~/components/atom/atom-icon/AtomIcon.vue'

defineProps({
    isOpen: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
})

const emits = defineEmits(['close'])

function closeModal() {
    emits('close')
}
</script>
