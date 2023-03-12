const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/Agrobase.vue") },
      { path: "/agrofoods", component: () => import("pages/Agrofoods.vue") },
      { path: "/agroinvest", component: () => import("pages/Agroinvest.vue") },
      { path: "/agrofarms", component: () => import("pages/Agrofarms.vue") },
      { path: "/livestock", component: () => import("pages/Livestock.vue") },
      {
        path: "/CropMonitoring",
        component: () => import("pages/CropMonitoring.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
