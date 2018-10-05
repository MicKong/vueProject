<template>
    <div class="goodsInfo-container">

        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>

        <!-- 商品轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-swipe :auto="800" speed="1200">
                        <mt-swipe-item>
                            <img :src="'src/images/' + goodsInfo.img2" id="photo" alt="">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img :src="'src/images/' + goodsInfo.img3" id="photo" alt="">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img :src="'src/images/' + goodsInfo.img4" id="photo" alt="">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>
            </div>
        </div>


        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{goodsInfo.name}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：
                        <del>￥{{ goodsInfo.oldPrice }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{goodsInfo.newPrice}}</span>
                    </p>
                    <p>
                        购买数量：
                        <numbox @getCount="selectedCount" :max="maxNum"></numbox> <!--假装后台取到库存数量为1950-->
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToCar">加入购物车</mt-button>
                    </p>
                </div>

            </div>
        </div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：1008465</p>
                    <p>库存情况：{{ goodsInfo.stock }}件</p>
                    <p>上架时间：2018-8-9</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment">商品评论</mt-button>
            </div>
        </div>

    </div>
</template>

<script>
    import numbox from '../subcomponents/goodsInfo_numbox.vue'

    export default {
        data() {
            return {
                id:this.$route.params.id, //存储商品id,方便以后使用
                goodsInfo:{}, //商品全部信息
                count :1, //存储用户购买数量，默认为1
                maxNum:195,
                ballFlag: false, // 控制小球的隐藏和显示的标识符
            };
        },
        created(){
             this.$http.get('./data.json').then(function (result) {
                 result.body.forEach(item => {
                     if(item.id == this.id){
                         this.goodsInfo = item
                         return true
                     }
                 })
             })
        },
        components: {
            'numbox': numbox
        },
        methods: {
            goDesc() {
                this.$router.push('/home/goodsDesc')
            },
            goComment() {
                this.$router.push('/home/goodsComment')
            },
            addToCar() {
                this.ballFlag = !this.ballFlag
                this.$store.commit('addToCar',{
                    id:this.id,
                    name:this.goodsInfo.name,
                    count:this.count,
                    price:this.goodsInfo.newPrice,
                    imgSrc:this.goodsInfo.imgSrc,
                    selected:true
                })
            },
            beforeEnter(el) {
                el.style.transform = 'translate(0,0)'
            },
            enter(el, done) {
                el.offsetWidth

                var ballPosition = this.$refs.ball.getBoundingClientRect()
                var badgePosition = document.getElementById('badge').getBoundingClientRect()
                var x = badgePosition.left - ballPosition.left
                var y = badgePosition.top - ballPosition.top

                el.style.transform = `translate(${ x }px, ${ y }px)`
                el.style.transition = 'all 0.5s cubic-bezier(.4,-0.3,1,.68)'
                done()
            },
            afterEnter() {
                this.ballFlag = !this.ballFlag
            },
            selectedCount(count){ //此方法用于给数字框子组件使用，为了得到子组件的值
                this.count = count

            }
        }
    }
</script>

<style scoped>
    .mint-swipe {
        height: 200px;
    }

    .goodsInfo-container {
        background-color: #eee;
        overflow: hidden;
    }

    .goodsInfo-container .now_price {
        color: red;
        font-size: 16px;
        font-weight: bold;
    }

    .mui-card-footer {
        display: block;
    }

    .mui-card-footer button {
        margin: 15px 0;
    }

    .ball {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top: 390px;
        left: 146px;
    }

    .mui-card-content-inner{
        text-align: center;
    }

    #photo {
        height:110%;
    }

</style>
