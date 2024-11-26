import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import logo from '@/assets/logo.png';
import notificationIcon from '@/assets/notification-icon.png';


createApp(App).use(router).mount("#app");
