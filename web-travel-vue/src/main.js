import Vue from 'vue'
// import App from './components/Cms.vue'
import app from '../src/App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(app),
//  render: h => h(app)
}).$mount('#app')
