<template lang="pug">
  ul.pagination
    li.pagination__item(v-for="num in postsArchiveNum" key="num")
      NuxtLink(:to="{name: 'archives-num', params: {num: num}}") {{ num }}
</template>
<script>
export default {
  props: {
    posts: Array,
    slug: String,
  },
  data() {
    return {
      postsArchiveNum: Math.ceil(this.posts.length / 12),
    }
  },
}
</script>
<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;

  &__item {
    margin: 0 18px;
  }
}
</style>
