let configs = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('@/views/Home.vue'),
        meta: {
            needAuth: false,
            index: 0
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('@/views/About.vue'),
        meta: {
            needAuth: true,
            index: 0
        }
    }, {
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/views/Login.vue'),
        meta: {
            needAuth: false,
            index: 999
        }
    }
]

export default configs