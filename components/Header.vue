<template lang="pug">
  //- v-app-bar(
  //-     app
  //-     shrink-on-scroll
  //- )
  //-   v-app-bar-nav-ico

  //-   v-toolbar-title sakutech

  //-   v-spacer

  header.header
    .header__inner
      .header__logo
        h1: NuxtLink(to="/") sakutech
      nav.header__nav
        ul
          li: NuxtLink(to="/") nav1
          li: NuxtLink(to="/") nav2
          li: NuxtLink(to="/") nav3
          li: NuxtLink(to="/") nav4
</template>
<script>
export default {
  // name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 48px;
  background-color: $primary-color;
  user-select: none;
  position: sticky;
  top: 0;
  z-index: 100;

  &__inner {
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    padding-left: 24px;

    h1 {
      a {
        color: $lightest-color;
        font-size: calc(30 / 16 * 1rem);
        font-family: 'Barlow', sans-serif;
        font-weight: 100;
        line-height: 48px;
        text-decoration: none;
      }
    }
  }

  &__nav {
    ul {
      list-style: none;
      display: flex;
      height: 100%;

      li {
        height: 100%;

        a {
          color: $lightest-color;
          // font-size: 1.6rem;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          width: 90px;
          height: 100%;
          line-height: 48px;

            &:hover {
              background-color: rgba($color: $lightest-color, $alpha: .4);
              transition: all .6s;
          }
        }
      }
    }
  }
}
</style>
