<template lang="pug">
  div.mt-24
    .container
      article.blogDetail
        h2.blogDetail__title.mb-24 {{ title }}
        section.blogDetail__content(v-html="content")
</template>
<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
      data: '',
      title: '',
      content: ''
    }
  },
  created() {
    this.asyncData();
  },
  methods: {
    async asyncData() {
      const data = await this.$axios.$get(`${this.$config.apiUrl}/wp-json/wp/v2/posts/?slug=${this.slug}`);
      this.data = data[0]
      this.title = this.data.title.rendered
      this.content = this.data.content.rendered
    },
  },
}
</script>
<style lang="scss">
.blogDetail {
  &__title {
    font-size: 60px;
    font-family: 'Barlow', sans-serif;
  }

  &__content {
    & * {
      max-width: 100%;
    }

    h1 {
      @apply text-5xl mt-16 mb-8
    }

    h2 {
      @apply text-4xl mt-14 mb-7
    }

    h3 {
      @apply text-3xl mt-12 mb-6
    }

    h4 {
      @apply text-2xl mt-10 mb-5
    }

    h5 {
      @apply text-xl mt-8 mb-4
    }

    h6 {
      @apply text-lg mt-6 mb-3
    }

    p {
      @apply my-2
    }
  }
}
</style>
