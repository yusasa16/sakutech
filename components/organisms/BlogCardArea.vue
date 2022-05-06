<template lang="pug">
  ul.blogCardArea
    li(v-for="(post, index) in posts" :key="index")
      BlogCard(
        :title="post.title.rendered"
        :date="post.date"
      )
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['posts'])
  },
}
</script>
<style lang="scss">
.blogCardArea {
  max-width: 1040px;
  padding: 0 30px;
  margin: 60px auto 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &::after {
    content: '';
  }

  & > li,
  &::after {
    width: calc((100% - 40px * 2) / 3);
    margin-bottom: 60px;

    @media (max-width: 599px) {
      width: 100%;
      max-width: 300px;
      margin: 0 auto 30px;
    }
  }
}
</style>
