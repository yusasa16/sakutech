<template lang="pug">
  ul.blogCardArea
    li(v-for="(post, index) in this.getPosts" :key="index")
      BlogCard.mb-12(
        :post="post"
      )
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getPosts'])
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
