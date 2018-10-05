<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>

        <mt-button type="primary" size="large" @click="publish">发表评论</mt-button>

        <div class="cmt-list" v-for="(item,i) in comments" :key="item.name">
            <div class="cmt-item">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp&nbsp用户：{{ item.name }} <br>发表时间：{{ item.create_time | dateFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content }}
                </div>
            </div>

        </div>

        <mt-button type="danger" size="large" plain>加载更多</mt-button>

    </div>
</template>

<script>

    import {Toast} from 'mint-ui'

    export default {
        data: function () {
            return {
                comments: [
                    {"name": "被驯服的象", "content": "沙发", "create_time": "2018-4-15 08:15:23"},
                    {"name": "街灯晚餐", "content": "哈哈哈哈", "create_time": "2018-4-23 09:48:11"}
                ],
                msg: ''
            }
        },
        methods: {
            publish: function () {
                if(this.msg.trim().length === 0){
                   return Toast({
                        message:'评论不能为空',
                        duration: 1000,
                        position:'middle'
                    })
                }
                this.comments.unshift({
                    name: "xxx",
                    content: this.msg,
                    create_time: Date.now()
                })
                this.msg = ''
            }
        }
    }
</script>

<style scoped>
    .cmt-container{
        margin: 0 5px 10px 5px;
    }
    .cmt-container h3 {
        font-size: 18px;
    }

    .cmt-container .cmt-list {
        margin: 5px 0;
    }

    .cmt-container .cmt-list .cmt-item {
        font-size: 13px;
    }

    .cmt-container .cmt-list .cmt-title {
        line-height: 20px;
        background-color: #ccc;
        padding:5px;
    }

    .cmt-container .cmt-list .cmt-body {
        line-height: 35px;
        text-indent: 2em;
    }

</style>