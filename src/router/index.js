import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      // import函数叫做异步引入
      // 可以用作组件的按需引入/home
      component: () => import("../pages/Home/Index.vue"),
      children: [
        {
          path: "/home",
          redirect: "/home/movies",
        },
        {
          path: "movies",
          component: () => import("../pages/Home/movies/Index.vue"),
          children: [
            {
              path: "/home/movies",
              redirect: "/home/movies/hotshow",
            },
            {
              path: "hotshow",
              component: () => import("../pages/Home/movies/hotshow/index.vue"),
            },
            {
              path: "toreflect",
              component: () =>
                import("../pages/Home/movies/toreflect/index.vue"),
            },
            {
              path: "classmovies",
              component: () =>
                import("../pages/Home/movies/classmovies/index.vue"),
            },
            {
              path: "cinema",
              component: () => import("../pages/Home/movies/cinema/index.vue"),
            },
          ],
        },
        {
          path: "videos",
          component: () => import("../pages/Home/videos/Index.vue"),
          meta: {
            title: "视频",
          },
        },
        {
          path: "mini",
          component: () => import("../pages/Home/mini/Index.vue"),
          meta: {
            title: "小视频",
          },
        },
        {
          path: "show",
          component: () => import("../pages/Home/show/Index.vue"),
          meta: {
            title: "演出",
          },
          beforeEnter: (to, from) => {
            // reject the navigation
            // console.log("11");
          },
        },
        {
          path: "mine",
          component: () => import("../pages/home/mine/Index.vue"),
          meta: {
            title: "我的",
          },
        },
      ],
    },
    {
      path: "/city",
      component: () => import("../pages/city/index.vue"),
    },
    {
      path: "/detail",
      component: () => import("../pages/detail/index.vue"),
      // children: [
      //   {
      //     path: "shipin",
      //     component: () => import("../pages/detail/shipin/index.vue"),
      //   },
      // ],
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../pages/notFound/Index.vue"),
    },
    // {
    //   path: "/shipin/:vd",
    //   name: "shipin",
    //   component: () => import("../pages/shipin/Index.vue"),
    // },
  ],
});
router.beforeEach((to, from, next) => {
  // ...
  // 返回 false 以取消导航
  // return false;
  // if(localStorage.getItem('token')){
  //   next();
  // }
  document.title = to.meta.title || "猫眼娱乐-娱乐看猫眼";
  if (to.path == "/home/mine") {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next("/home");
    }
  } else {
    next();
  }
});
export default router;
