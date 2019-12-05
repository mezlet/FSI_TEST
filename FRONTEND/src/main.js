import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from "vuelidate";
import store from "./store";
import AOS from "aos";
import Toasted from "vue-toasted";
import axios from "@/utils/axios";
import "aos/dist/aos.css";

Vue.use(Toasted, {
  position: "top-center",
  singleton: true,
  action: {
    text: "Close",
    onClick: (e, toastObject) => {
      toastObject.goAway(0);
    }
  }
});

Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
    this.setHeader(store.state.token);
  },
  computed: {
    token() {
      return store.state.token;
    }
  },
  methods: {
    setHeader(newToken) {
      axios.defaults.headers.common["Authorization"] = newToken;
    }
  },
  watch: {
    token(newVal) {
      axios.defaults.headers.common["Authorization"] = newVal;
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
