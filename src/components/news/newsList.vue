<template>
    <div class="newsList">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>
                            <span>发表时间：2018-9-19</span>
                            <span>点击次数：1</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/muwu.jpg">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/cbd.jpg">
                    <div class="mui-media-body">
                        CBD
                        <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                    </div>
                </a>
            </li>

        </ul>

        <comment></comment>
    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue'
    export default {
        data:function () {
            return {
                
            }
        },
        created(){

        },
        methods:{

        },
        components:{
            'comment': comment
        }
    }
</script>

<style scoped>
    .mui-ellipsis{
        color:#3385ff;
        display: flex;
        justify-content: space-between;
    }
</style>