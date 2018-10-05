<template>
    <div>
    <!--轮播图-->
    <mt-swipe :auto="2000" speed="1200">
        <mt-swipe-item>
            <img src="../../images/img01.jpg" id="photo" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../../images/img02.jpg" id="photo" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../../images/img03.jpg" id="photo" alt="">
        </mt-swipe-item>
    </mt-swipe>

    <!--六宫格-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        //新闻链接改造成路由
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/newsList">
            <img src="../../images/menu1(1).png" alt="">
            <div class="mui-media-body">新闻</div></router-link></li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/photoList">
            <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">点评</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/goodsList">
            <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu4.png" alt="">
            <div class="mui-media-body">location</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu5.png" alt="">
            <div class="mui-media-body">Search</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu6.png" alt="">
            <div class="mui-media-body">Phone</div></a></li>
    </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'

    export default {
        data() {
            return {
                // lunbotuList: [] //保存轮播图的数组
            }
        },
        created() {
            // this.getLunbotu()
        },
        methods: {
            /*getLunbotu() {
                this.$http.get('data/indexSwipes.json').then(function (result) {
                    console.log(result)
                    if (result.status === 200) { //等于200表示请求成功了
                        this.lunbotuList = result.body
                    } else {
                        Toast({
                            message:'加载轮播图失败',
                            duration: 1000,
                            position:'top'
                        })
                    }

                })
            }*/
        }
    }
</script>

<style scoped>
    .mint-swipe {
        height: 200px;
    }
    .mui-grid-view.mui-grid-9 {
       background: #fff;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        margin: 0;
        padding: 11px 15px;
        vertical-align: top;
        border-right: none;
        border-bottom: none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell img{
        width:50%;
        height:50%;
    }

    #photo{
        width:100%;
        height:100%;
    }
</style>