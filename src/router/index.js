import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import play from '../pages/play'
import TVshow from '../pages/TVshow'
import login from '../pages/login'
import loginQQ from '../pages/loginQQ'
// import vip from '../pages/vip'
import movie from '../pages/movie'
// import zongyi from '../pages/zongyi'
// import entertainment from '../pages/entertainment'
import sport from '../pages/sport'

Vue.use(Router);

export default new Router({
    linkExactActiveClass: 'active',
    mode:'history',
    routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
        path: '/play',
        name: 'play',
        component: play,
    },
    {
        path: '/play/login',
        name: 'login',
        component: login
    },
    {
        path: '/play/login/loginQQ',
        name: 'loginQQ',
        component: loginQQ
    },
    {
      path: '/TVshow',
      name: 'TVshow',
      component: TVshow
    },
    {
        path: '/movie',
        name: 'movie',
        component: movie
    },
    {
        path: '/sport',
        name: 'sport',
        component: sport
    }
  ]
})
