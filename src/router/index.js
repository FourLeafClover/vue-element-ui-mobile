import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import config from './router'
import { getCookie } from '@/utils/$cookie';
let routers = new Router({
    routes: config
})
routers.beforeEach((to, from, next) => {
    if (to.meta.needAuth) {
        if (getCookie('vue.auth')) {
            next()
        } else {
            next(`/login?redirect=${to.fullPath}`)
        }
    } else {
        next();
    }
})

export default routers;