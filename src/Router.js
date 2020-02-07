import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './components/landing-page/LandingPage.vue'
import Assessment from './components/assessment/Assessment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage,
    },
    {
      path: '/assessment',
      name: 'assessment',
      component: Assessment,
    }
  ]
})
