import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Find from '@/components/Find'
import Yule from '@/components/Yule'
import Game from '@/components/Game'
import Sousuo from '@/components/Sousuo'
import Daohangtiao from '@/components/Daohangtiao'
import Denglu from '@/components/Denglu'
import Zhuce from '@/components/Zhuce'
import Zonghe from '@/components/Zonghe'
import Xiangqing from '@/components/Xiangqing'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/yule',
      name: 'Yule',
      component: Yule
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/sousuo',
      name: 'Sousuo',
      component: Sousuo
    },
    {
      path: '/daohangtiao',
      name: 'Daohangtiao',
      component: Daohangtiao
    },
    {
      path: '/denglu',
      name: 'Denglu',
      component: Denglu
    },
    {
      path: '/zhuce',
      name: 'Zhuce',
      component: Zhuce
    },
    {
      path: '/zonghe',
      name: 'Zonghe',
      component: Zonghe
    },
    {
      path: '/xiangqing',
      name: 'Xiangqing',
      component: Xiangqing
    }
  ]
})
