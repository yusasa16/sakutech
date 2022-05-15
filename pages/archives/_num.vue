<template lang="pug">
  div
    BlogArchives(
      :slug="slug"
    )
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  layout: 'default',
  data() {
    return {
      slug: this.$route.params.num,
    }
  },
  mounted() {
    this.asyncPosts()
  },
  methods: {
    ...mapActions(['asyncPosts'])
  },
}
</script>

<style lang="scss">

</style>
