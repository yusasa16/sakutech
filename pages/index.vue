<template lang="pug">
  div
    BlogCardArea
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
.posts {
  > h1 {
    font-size: 2.4rem;
    background: beige;
  }

  > div {
    padding: 1em;
  }
}
</style>
