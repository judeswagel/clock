import Vue from 'vue'
import App from './App.vue'
import '../src/assets/styles.scss';
import Buefy from 'juefy'

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  render: h => h(App),
}).$mount('#app')
