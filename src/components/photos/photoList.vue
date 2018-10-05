<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                        推荐
                    </a>
                    <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                        热点
                    </a>
                    <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                        北京
                    </a>
                    <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                        社会
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        娱乐
                    </a>
                </div>
            </div>

            <!--图片列表区域-->
            <ul class="photo-list">
                <router-link to="/home/photoInfo/" tag="li">
                    <img src="../../images/photo01.jpg" alt="">
                    <div class="info">
                        <h1 class="info-title">123</h1>
                        <div class="info-body">123456</div>
                    </div>
                </router-link>
                <router-link to="/home/photoInfo/" tag="li">
                    <img src="../../images/photo02.jpg" alt="">
                    <div class="info">
                        <h1 class="info-title">123</h1>
                        <div class="info-body">123456</div>
                    </div>
                </router-link> <router-link to="/home/photoInfo/" tag="li">
                <img src="../../images/photo01.jpg" alt="">
                <div class="info">
                    <h1 class="info-title">123</h1>
                    <div class="info-body">123456</div>
                </div>
            </router-link>
            </ul>

        </div>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'

    export default {
        data: function () {
            return {}
        },
        mounted: function () {
            console.log("9999999999999999999999999999999")
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        method: {}
    }
</script>

<style scoped>
    * {
        touch-action: pan-x;
    }

    .photo-list {
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0;
    }

    .photo-list li {
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 9px #999;
        position: relative;
    }

    .photo-list li img {
        width: 100%;
        vertical-align: middle;
    }

    .photo-list li .info {
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        max-height: 84px;
    }

    .photo-list li .info-title {
        font-size: 14px;
    }

    .photo-list li .info-body {
        font-size: 13px;
    }

</style>