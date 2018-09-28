import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from './components/HelloWorld'
import ReviewList from './components/ReviewList'
import Search from './components/Search'
import TopList from './components/TopList'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
Vue.use(Router)

export default new Router({
  routes: [
    /*
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ /*'./views/About.vue')
    }
    */
    
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/reviewlist',
      name: 'ReviewList',
      component: ReviewList
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/top',
      name: 'TopList',
      component: TopList
    }
  ]
})
