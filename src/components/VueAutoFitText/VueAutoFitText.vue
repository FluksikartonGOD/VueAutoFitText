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
  name: 'VueAutoFitText',
  mixins: [AutoFitMixin],
  props: {
    minFontSize: {
      type: Number,
      default: 6,
    },
    maxFontSize: {
      type: Number,
      default: null,
    },
    optimized: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    const innerValue = this.value
    return {
      innerValue,
      oldValue: null,
      isVisible: false,
    };
  },
  methods: {
    resize() {
      this.calculate(true)
    },
    calculateFontSize() {
      this.$nextTick(() => {
        const container = this.$refs.container;
        const element = this.$refs.text;

        let fontSize = this.minFontSize;
        element.style.fontSize = `${fontSize}px`;

        while (
          element.offsetHeight < container.offsetHeight &&
          element.offsetWidth < container.offsetWidth
        ) {
          fontSize += 1;
          element.style.fontSize = `${fontSize}px`;
        }

        if (this.maxFontSize && this.maxFontSize < fontSize)
          fontSize = this.maxFontSize
        element.style.fontSize = `${fontSize - 1}px`;
      })
    },
    calculate(force = false) {
      if (this.observeVisibility && !this.isVisible) {
        return
      }
      if (!force &&
          this.optimized &&
          this.oldValue &&
          this.innerValue &&
          this.innerValue.length === this.oldValue.length
        ) {
            return
        }
        this.calculateFontSize()
    },
  },
  watch: {
    value: {
      handler(val, oldValue) {
        this.innerValue = val
        this.oldValue = oldValue
        this.calculate()
      },
      immediate: true,
    },
  },
  created() {
    this.resizer.init(this.resize)
  },
  beforeDestroy() {
    this.resizer.destroy(this.resize)
  },
}
</script>
<style scoped>
  .vue-autosize-text {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .vue-autosize-text-value {
    display: inline-block;
    white-space: nowrap;
    line-height: 1;
  }
</style>
