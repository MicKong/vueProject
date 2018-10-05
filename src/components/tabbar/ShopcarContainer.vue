<template>
    <div class="shopcar-container">
        <!--商品列表区域-->
        <div class="mui-card" v-for="(item,i) in goods">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch
                        v-model="$store.getters.getGoodsSelected[item.id]"
                        @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"
                    ></mt-switch>
                    <img :src="'src/images/' + item.imgSrc" alt="">
                    <div class="info">
                        <h5>{{ item.name }}</h5>
                        <p>
                            <span class="price">￥{{ item.price }}</span>
                            <numbox :initNum="$store.getters.getGoodsCount[item.id]" :goodsId="item.id"></numbox>
                            <a href="" @click.prevent="remove(item.id,i)">删除</a>
                        </p>

                    </div>
                </div>
            </div>
        </div>

        <!--商品结算区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div>
                        <p>总计（不含运费）</p>
                        <p>已勾选商品<span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span>件,总价<span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
                    </div>

                    <mt-button type="danger" size="small" >去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import numbox from '../subcomponents/shopcar_numbox.vue'

    export default {
        data: function () {
            return {
                goods: []
            }
        },
        created() {
            this.goods = this.$store.state.car
            console.log(this.goods)
        },
        methods: {
            remove(id,i){
                this.$store.commit('removeGood',id)
            },
            selectedChanged(id,val){
                this.$store.commit('updateGoodsSelected',{id:id,selected:val})
            }
        },
        components: {
            numbox
        }
    }
</script>

<style scoped>
    .shopcar-container {
        background-color: #ccc;
        overflow: hidden;
        margin-bottom: 55px;
    }

    .mui-card-content-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .shopcar-container img {
        width: 40px;
        height: 60px;
    }

    .mui-card-content-inner .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .mui-card-content-inner .info h5 {
        color: #000;
    }

    .mui-card-content-inner .info .price {
        color: red;
        font-weight: bold;
    }

    .mui-card-content-inner .red{
        color:red;
        font-weight: 700;
    }
</style>