import * as unhead from 'unhead'
import * as vueComposables from 'vue'
import * as router from 'vue-router'

global.computed = vueComposables.computed
global.ref = vueComposables.ref
global.watch = vueComposables.watch
global.watchEffect = vueComposables.watchEffect
global.onMounted = vueComposables.onMounted
global.useRouter = router.useRouter
global.useHead = unhead.useHead
global.resolveComponent = vueComposables.resolveComponent
