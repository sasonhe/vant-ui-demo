import { login ,loginExit} from '@/api/login/user'
// import { loginExit } from '@/api/login/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
const state = {
  token: getToken(),
  name: '',
  avatar: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        if (response.errcode === 0) {
          commit('SET_TOKEN', data.token)
          commit('SET_NAME', data.name)
          setToken(data.token)
          resolve(response)
        } else if (response.errcode === -1) {
          resolve(response)
        }

      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      loginExit(state.token).then((res) => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
