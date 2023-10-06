import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import firebase from "firebase/app";
import "firebase/firestore";
import router from "./router/index.js";

var firebaseConfig = {
  apiKey: "AIzaSyAUrUA3yO2LPcEvLMAwQ8FEpej7M4ecObw",
  authDomain: "vueinstagram-6dc6b.firebaseapp.com",
  projectId: "vueinstagram-6dc6b",
  storageBucket: "vueinstagram-6dc6b.appspot.com",
  messagingSenderId: "368243488504",
  appId: "1:368243488504:web:a34608fbf43d6eb7b96d0d",
};

firebase.initializeApp(firebaseConfig);

/* add icons to the library */
library.add(fas, far, fab);

loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
