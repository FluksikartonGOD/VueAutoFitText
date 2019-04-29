export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    resizer: {
      type: Object,
      default: () => ({
        init: (fn) => {
          window.addEventListener('resize', fn)
        },
        destroy: (fn) => {
          window.removeEventListener('resize', fn)
        },
      }),
    },
    observeVisibility: {
      type: Object,
      default: () => ({
        once: true,
        intersection: {
          rootMargin: '100px 0px 100px 0px'
        },
      }),
    },
  },
  computed: {
    _observeVisibility() {
      if (this.observeVisibility) {
        return {
          callback: this.visibilityChanged,
          ...this.observeVisibility,
        }
      }
      return {}
    },
    visibility() {
      if (this.observeVisibility && this.isVisible) return 'vue-autosize-visible'
    },
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible
      if (this.isVisible) {
        this.calculate()
      }
    },
  },
  created() {
    this.resizer.init(this.resize)
  },
  beforeDestroy() {
    this.resizer.destroy(this.resize)
  },
}