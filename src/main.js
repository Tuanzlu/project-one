import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//  引入基础库
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

//  引入工具
import http from "./utils/http";
import globalStorage from "./utils/globalStorage";

Vue.use(Antd);

Vue.config.productionTip = false;

Vue.prototype.$http = http;
Vue.prototype.$globalStorage = globalStorage;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
