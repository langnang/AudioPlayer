import Vue from "vue";
import "./plugins/axios";
import "./plugins/fontawesome";
import "./plugins/element";
import "./plugins/gh-api";
import "./plugins/vue-audio-player";
import App from "./App.vue";
import router from "./routes";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(require("vue-wechat-title"));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
