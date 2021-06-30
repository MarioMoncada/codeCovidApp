import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/worldCovidInfo",
    name: "WorldCovidInfo",
    component: () =>
      import(
        /* webpackChunkName: "WorldCovidInfo" */ "../views/WorldCovidInfo.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
