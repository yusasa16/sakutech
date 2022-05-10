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
  created() {
    this.actionPosts()
  },
  methods: {
    ...mapActions(['actionPosts'])
  },
}
</script>

<style lang="scss">

</style>
