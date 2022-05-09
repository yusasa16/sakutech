<template lang="pug">
  ul.blogCardArea
    li(v-for="(post, index) in posts" :key="index")
      BlogCard.mb-12(
        :post="post"
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
