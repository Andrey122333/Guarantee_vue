import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// vacation
//profile
//organizer
const routes = [
  {
    path: '/:role/vacation',
    name: 'vacation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/VacationView.vue')
  },
  {
    path: '/:role/initiatives',
    name: 'initiatives',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/InitiativesView.vue')
  },
  {
    path: '/:role/:categories',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:role/:categories/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/:role/:categories/application/:id',
    name: 'application',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ApplicationView.vue')
  },
  {
    path: '/:role/:categories/create',
    name: 'create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/CreateView.vue')
  },
  {
    path: '/:role/:categories/creatingvote/:type',
    name: 'creatingvoteamount',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. //amount, status, executor, no
    component: () => import('../views/CreatingVote.vue')
  },
  {
    path: '/:role/:categories/voting/:type',
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
