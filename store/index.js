export const state = () => ({
  posts: [],
})

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
};

export const actions = {
  async asyncPosts ({commit}) {
    const response = await this.$axios.$get(`${this.$config.apiUrl}/wp-json/wp/v2/posts?per_page=100`)
    commit('setPosts', response);
  }
}

export const getters = {
  getPosts: (state) => {
    return state.posts;
  }
}
