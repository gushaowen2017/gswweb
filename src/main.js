// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Resourse from 'vue-resource'
import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '@/styles/common.css'

import gswweb from './components/index.js'

//引用全局变量文件
import globalVariable from '@/common/global_variable.js'

Vue.use(Resourse)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.GLOBAL = globalVariable
Vue.use(gswweb)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
