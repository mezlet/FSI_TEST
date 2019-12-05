import Vue from "vue";
import Vuex from "vuex";
import axios from "@/utils/axios";
import VuexPersistence from "vuex-persist";

// import auth from "./modules/auth";

const vuexLocal = new VuexPersistence({
  reducer: state => ({
    token: state.token,
    isLoggedIn: state.isLoggedIn
  }),
  storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    token: null,
    user: {},
    loading: false,
    error: null,
    bvnMatch: false,
    bvnLoading: false
  },
  mutations: {
    setUser: (state, data) => {
      state.user = data;
    },
    setToken: (state, data) => {
      state.token = data;
    },
    setIsLoggedIn: (state, bool) => {
      state.isLoggedIn = bool;
    },
    setLoading: (state, bool) => {
      state.loading = bool;
    },
    setError: (state, error) => {
      state.error = error;
    },
    setBvnMatch: (state, bool) => {
      state.bvnMatch = bool;
    },
    setBvnLoading: (state, bool) => {
      state.bvnLoading = bool;
    }
  },
  actions: {
    registerUser: async ({ commit }, userInfo) => {
      commit("setLoading", true);
      try {
        const { data } = await axios.post("auth/signup", userInfo);
        commit("setUser", data.data);
        commit("setToken", data.data.token);
        commit("setIsLoggedIn", true);
        commit("setLoading", false);
      } catch (error) {
        console.log(error);
        commit(
          "setError",
          error.response.data ? error.response.data.message : error.message
        );
      }
    },
    checkBvn: async ({ commit, state }, bvnInfo) => {
      console.log(state);
      commit("setBvnLoading", true);
      try {
        const { data } = await axios.post("auth/bvn", bvnInfo);
        console.log(data);
        commit("setBvnMatch", true);
        commit("setBvnLoading", false);
      } catch (error) {
        commit("setBvnLoading", false);
        console.log(error.response);
        commit(
          "setError",
          error.response.data ? error.response.data.message : error.message
        );
      }
    }
  },
  modules: {},
  plugins: [vuexLocal.plugin]
});
