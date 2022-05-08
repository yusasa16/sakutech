<template lang="pug">
  div
    div
      | {{ data }}
    h2 {{ title }}
    div(v-html="content")
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

</style>
