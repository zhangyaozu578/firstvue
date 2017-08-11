//导第3方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';



//启动插件
Vue.use(vueRouter);
Vue.use(vueResource);

//导入自己的模块
import router from './router.js';

//导入自己的组件
import ComptApp from '../component/Adpp.vue';


//
new Vue({
    el:'#app',
    render:function (c) { 
        return c(ComptApp);
     },
    //  router
     
});