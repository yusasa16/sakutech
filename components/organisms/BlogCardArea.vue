<template lang="pug">
  ul.blogCardArea
    li(v-for="(post, index) in postsDisplay" :key="index")
      BlogCard.mb-12(
        :post="post"
      )
</template>
<script>
export default {
  props: {
    posts: Array,
    slug: String,
  },
  data() {
    return {
      postsDisplay: [],
    }
  },
  mounted() {
    this.postsDisplay = this.getDisplayPosts(this.posts, this.slug);
  },
  methods: {
    getDisplayPosts(posts, slug) {
      const slugPer = slug * 12;
      return posts.slice(slugPer - 12, slugPer);
    }
  },
}
</script>
<style lang="scss">
.blogCardArea {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &::after {
    content: '';
  }

  & > li,
  &::after {
    width: calc((100% - 40px * 2) / 3);

    @media (max-width: 599px) {
      width: 100%;
      max-width: 300px;
      margin: 0 auto;
    }
  }
}
</style>
