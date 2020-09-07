import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
/* eslint-disable */
Vue.use(VueRouter);

const routes = [
 
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/brazil",
    name: "brazil",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Brazil" */ "@/views/Brazil.vue"),
  },
  {
    path: "/awai",
    name: "awai",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Awai" */ "@/views/Awai.vue"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Jamaica" */ "@/views/Jamaica.vue"),
  },
  {
    path: "/panama",
    name: "panama",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Panama" */ "@/views/Panama.vue"),
  },
  {
    path: "/details:id",
    name: "DestinationDetails",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "DestinationDetails" */ "@/views/DestinationDetails.vue"),
  },
  
];

const router = new VueRouter({
  routes,
  linkActiveClass:"vue-school-active-class"
});

export default router;
