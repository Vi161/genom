import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import('../components/Main.vue');
const Page1 = () => import('../components/Pages/Page1.vue')
const Page2 = () => import('../components/Pages/Page2.vue')
const Page3 = () => import('../components/Pages/Page3.vue')
const Page4 = () => import('../components/Pages/Page4.vue')
const Page5 = () => import('../components/Pages/Page5.vue')
const Page6 = () => import('../components/Pages/Page6.vue')

Vue.use(VueRouter);

const routes = [
    {
        name: 'Main',
        path: '/main',
        component: Main,
        meta: {
            type: 'page0',
            id: 0
        }
    },
    {
        name: 'problem',
        path: '/problem',
        component: Page1,
        meta: {
            type: 'page1',
            id: 1
        }
    },
    {
        name: 'solution',
        path: '/solution',
        component: Page2,
        meta: {
            type: 'page2',
            id: 2
        }
    },
    {
        name: 'applying',
        path: '/applying',
        component: Page3,
        meta: {
            type: 'page3',
            id: 3
        }
    },
    {
        name: 'analyst',
        path: '/analyst',
        component: Page4,
        meta: {
            type: 'page4',
            id: 4
        }
    },
    {
        name: 'developer',
        path: '/developer',
        component: Page5,
        meta: {
            type: 'page5',
            id: 5
        }
    },
    {
        name: 'publication',
        path: '/publication',
        component: Page6,
        meta: {
            type: 'page6',
            id: 6
        }
    },
];

export const router = new VueRouter({
  routes,
  mode: 'history',
});

