import { defineStore } from 'pinia'

export type PropsNameModal = 'mobileMenu' | 'searchMenu'

type ModalsType = {
    [key in PropsNameModal]: boolean
}
export const useModalStore = defineStore('modalStore', {
    state: () => ({
        modals: {
            mobileMenu: false,
            searchMenu: false,
        } as ModalsType,
        hasOpenModal: false,
    }),
    actions: {
        open(name: PropsNameModal): void {
            this.modals[name] = true
            this.hasOpenModal = Object.values(this.modals).some(
                (value: boolean) => value
            )
        },
        close(name: PropsNameModal): void {
            this.modals[name] = false
            this.hasOpenModal = Object.values(this.modals).some(
                (value: boolean) => value
            )
        },
    },
})
