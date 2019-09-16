import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import News from './views/News.vue'
import Media from './views/Media.vue'
import Gear from './views/Gear.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/home', name: 'home', component: Home },
    { path: '/about', name: 'about', component:About },
    { path: '/news', name: 'news', component:News },
    { path: '/media', name: 'media', component:Media },
    { path: '/gear', name: 'gear', component:Gear },
    { path: '/contact', name: 'contact', component:Contact },
    { path:'*', redirect: '/home' }
  ]
})

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
//component: () => import(/* webpackChunkName: "about" */ './views/About.vue')