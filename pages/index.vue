<template lang="pug">
  div
    p 作成中
    article(v-for="post in posts" :key="post.id")
      div.posts
        h1(v-html='post.title.rendered')
        div(v-html='post.content.rendered')
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.$axios
      .get('http://www.wp-dummy.yusaku-tech.com/wp-json/wp/v2/posts')
      .then((res) => {
        this.posts = res.data
      })
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
