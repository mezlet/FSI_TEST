import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from "vuelidate";
import store from "./store";
import AOS from "aos";
import Toasted from "vue-toasted";
import "aos/dist/aos.css";

Vue.use(Toasted, {
  position: "top-center",
  singleton: true,
  action : {
    text : 'Close',
    onClick : (e, toastObject) => {
        toastObject.goAway(0);
    }
  }
});
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
