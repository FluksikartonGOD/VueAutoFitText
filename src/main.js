import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'
import App from './App.vue'

Vue.use(VueObserveVisibility)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
