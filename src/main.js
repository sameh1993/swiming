import { createApp } from "vue";
import { createPinia } from "pinia";

// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from "@fortawesome/free-solid-svg-icons"

import App from "./App.vue";
import router from "./router";
import JwPagination from "jw-vue-pagination";
import Notifications from "@kyvg/vue3-notification";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@/assets/css/font-awesome.min.css";
import "./main.scss";

// library.add(fas)

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Notifications);
app.component("JwPagination", JwPagination);
// app.component("fa", FontAwesomeIcon)
app.mount("#app");
