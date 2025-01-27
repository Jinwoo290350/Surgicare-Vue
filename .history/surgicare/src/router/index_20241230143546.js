import { createRouter, createWebHistory } from "vue-router";

// Importing views and components
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Member from "../views/Member.vue";
import WoundAssessment from "../components/WoundAssessment.vue";

// Define the route configurations
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home - Your App Name",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "About - Your App Name",
    },
  },
  {
    path: "/member",
    name: "Member",
    component: Member,
    meta: {
      title: "Member - Your App Name",
    },
  },
  {
    path: "/wound-assessment",
    name: "WoundAssessment",
    component: WoundAssessment,
    meta: {
      title: "Wound Assessment - Your App Name",
    },
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top on route change, unless saved position exists
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Global navigation guard for dynamic document titles
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Default App Title";
  next();
});

export default router;
