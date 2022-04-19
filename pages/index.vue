<template lang="pug">
  div
    p 作成中
    div {{ posts }}
</template>

<script>
// import { mapMutations } from 'vuex'

export default {
  name: 'IndexPage',
  layout: 'default',
  data() {
    return {
      // posts: this.$store.state.posts,
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
  // mounted() {
  //   axios
  //     .get('http://www.wp-dummy.yusaku-tech.com/wp-json/wp/v2/posts')
  //     .then((res) => {
  //       this.posts = res.data
  //     })
  // },
}
</script>
