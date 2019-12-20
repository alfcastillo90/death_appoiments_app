import Vue from 'vue'
import App from './App.vue'
import { router } from './helpers'
import { store } from './store'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { ValidationProvider } from 'vee-validate';

Vue.config.productionTip = false

Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
