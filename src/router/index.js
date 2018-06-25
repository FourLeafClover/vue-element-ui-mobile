import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import config from './router'
import { getCookie } from '@/utils/$cookie';
//import store from '@/store'
let routers = new Router({
    routes: config
})

routers.beforeEach((to, from, next) => {
    let isJumpLogin = false;
    if (to.meta.needAuth) {
        if (getCookie('vue.auth')) {

        } else {
            isJumpLogin = true;
        }
    }
    if (isJumpLogin) {
        next(`/login?redirect=${to.fullPath}`)
    } else {
        next();
    }
})

export default routers;