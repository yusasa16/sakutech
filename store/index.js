export const state = () => ({
  posts: []
})

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
};

export const actions = {
  async getPosts ({commit}) {
    const response = await this.$axios.$get('http://www.wp-dummy.yusaku-tech.com/wp-json/wp/v2/posts')
    commit('setPosts', response);
  }
}
