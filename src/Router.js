import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './components/landing-page/LandingPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage
    },
    // {
    //   path: '/about/',
    //   name: 'about',
    //   component: About
    // }
  ]
})
