import Vue from "vue";
import App from './src/App.vue';
import "./src/assets/css/resetStyle.css";
import "./src/assets/css/fonts.css";
import "./src/assets/css/global.css";

new Vue({
    el: '#app',
    render: h => h(App)
});