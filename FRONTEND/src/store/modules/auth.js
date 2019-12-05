import axios from "@/utils/axios";

export default {
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
    registerUser: async ({ commit, state }, userInfo) => {
      commit("setLoading", true);
      try {
        const { data } = await axios.post("auth/signup", userInfo);
        console.log(data);
        commit("setUser", data.data);
        commit("setToken", data.data.token);
        commit("setIsLoggedIn", true);
        commit("setLoading", false);
      } catch (error) {
        commit("setIsLoggedIn", false);
        commit("setLoading", false);
        console.log("here", state.isLoggedIn);
        console.log("error", error);
        commit(
          "setError",
          error.response.data ? error.response.data.message : error.message
        );
      }
    },
    checkBvn: async ({ commit, state }, bvnInfo) => {
      commit("setBvnLoading", true);
      const opts = {
        headers: {
          Authorization: state.token
        }
      };
      console.log(bvnInfo, opts);
      try {
        const { data } = await axios.post("auth/bvn", bvnInfo, opts);
        console.log(data);
        commit("setBvnMatch", true);
        commit("setBvnLoading", true);
      } catch (error) {
        console.log(error.response);
        commit(
          "setError",
          error.response.data ? error.response.data.message : error.message
        );
      }
    }
  },
  modules: {}
};
