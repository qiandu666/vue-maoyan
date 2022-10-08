import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
// 自动设置根元素字体大小
import "amfe-flexible";
// 引入重置样式
import "./assets/css/reset.less";
import "./assets/font/iconfont.css";
import "./assets/css/progress.less";
const app = createApp(App);
app.use(router);
app.mount("#app");
