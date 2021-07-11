import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AOS from 'aos';
import Vue2Editor from "vue2-editor";
import "aos/dist/aos.css"


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vue2Editor)
Vue.use(require('vue-moment'));


//Set a default axios url
axios.defaults.baseURL = 'https://blog-tic.herokuapp.com'
new Vue({
 
  created(){
    AOS.init()
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
