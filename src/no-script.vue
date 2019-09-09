<script>
export default {
  render (createElement) {
    if (typeof process !== 'undefined' && process.browser) {
      return createElement('noscript')
    } else {
      return createElement('noscript', this.$slots.default)
    }
  },
}
</script>
