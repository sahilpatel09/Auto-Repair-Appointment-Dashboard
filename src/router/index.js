import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "SignUp",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUp.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/DashView.vue"),
      },
      {
        path: "profile",
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/Profile.vue"),
      },

      // ...other sub routes
    ],

    meta: {
      authRequired: true,
    },
  },
  {
    path: "/test",
    name: "Test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Test.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/select-vehicle",
    name: "SelectVehicle",
    component: () => import("../views/SelectVehicle.vue"),
    meta: {
      authRequired: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

import firebase from "firebase/compat/app";
import "firebase/auth";

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next();
      } else {
        router.push("/");
      }
    });
  } else {
    next();
  }
});

export default router;
