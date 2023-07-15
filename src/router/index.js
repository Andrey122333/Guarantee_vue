import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// vacation
//profile
//organizer user
const routes = [
  {
    path: '/:role/vacation',
    name: 'vacation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/VacationView.vue'),
  },
  {
    path: '/:role/initiatives',
    name: 'initiatives',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/InitiativesView.vue'),
    // meta: { title: "Инициативы" }
  },
  {
    path: '/:role/:categories',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: "Инициативы" }
  },
  {
    path: '/:role/:categories/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ProfileView.vue'),
    meta: { title: "Профиль" }
  },
  {
    path: '/:role/:categories/application/:id',
    name: 'application',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ApplicationView.vue'),
    meta: { title: "Заявка" }
  },
  {
    path: '/:role/:categories/edit/:id',
    name: 'edit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ApplicationEdit.vue'),
    meta: { title: "Редактирование заявки" }
  },
  {
    path: '/:role/:categories/chat/:id',
    name: 'chat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ChatView.vue'),
  },
  {
    path: '/:role/:categories/create',
    name: 'create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/CreateView.vue'),
    meta: { title: "Создание заявки" }
  },
  {
    path: '/:role/:categories/createrequest',
    name: 'createrequest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/CreateRequestView.vue'),
    meta: { title: "Создание запроса" }
  },
  {
    path: '/:role/:categories/creatingvote/:id/:type',
    name: 'creatingvote',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. //amount, status, executor, no
    component: () => import('../views/CreatingVote.vue'),
    meta: { title: "Создание голосования" }
  },
  {
    path: '/:role/:categories/voting/:type',
    name: 'voting',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/VotingView.vue'),
    meta: { title: "Голосование" }
  }
]
//Voting
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
