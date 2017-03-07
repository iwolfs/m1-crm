import Vue from 'vue';
import App from './App';
import API from './config/api';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
window.API = API;

Vue.use(ElementUI);
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
