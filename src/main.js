import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'
import App from './App.vue'
import VueAutoFitText from './components/VueAutoFitText/index'

Vue.use(VueObserveVisibility)
Vue.use(VueAutoFitText)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
