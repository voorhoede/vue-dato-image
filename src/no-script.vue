<script>
export default {
  render(createElement) {
    if (typeof process !== 'undefined' && process.server) {
      return createElement('noscript', this.$slots.default)
    }
    return createElement('noscript')
  },
}
</script>
