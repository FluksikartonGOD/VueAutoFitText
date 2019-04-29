import Vue from 'vue'
import VueAutoFitText from './VueAutoFitText.vue'
import VueAutoTruncateText from './VueAutoTruncateText.vue'

export default {
  install (Vue) {
    Vue.component('vue-auto-fit-text', VueAutoFitText)
    Vue.component('vue-auto-truncate-text', VueAutoTruncateText)
  }
}

export { VueAutoFitText, VueAutoTruncateText }