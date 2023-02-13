export const state = () => {
  return {
    isShowSettings: false,
    isShowMore: false,
    isShowMenu: false,
    isShowChatMenu: false,
    isDebate: false,
    isClosedProjectModal: false,

    currentTab: 'chat'
  }
}

export const mutations = {
  handleShowSettings(state, status) {
    state.isShowSettings = status
  },
  handleShowMore(state, status) {
    state.isShowMore = status
  },
  handleShowMenu(state, status) {
    state.isShowMenu = status
  },
  handleShowChatMenu(state, status) {
    state.isShowChatMenu = status
  },
  handleDebateStatus(state, status) {
    state.isDebate = status
  },
  handleClosedProjectModalStatus(state, status) {
    state.isClosedProjectModal = status
  },
  handleCurrentTab(state, tab) {
    state.currentTab = tab
  }
}

export const actions = {}

export const getters = {
  getShowSettingsStatus: state => state.isShowSettings,
  getShowMoreStatus: state => state.isShowMore,
  getShowMenuStatus: state => state.isShowMenu,
  getShowChatMenuStatus: state => state.isShowChatMenu,
  getDebateStatus: state => state.isDebate,
  getClosedProjectModalStatus: state => state.isClosedProjectModal,
  getCurrentTab: state => state.currentTab
}

// export const state = () => ({
//   cache: {},
//   loader: false,
//   isShowParams: true,
//   isShowSettings: false
// })
//
// export const mutations = {
//   SET: (state, params) => {
//     state[params.key] = params.value
//   },
//   SET_CACHE: (state, params) => {
//     state.cache[params.key] = params.value
//   }
// }
//
// export const actions = {
//   async fetch({ commit, state }, params) {
//     let fetchData = null
//
//     if (state.cache[params.endpoint]) {
//       fetchData = state.cache[params.endpoint]
//     }
//
//     if (!fetchData) {
//       try {
//         fetchData = await this.$axios.$get(params.endpoint)
//       } catch (e) {
//         console.error(e)
//         commit('SET', { key: params.stateKey, value: fetchData })
//         commit('SET_CACHE', { key: params.endpoint, value: fetchData })
//         return fetchData
//       }
//     }
//     commit('SET', { key: params.stateKey, value: fetchData })
//     commit('SET_CACHE', { key: params.endpoint, value: fetchData })
//     return fetchData
//   },
//
//   handleIsShowParams({ commit }, value) {
//     commit('SET', { key: 'isShowParams', value })
//   }
// }
