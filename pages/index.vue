<template lang="pug">
  div
    p 作成中
    article(v-for="post in posts" :key="post.id")
      div.posts
        h1(v-html='post.title.rendered')
        div(v-html='post.content.rendered')
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'IndexPage',
  layout: 'default',
  data() {
    return {}
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    ...mapActions({
      getPosts: 'getPosts',
    }),
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts,
    }),
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
