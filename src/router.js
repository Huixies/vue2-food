import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Menu from './components/Menu.vue';
import Admin from './components/Admin.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import About from './components/about/About.vue';
import History from './components/about/History.vue';
import Contact from './components/about/Contact.vue';
import Delivery from './components/about/Delivery.vue';
import OrderingGuide from './components/about/OrderingGuide.vue';

Vue.use(VueRouter)
export const router = new VueRouter({
  mode: 'history',
  // scrollBehavior(to, from, savedPosition) {
  //   return { selector: 'h1' }
  // },
  routes: [
    { path: '/', component: Home },
    { path: '/menu', component: Menu },
    {
      path: '/admin', component: Admin
      //路由独享守卫
      // beforeEnter: (to, from, next) => {
      //   if (to.path == '/login' || to.path == '/register') {
      //     next();
      //   } else {
      //     alert("还没有登录，请先登录");
      //     next('/login');
      //   }
      // }
    },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    {
      path: '/about', component: About, redirect: '/about/history', 
      children: [
        { path: '/about/history', component: History },
        { path: '/about/contact', component: Contact },
        { path: '/about/delivery', component: Delivery },
        { path: '/about/orderinguide', component: OrderingGuide },
    ]},
    { path: '*', redirect: '/' } //匹配到未定义的路径 默认跳转主页面
  ]
})

