import { defineStore } from 'pinia'

import { useApiFetch } from '~/composables/useApiFetch.composables'

type loginData = {
    token_type: string
    expires_in: number
    access_token: string
    refresh_token: string
}

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        isAuth: false,
    }),
    actions: {
        login(data: loginData) {
            const accessToken = useCookie('access_token')
            const refreshToken = useCookie('refresh_token')
            const expiresIn = useCookie('expires_in')
            const tokenType = useCookie('token_type')

            const nowMinutes = Math.floor(new Date().getTime() / 1000 / 60)
            accessToken.value = data.access_token
            expiresIn.value = (nowMinutes + Number(data.expires_in)).toString()
            refreshToken.value = data.refresh_token
            tokenType.value = data.token_type
            this.isAuth = true
        },
        async logout() {
            const accessToken = useCookie('access_token')
            const refreshToken = useCookie('refresh_token')
            const expiresIn = useCookie('expires_in')
            const tokenType = useCookie('token_type')

            accessToken.value = undefined
            refreshToken.value = undefined
            expiresIn.value = undefined
            tokenType.value = undefined
            this.isAuth = false
            const { status } = await useApiFetch('/logout', {
                method: 'delete',
            })
            if (status.value === 'success') {
                navigateTo('/')
            }
        },
        check() {
            const token = useCookie('access_token') // get token from cookies

            this.isAuth = !!token.value
            return this.isAuth
        },
    },
})
