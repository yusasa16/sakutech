<template lang="pug">
  v-row
    v-col(
      v-for="(post, index) in postsDisplay"
      :key="index"
      cols="12"
      md="4"
    )
      v-card(
        class="mx-auto"
        shaped
      )
        v-img(
          src="/images/common/img_thumb.png"
          height="200px"
        )

        v-card-title {{ post.title.rendered }}

        //- v-card-subtitle 1,000 miles of wonder

        v-card-actions
          v-btn(
            color="blue lighten-2"
            :to="{name: 'blog-slug', params: {slug: post.slug}}"
            nuxt
          ) 読む
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
    },
    async getThumb(post) {
      if(post.featured_media === 0) {
        return '/images/common/img_thumb.png';
      } else {
        const response = await this.$axios.$get(`${this.$config.apiUrl}/wp-json/wp/v2/media/${this.post.featured_media}`)
        return response.source_url;
      }
    },
  },
}
</script>
<style lang="scss">
</style>
