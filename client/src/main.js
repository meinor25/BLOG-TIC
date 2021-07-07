import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AOS from 'aos';
import "aos/dist/aos.css"


Vue.config.productionTip = false
Vue.use(axios, VueAxios)


//Set a default axios url
axios.defaults.baseURL = ''
new Vue({
  created(){
    AOS.init()
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
