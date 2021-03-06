import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './pages/Home.vue'
import AboutPage from './pages/About.vue'
import NotFoundPage from './pages/NotFound.vue'

const routerHitory = createWebHashHistory()

const routers = createRouter({
  history: routerHitory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/:CatchAll(.*)',
      name: '404',
      component: NotFoundPage
    }
  ]
})

export default routers
