let configs = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('@/views/Home.vue'),
        meta: {
            needAuth: false
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('@/views/About.vue'),
        meta: {
            needAuth: true
        }
    }, {
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/views/Login.vue'),
        meta: {
            needAuth: false
        }
    }
]

export default configs