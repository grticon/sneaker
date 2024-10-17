import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Category from '@/views/Category.vue'
import Cart from '@/views/Cart.vue'
import Product from '@/views/Product.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import AccountLayout from '@/views/Account/Index.vue'
import SavedItems from '@/views/Account/Account.vue'
import Profile from '@/views/Account/Profile.vue'
import Favourite from '@/views/Account/SavedItems.vue'
import MyHistory from '@/views/Account/History.vue'
import Tracking from '@/views/Account/Track.vue'
import Checkout from '@/views/Checkout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/account',
      component: AccountLayout,
      children: [
        {
          path: '',
          name: 'savedItems',
          component: SavedItems
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile
        },
        {
          path: '/favourite',
          name: 'favourite',
          component: Favourite
        },
        {
          path: '/history',
          name: 'history',
          component: MyHistory
        },
        {
          path: '/tracking',
          name: 'tracking',
          component: Tracking
        },
      ]
    },
  ]
})

export default router
