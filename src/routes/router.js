import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import('../components/Main.vue');
const Page1 = () => import('../components/Pages/Page1.vue')
const Page2 = () => import('../components/Pages/Page2.vue')

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
];

export const router = new VueRouter({
  routes,
  mode: 'history',
});

