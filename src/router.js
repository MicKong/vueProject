import VueRouter from 'vue-router'

//路由子组件导入
import home from './components/tabbar/HomeContainer.vue'
import member from './components/tabbar/MemberContainer.vue'
import shopcar from './components/tabbar/ShopcarContainer.vue'
import search from './components/tabbar/SearchContainer.vue'

//六宫格
import newsList from './components/news/newsList.vue'
import photoList from './components/photos/photoList.vue'
import photoInfo from './components/photos/photoInfo.vue'


//商品导入
import goodsList from './components/goods/goodsList.vue'
import goodsInfo from './components/goods/goodsInfo.vue'
import goodsDesc from './components/goods/goodsDesc.vue'
import goodsComment from './components/goods/goodsComment.vue'

//创建路由对象
var router = new VueRouter({
    routes: [ //配置路由规则
        {path: '/', redirect: '/home'},
        {path: '/home', component: home},
        {path: '/member', component: member},
        {path: '/shopcar', component: shopcar},
        {path: '/search', component: search},
        {path: '/home/newsList', component: newsList},
        {path: '/home/photoList', component: photoList},
        {path: '/home/photoInfo', component: photoInfo},
        {path: '/home/goodsList', component: goodsList},
        {path: '/home/goodsInfo/:id', component: goodsInfo},
        {path: '/home/goodsDesc', component: goodsDesc},
        {path: '/home/goodsComment', component: goodsComment},


    ],
    linkActiveClass: 'mui-active'
})

//导出路由对象
export default router