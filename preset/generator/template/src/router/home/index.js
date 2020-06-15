export default [
  // 根路径显示的页面
  {
    path:'',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/main.vue')
  },
  {
    name:'home',
    path:'/home',
    meta:{
      menuName:'首页',
      placement:'left'
    },
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/main.vue')
  }
]
