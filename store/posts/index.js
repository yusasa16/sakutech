import axios from 'axios'

const state = {
  posts: '',
};

const getters = {
  allPosts: (state) => state.posts
};

const actions = {
  actionPosts (context) {
    axios
      .get('http://www.wp-dummy.yusaku-tech.com/wp-json/wp/v2/posts')
      .then((res) => {
        context.commit('setPosts', res.data);
      })
  }
};

const mutations = {
  setPosts: (state, posts) => {
    state.posts = posts
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
