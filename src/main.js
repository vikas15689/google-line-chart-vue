import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;
/**
 * App is bootstraped with 'App' component and store
 */
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
