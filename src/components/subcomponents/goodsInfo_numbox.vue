<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max' style="height:25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChange" ref="numBox"/>
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
                this.$emit('getCount',parseInt(this.$refs.numBox.value))
            }
        },
        props:['max'],
        /* watch:{
             //监听父组件传来的max属性
             max:function (newVal,oldVal) {
                 console.log(newVal,oldVal)
                 mui('.mui-numbox').numbox().setOption('max',newVal)
             }
         }*/
    }
</script>

<style scoped>

</style>