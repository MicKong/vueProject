<template>
    <div class="mui-numbox" data-numbox-min='1'  style="height:25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initNum" @change="countChange" ref="numBox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'
    export default {
        data:function () {
            return {

            }
        },
        mounted () {
            //初始化数字选择框组件
            mui('.mui-numbox').numbox()
        },
        methods:{
            countChange(){
                //每当数量值改变，立即把最新的数据同步到购物车的state中覆盖之前数据
               this.$store.commit('updateGoodsInfo',{
                   id:this.goodsId,
                   count:this.$refs.numBox.value
               })
            }
        },
        props:['initNum','goodsId']

    }
</script>

<style scoped>

</style>