import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import Axios from 'axios'

Vue.config.productionTip = false
Axios.defaults.baseURL = 'http://localhost:8080/';

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
