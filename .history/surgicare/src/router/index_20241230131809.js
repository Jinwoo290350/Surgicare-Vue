import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Member from '../views/Member.vue';
import WoundAssessment from "../components/WoundAssessment.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  {
    path: "/member",
    name: "Member",
    component: Member,
  },
  { path: "/wound-assessment", name: "WoundAssessment", component: WoundAssessment },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;