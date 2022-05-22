<template lang="pug">
  v-container
    BlogCards.mt-24(
      :posts="this.getPosts"
      :slug="slug"
    )
    pagination.mb-24(
      :posts="this.getPosts"
      :slug="slug"
    )
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    slug: String
  },
  computed: {
    ...mapGetters(['getPosts'])
  },
}
</script>
<style lang="scss">

</style>
