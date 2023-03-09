import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from "../views/MainHome.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/MainHome.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/Product.vue'),
      children:[
        {
          path:'productlist',
          name: 'productlist',
          component:()=>import('../views/ProductList.vue')
        },
        {
          path:'productinf/:productId',
          name: 'productinf',
          component:()=>import('../views/ProductInformation.vue')
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component:()=>import('../views/Cart.vue')
    },
  ]
})

export default router
