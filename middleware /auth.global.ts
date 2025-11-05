import { useAuthStore } from '~/stores/auth.store'

const nameForAuthUser = ['profile', 'orders', 'favourites', 'notifications']

const nameForNotAuthUser = [
    'login',
    'registration',
    'password-reset',
    'password-forgot',
]
export default defineNuxtRouteMiddleware((to) => {
    const { isAuth } = storeToRefs(useAuthStore())

    useAuthStore().check()

    if (isAuth.value && nameForNotAuthUser.includes(to.name)) {
        return navigateTo('/profile')
    }
    if (!isAuth.value && nameForAuthUser.includes(to.name)) {
        return navigateTo('/login')
    }
})
