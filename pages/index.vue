<template lang="pug">
  div
    BlogCardArea
    //- p 作成中
    //- article(v-for="post in posts" :key="post.id")
      div.posts
        h1(v-html='post.title.rendered')
        div(v-html='post.content.rendered')
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'IndexPage',
  layout: 'default',
  computed: {
    ...mapState(['posts'])
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    ...mapActions(['getPosts']),
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
