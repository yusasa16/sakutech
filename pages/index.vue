<template lang="pug">
  div
    BlogCardArea
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
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
