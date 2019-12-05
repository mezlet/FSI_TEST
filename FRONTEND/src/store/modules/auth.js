import axios from "@/utils/axios";

export default {
  state: {
    isLoggedIn: false,
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
        commit("setIsLoggedIn", true);
        commit("setLoading", false);
      } catch (error) {
        commit(
          "setError",
          error.response.data ? error.response.data.message : error.message
        );
      }
    },
    checkBvn: async ({ commit }, bvnInfo) => {
      commit("setBvnLoading", true);
      const opts = {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY4LCJpYXQiOjE1NzU1NDAxOTYsImV4cCI6MTU3NTU0Mzc5Nn0.niJI19oJJIJYM3hUXuICCYv0beEvycm6lG3zaaGLpv8"
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
