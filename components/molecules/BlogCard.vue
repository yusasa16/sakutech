<template lang="pug">
  .blogCard
    NuxtLink(to="__URL__")
      .blogCard__thumb
        img(:src="blogThumb")
      .blogCard__text
        .blogCard__meta
          time.blogCard__time(:data-time="blogDateYear + '-' + blogDateMonth + '-' + blogDateDate") {{ blogDateYear }}/{{ blogDateMonth }}/{{ blogDateDate }}
          span.blogCard__category {{ blogCategory }}
        p.blogCard__title {{ blogTitle }}
        span.blogCard__more 続きを読む

</template>
<script>
export default {
  props: {
    post: Object,
  },
  data() {
    return {
      blogThumb: this.post.featured_media,
      blogTitle: this.post.title.rendered,
      blogCategory: this.post.categories[0],
      blogDateYear: '',
      blogDateMonth: '',
      blogDateDate: '',
    }
  },
  mounted() {
    this.editThumb();
    this.editTitle();
    this.editDate();
    this.editCategory();
  },
  methods: {
    async editThumb() {
      if(this.blogThumb === 0) {
        this.blogThumb = '/images/common/img_thumb.png';
      } else {
        const response = await this.$axios.$get(`${this.$config.apiUrl}/wp-json/wp/v2/media/${this.blogThumb}`)
        this.blogThumb = response.source_url;
      }
    },
    editTitle() {
      if(this.blogTitle.length > 28) {
        this.blogTitle = this.blogTitle.substr(0, 28) + '...';
      }
    },
    editDate() {
      const initDate = new Date(this.post.date);
      this.blogDateYear = initDate.getFullYear();
      this.blogDateMonth = initDate.getMonth() + 1;
      this.blogDateDate = initDate.getDate();
    },
    async editCategory() {
      const res = await this.$axios.$get(`${this.$config.apiUrl}/wp-json/wp/v2/categories/${this.blogCategory}`)
      this.blogCategory = res.name;
    },
  },
}
</script>
<style lang="scss">
.blogCard {
  border-radius: 30px;
  box-shadow: 0 0 6px rgba(#000, .16);

  &__thumb {
    height: 212px;
    border-radius: 30px 30px 0 0;
    overflow: hidden;

    @media (max-width: 1024px) and (min-width: 600px) {
      height: calc(212 / 1024 * 100vw);
    }

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: all .6s;
    }
  }

  &:hover {
    img {
      transform: scale(1.1, 1.1);
      transition: all .6s;
    }

    .card__text {
      opacity: 0.6;
      transition: opacity .6s;
    }
  }

  &__text {
    padding: 18px;
    transition: opacity .6s;
  }

  &__meta {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
  }

  &__time {
    color: #696969;
  }

  &__category {
    width: 132px;
    line-height: 18px;
    background-color: #009CCB;
    color: #fff;
    font-weight: 300;
    text-align: center;

    @media (max-width: 1024px) and (min-width: 600px) {
      margin-left: 6px;
    }
  }

  &__title {
    font-size: 1.8rem;
    line-height: 2.5rem;
    margin-top: 12px;

    @media (min-width: 600px) {
      min-height: 50px;
    }
  }

  &__more {
    margin-top: 12px;
    color: #009CCB;
    font-size: 1.4rem;
    text-align: center;
    display: block;
  }
}
</style>
