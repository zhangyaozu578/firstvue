
import VueRouter from 'vue-router'
import ComtIndex from 'vue';


//这是js对外导出一个路由实例
export default new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:{template:'<p>首页</p>'}},
        {path:'/news',component:{template:'<p>新闻页</p>'}}
    ]
})