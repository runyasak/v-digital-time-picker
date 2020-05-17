import Vue from 'vue'
import { ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

extend('required', required)

Vue.component('ValidationProvider', ValidationProvider)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
