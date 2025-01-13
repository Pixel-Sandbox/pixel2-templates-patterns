export default {
  namespaced: true,
  state: {
    unreadMessage: 0
  },
  mutations: {
    SET_UNREAD_MESSAGE(state, data) {
      state.unreadMessage = data;
      console.log('Called')
    }
  }
}
