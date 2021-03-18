import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
/* import Fastqc from '../views/Fastqc.vue'
import BBduk from '../views/BBduk.vue'
import FastqScreen from '../views/Fastq-screen.vue'
import Unicycler from '../views/Unicycler.vue'
import Masurca from '../views/Masurca.vue'
import Platanus from '../views/Platanus.vue'
import Quast from '../views/Quast.vue'
import Busco from '../views/Busco.vue'
import Dfast from '../views/Dfast.vue'
import Prokka from '../views/Prokka'
import Augustus from '../views/Augustus.vue' */


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/fastqc',
    name: 'Fastqc',
    component: () => import('../views/Fastqc.vue')
  },
  {
    path: '/bbduk',
    name: 'BBduk',
    component: () => import('../views/Bbduk.vue')
  },
  {
    path: '/fastq-screen',
    name: 'FastqScreen',
    component: () => import('../views/Fastq-screen.vue')
  },
  {
    path: '/unicycler',
    name: 'Unicycler',
    component: () => import('../views/Unicycler.vue')
  },
  {
    path: '/masurca',
    name: 'Masurca',
    component: () => import('../views/Masurca.vue')
  },
  {
    path: '/platanus',
    name: 'Platanus',
    component: () => import('../views/Platanus.vue')
  },
  {
    path: '/quast',
    name: 'Quast',
    component: () => import('../views/Quast.vue')
  },
  {
    path: '/busco',
    name: 'Busco',
    component: () => import('../views/Busco.vue')
  },
  {
    path: '/dfast',
    name: 'Dfast',
    component: () => import('../views/Dfast.vue')
  },
  {
    path: '/prokka',
    name: 'Prokka',
    component: () => import('../views/Prokka.vue')
  },
  {
    path: '/augustus',
    name: 'Augustus',
    component: () => import('../views/Augustus.vue')
  },
  {
    path: '/eggnog',
    name: 'eggNOG',
    component: () => import('../views/Eggnog.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
