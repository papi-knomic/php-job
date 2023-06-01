import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobView from '../views/JobView.vue'
import JobFormView from '../views/JobFormView.vue'
import NotFoundView from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/job/:id",
    name: "",
    component: JobView,
    props: true,
    meta: {
      title: route => {
        // Assuming you have access to the job title via the route params
        const jobTitle = route.params.title;
        return jobTitle ? `${jobTitle} | Job View` : 'Job View';
      }
    }
  },
  {
    path: "/post-a-job",
    name: "post-a-job",
    component: JobFormView
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
