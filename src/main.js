import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // eslint-disable-next-line id-length
  render: (h) => h(App),
}).$mount("#app");
