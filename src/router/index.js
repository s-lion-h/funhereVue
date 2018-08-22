import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mapdemo from '@/components/mapdemo'
import mapdemo2 from '@/components/mapdemo2'
import activity from '@/components/activity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/map',
      name: 'mapdemo',
      component: mapdemo
    },
    {
      path: '/map2',
      name: 'mapdemo2',
      component: mapdemo2
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    }
  ]
})
