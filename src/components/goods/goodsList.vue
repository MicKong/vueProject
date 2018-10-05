<template>
    <div class="goods-list">

        <!--从模拟后台数据的data.json中取商品列表数据-->
        <div class="goods-item" v-for="item in goodsList" @click="goDetail(item.id)">
            <img :src="'src/images/'+item.img1" alt="">
            <h1 class="title">{{ item.name }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.newPrice }}</span>
                    <span class="old">￥{{ item.oldPrice }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock }}件</span>
                </p>
            </div>
        </div>

        <mt-button type="danger" size="large">加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                goodsList:[]
            };
        },
        created() {
            this.$http.get('./data.json').then(function (result) {
                this.goodsList = result.body
            })
        },
        methods: {
            goDetail(id) {
                this.$router.push('/home/goodsInfo/'+id);
            }
        }
    };
</script>

<style scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
    }

    .goods-list .goods-item {
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
    }

    .goods-list .goods-item img {
        margin-top:20px;
        width: 100%;
    }

    .goods-list .goods-item .title {
        font-size: 14px;
    }

    .goods-list .goods-item .info {
        background-color: #eee;
    }

    .goods-list .goods-item .info p {
        margin: 0;
        padding: 5px;
    }

    .goods-list .goods-item .info .now {
        color: red;
        font-weight: bold;
        font-size: 16px;
    }

    .goods-list .goods-item .info .old {
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 10px;
    }


    .goods-list .goods-item .info .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
</style>
