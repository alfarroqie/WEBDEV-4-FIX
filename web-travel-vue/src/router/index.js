import Vue from "vue";
import Router from "vue-router";
import AddCategories from '../components/AddCategories.vue';
import PostArticle from '../components/PostArticle.vue'
import ListArticle from '../components/ListArticle.vue'
import ListCategories from '../components/ListCategories.vue'
import Cms from '../components/Cms.vue'
import VueRouter from "vue-router";
Vue.use(Router);

const routes = [
    {
        path: '',
        name: 'cms',
        component: Cms,
    },
    {
        path: '/addCategories',
        name: 'addCategories',
        component: AddCategories,
    },
    {
        path: '/postArticle',
        name: 'PostArticle',
        component: PostArticle
    },
    {
        path: '/listArticle',
        name: 'ListArticle',
        component: ListArticle
    },
    {
        path: '/listCategories',
        name: 'ListCategories',
        component: ListCategories
    },

]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
/*export default new Router({
    mode: "history",
    routes: [
        {
        path: "/",
        alias: "/news",
        name: "news",
        component: () => import("./components/NewsList")
        },
        {
        path: "/news/:id",
        name: "news-details",
        component: () => import("./components/News")
        },
        // {
        // path: "/add",
        // name: "add",
        // component: () => import("./components/AddTutorial")
        // }
    ]
});*/