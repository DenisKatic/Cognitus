import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode:'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
        },
        {
            path: '/industry',
            name: 'industry',
            component: () => import(/* webpackChuckName: "Industry" */ './views/Industry.vue')
        },
        {
            path: '/data_collection',
            name: 'data_collection',
            component: () => import(/* webpackChuckName: "DataCollection" */ './views/Data_collection.vue')
        },
        {
            path: '/AI',
            name: 'ai',
            component: () => import(/* webpackChuckName: "AI" */ './views/AI.vue')
        },
        {
            path: '/maintenance',
            name: 'maintenance',
            component: () => import(/* webpackChuckName: "Maintenance" */ './views/Maintenance.vue')
        },
        {
            path: '/benefits',
            name: 'benefits',
            component: () => import(/* webpackChuckName: "Benefits" */ './views/Benefits.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChuckName: "About" */ './views/About.vue')
        }
    ]
})