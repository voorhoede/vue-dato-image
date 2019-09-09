<script>
export default {
  render (createElement) {
    if (typeof process !== 'undefined' && process.server) {
      return createElement('noscript', this.$slots.default)
    } else {
      return createElement('noscript')
    }
  },
}
</script>
