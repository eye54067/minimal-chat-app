import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from "../utils";

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/ChatList',
    name: 'ChatList',
    component: () => import('@/views/ChatList.vue'),
  },
  {
    path: '/ChatList/ChatRoom',
    name: 'ChatRoom',
    component: () => import('@/views/ChatRoom.vue'),
  },
  {
    path: "*",
    redirect: "/ChatList" // page not found
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

router.beforeEach(async (to, from, next) => {

  if (!auth.isAuthenticated() && to.name !== "LoginPage") {
    next("login");
  }
  if (auth.isAuthenticated() && to.name === "LoginPage") {
    next("ChatList");
  }
  next();
});

export default router
