import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      components: {
        default: () => import("../views/Home.vue"),
        sidebar: () => import("../components/SideNav.vue"),
      },
    },
    {
      path: "/dashboard",
      components: {
        default: () => import("../views/Dashboard.vue"),
        sidebar: () => import("../components/SideNav.vue"),
      },
    },
    {
      path: "/personality-types",
      components: {
        default: () => import("../views/PersonalityTypes.vue"),
        sidebar: () => import("../components/SideNav.vue"),
      },
    },
    {
      path: "/courses",
      components: {
        default: () => import("../views/Courses.vue"),
        sidebar: () => import("../components/SideNav.vue"),
      },
    },
    {
      path: "/professions",
      components: {
        default: () => import("../views/Professions.vue"),
        sidebar: () => import("../components/SideNav.vue"),
      },
    },
    {
      path: "/personality-tests",
      components: {
        default: () => import("../views/PersonalityTests.vue"),
        sidebar: () => import("../components/SideNav.vue"),
      },
    },
    {
      path: "/courses-tests",
      components: {
        default: () => import("../views/CoursesTests.vue"),
        sidebar: () => import("../components/SideNav.vue"),
      },
    },
    {
      path: "/test-courses-constructor",
      components: {
        default: () => import("../views/ConstructTestCourses.vue"),
        sidebar: () => import("../components/SideNav.vue"),
      },
    },
    {
      path: "/person-type-constructor",
      components: {
        default: () => import("../views/ConstructNewPersonType.vue"),
        sidebar: () => import("../components/SideNav.vue"),
      },
    },
    {
      path: "/personality-test-constructor",
      components: {
        default: () => import("../views/ConstructPersonalityTest.vue"),
        sidebar: () => import("../components/SideNav.vue"),
      },
    },
    {
      path: "/professions-constructor",
      components: {
        default: () => import("../views/ConstructProfessions.vue"),
        sidebar: () => import("../components/SideNav.vue"),
      },
    },
    {
      path: "/construct-new-course",
      components: {
        default: () => import("../views/ConstructNewCourses.vue"),
        sidebar: () => import("../components/SideNav.vue"),
      },
    },
  ],
});

export default router;
