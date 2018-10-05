<template>
    <div class="photoInfo-container">
        <h3>123</h3>
        <p class="subtitle">
            <span>发表时间：2018-5-8</span>
            <span>点击：12</span>
        </p>

        <hr>

        <!-- 缩略图区域 -->
        <div class="thumbs">
            <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
            <!--<img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">-->
        </div>

        <!-- 图片内容区域 -->
        <div class="content">
            子禽问于子贡曰：“夫子至于是邦也，必闻其政，求之与？抑与之与？”子贡曰：“夫子温、良、恭、俭、让以得之。夫子之求之也，其诸异乎人之求之与？”
        </div>

        <!-- 放置一个现成的 评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
    export default {
        data:function () {
            return {
                slide1: [
                    {
                        src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                        msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                        alt: 'picture1',
                        title: 'Image Caption 1',
                        w: 600,
                        h: 400
                    },
                    {
                        src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                        msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                        alt: 'picture2',
                        title: 'Image Caption 2',
                        w: 1200,
                        h: 900
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .photoInfo-container{
        margin: 0 5px 10px 5px;
    }
</style>