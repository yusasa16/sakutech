<template lang="pug">
  div
   .container
      BlogCardArea.mt-24
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  layout: 'default',
  mounted() {
    this.getPosts()
  },
  methods: {
    ...mapActions(['getPosts'])
  },
}
</script>

<style lang="scss">

</style>
