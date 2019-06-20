import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import store from './store'
import '@/permission'
Vue.use(Vant);
// import getPageTitle from '@/utils/get-page-title'
Vue.config.productionTip = false
// router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面title */
//   if (to.meta.title) {
//     document.title = getPageTitle(to.meta.title)
//   }else{
//     document.title = getPageTitle(to.query.name)
//   }
//   next()
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
