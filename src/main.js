import Vue from 'vue'
import index from './index.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


//Mint-UI组件导入与注册
import {Header, Swipe, SwipeItem, Button, Switch} from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component(Switch.name, Switch)


//路由对象注册
Vue.use(VueRouter)

//导入路由对象
import router from './router.js'

//ajax请求,导入vue-resource
import VueResoure from 'vue-resource'

Vue.use(VueResoure)
Vue.http.options.root = 'http://localhost:8080' //设置请求的根路径


// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//注册vuex
Vue.use(Vuex)

//每次进入网站肯定会调用main.js入口文件
//在刚调用时先从本地存储中把购物车数据读出来放到store中
var car = JSON.parse(localStorage.getItem('car') || '[]')

//创建store实例
var store = new Vuex.Store({
    state: {
        //用于存储购物车里的商品信息,一个商品一个对象
        car: car
    },
    mutations: {
        addToCar(state, goodsInfo) {
            var flag = false //假设购物车中没有找到对应商品
            state.car.some(function (item) {
                if (item.id === goodsInfo.id) {
                    item.count += parseInt(goodsInfo.count)
                    flag = true
                    return true
                }
            })

            //如果最终,循环完毕,得到的flag还是false,则把商品数据直接push到购物车中
            if (!flag) {
                state.car.push(goodsInfo)
            }

            //当更新car后,把car数组存储到本地的localStorage中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsInfo(state, goodsInfo) {
            state.car.forEach(function (item) {
                if (item.id == goodsInfo.id) {
                    item.count = parseInt(goodsInfo.count)
                    return true
                }
            })

            localStorage.setItem('car', JSON.stringify(state.car))
        },
        removeGood(state, id) {
            state.car.some(function (item, i) {
                if (item.id == id) {
                    state.car.splice(i, 1)
                    return true
                }
            })

            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsSelected(state, info) {
            state.car.some(function (item) {
                if (item.id == info.id) {
                    item.selected = info.selected
                    return true
                }
            })

            //把最新的所有商品状态保存到本地
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters: {
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                if(item.selected)
                    c += item.count
            })
            return c
        },
        getGoodsCount(state) { //结算页面,id对应的数量
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.count
            })
            return o
        },
        getGoodsSelected(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state){
            var o = {
                count:0, //勾选的商品数
                amount:0  //商品总价
            }
            state.car.forEach(item => {
                if(item.selected){
                    o.count += item.count
                    o.amount += item.count * item.price
                }
            })

            return o
        }

    }
})

var vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    render: function (createElement) {
        return createElement(index)
    },
    router: router,
    store: store
})

