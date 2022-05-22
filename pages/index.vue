<template lang="pug">
  div
    BlogArchive(
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
      // slug: this.$route.params.slug,
      slug: '1',
    }
  },
  created() {
    this.asyncPosts()
  },
  methods: {
    ...mapActions(['asyncPosts'])
  },
}
</script>

<style lang="scss">

</style>
