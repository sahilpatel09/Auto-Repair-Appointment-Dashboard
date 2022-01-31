import { createApp } from "vue";
import App from "./App.vue";
import firebase from "firebase/compat/app";
import router from "./router";
import store from "./store";

//firebase.initiazeApp()
const firebaseConfig = {
  apiKey: "AIzaSyBi9xNdraRfVeeNRvve6OmwKgMiAke3zNM",
  authDomain: "auto-repair-dashboard.firebaseapp.com",
  projectId: "auto-repair-dashboard",
  storageBucket: "auto-repair-dashboard.appspot.com",
  messagingSenderId: "796477443660",
  appId: "1:796477443660:web:139087f1c076e3a0ea2ee9",
  measurementId: "G-K57K9K20SQ",
};

firebase.initializeApp(firebaseConfig);
const app = createApp(App);
app.use(store);
app.use(router);
app.config.globalProperties.$myGlobalVariable = "CALIFORNIA MUSCLE CAR REPAIR";
app.mount("#app");








