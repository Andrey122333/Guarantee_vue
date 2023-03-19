import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/:categories',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/InvitationView.vue')
  },
  {
    path: '/:categories/application/:id',
    name: 'application',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ApplicationView.vue')
  },
  {
    path: '/:categories/create',
    name: 'create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/CreateView.vue')
  },
  {
    path: '/:categories/creatingvote/:type',
    name: 'creatingvoteamount',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. //amount, status, executor, no
    component: () => import('../views/CreatingVote.vue')
  },
  {
    path: '/:categories/voting/:type',
    name: 'voting',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/VotingView.vue')
  }
]
//Voting
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
