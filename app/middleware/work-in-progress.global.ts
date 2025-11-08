import type { RouteRecordNameGeneric } from '#vue-router'

const notAllowedPages: RouteRecordNameGeneric[] = ['works', 'about']

export default defineNuxtRouteMiddleware((to) => {
    if (notAllowedPages.includes(to.name)) {
        return navigateTo('/work-in-progress')
    }
})
