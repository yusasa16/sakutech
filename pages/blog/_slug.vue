<template lang="pug">
  div.mt-24
    .container
      BlogSingle(
        :slug="slug")
</template>
<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
    }
  },
}
</script>
<style lang="scss">
</style>
