import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import mintui from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(mintui);
Vue.config.productionTip = false
let $vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
window.$vm = $vm;