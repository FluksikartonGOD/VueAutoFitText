<template>
  <div
    ref="container"
    class="vue-autosize-text"
    :class="visibility"
    v-observe-visibility="_observeVisibility"
  >
    <div
      ref="text"
      class="vue-autosize-text-value"
    >
      {{ innerValue }}
    </div>
  </div>
</template>

<script>
import AutoFitMixin from './AutoFitMixin'
export default {
  name: 'VueAutoTruncateText',
  mixins: [AutoFitMixin],
  props: {
    truncateTreshhold: {
      type: Number,
      default: 3,
    },
    truncateString: {
      type: String,
      default: '...',
    },
  },
  data() {
    const innerValue = this.value
    const originalValue = this.value
    return {
      originalValue,
      innerValue,
      isVisible: false,
    };
  },
  methods: {
    resize() {
      this.calculate()
    },
    truncate() {
      this.innerValue = this.originalValue
      this.$nextTick(() => {
        const container = this.$refs.container;
        const element = this.$refs.text;
        if (
          element.offsetHeight > container.offsetHeight ||
          element.offsetWidth > container.offsetWidth
        ) {
          this.optimizeTruncate(element, container)
        }
      });
    },
    optimizeTruncate(element, container) {
      this.$nextTick(() => { 
        const length = this.innerValue.length
        if (
          element.offsetHeight > container.offsetHeight ||
          element.offsetWidth > container.offsetWidth
        ) {
          this.innerValue = this.innerValue.substr(0, length / 2)
          this.optimizeTruncate(element, container)
        } else {
          this.innerValue = this.originalValue.substr(0, length * 2)
          this.autoTruncate(element, container)
        }
      })
    },
    autoTruncate(element, container) {
      this.$nextTick(() => {
        const length = this.innerValue.length
        if (
          element.offsetHeight > container.offsetHeight ||
          element.offsetWidth > container.offsetWidth
        ) {
          this.innerValue = this.innerValue.substr(0, length - this.truncateTreshhold);
          this.autoTruncate(element, container)
        } else {
          this.innerValue = this.innerValue.substr(0, length - this.truncateString.length) + this.truncateString;
        }
      })
    },
    calculate() {
      if (this.observeVisibility && !this.isVisible) {
        return
      }
      this.truncate()
    },
  },
  watch: {
    value: {
      handler(val, oldValue) {
        this.originalValue = val
        this.innerValue = val
        this.oldValue = oldValue
        this.calculate()
      },
      immediate: true,
    },
  },
}
</script>
<style scoped>
  .vue-autosize-text {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .vue-autosize-text-value {
    width: 100%;
    max-width: 100%;
  }
</style>
