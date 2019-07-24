import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/examples/index.vue');
const Badge = () => import('@/examples/badge.vue');

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },

        {
            path: '/badge',
            name: 'badge',
            component: Badge
        },
    ]
})


