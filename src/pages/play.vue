<template>
    <div class="play-page-v">
        <div class="g_container_loading none">
            <div class="loading_con">
                <i class="icon_loading"></i>
                <div class="loading_text">努力加载中</div>
            </div>
        </div>
        <div class="play-container bg-color-a">
            <div class="vip-head">
                <a href="#" class="gold-logo"><img src="../assets/img/logo_gold.png" alt=""></a>
                <router-link to="/play/login" class="login" :class="{none:isNone1}">登录</router-link>
                <a href="javascript:void(0);" @click="appear" class="js-user-u" :class="{none:isNone2}">
                    <img src="//thirdqq.qlogo.cn/g?b=sdk&k=9PCTXibJtKaIbT4E3xiaoV3Q&s=40&t=1541567011" alt="愿。"/>
                    <i class="js-u-qq"></i>
                    <i class="js-u-vip-year"></i>
                </a>
            </div>
            <div class="vip-player">
                <div class="v-p-poster">
                    <img src="../assets/img/10.jpg" alt=""/>
                    <span class="poster_mask"></span>
                </div>
            </div>
            <div style="padding: 15px 15px 0;">
                <a href="javascript:void(0);" class="btn_open_v">
                    <span class="icon_logo_v"></span>
                    <span class="icon_text">提升3倍流畅度，打开腾讯视频</span>
                </a>
            </div>
            <video-info-detail></video-info-detail>
            <div class="mod-box-bg">
                <div class="mod-box">
                    <div class="m-b-title">剧集</div>
                    <div class="m-b-uls">
                        <ul class="m-b-items">
                            <li v-for="(i,index) in numList" class="item" @focus="showCurrent(index)"><a href="#">{{i}}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mod-box-bg bg-color-b">
                <div class="mod-box">
                    <div class="m-b-title">精彩剧情预览</div>
                    <div class="m-b-uls">
                        <ul class="m-b-items">
                            <li class="item-pre-view">
                                <a href="#">
                                    <div class="bg-span-posi">
                                        <img src="../assets/img/11.jpg" alt=""/>
                                        <span class="view-masker">8秒</span>
                                    </div>
                                </a>
                            </li>
                            <li class="item-pre-view">
                                <a href="#">
                                    <div class="bg-span-posi">
                                        <img src="../assets/img/12.jpg" alt=""/>
                                        <span class="view-masker">8秒</span>
                                    </div>
                                </a>
                            </li>
                            <li class="item-pre-view">
                                <a href="#">
                                    <div class="bg-span-posi">
                                        <img src="../assets/img/11.jpg" alt=""/>
                                        <span class="view-masker">8秒</span>
                                    </div>
                                </a>
                            </li>
                            <li class="item-pre-view">
                                <a href="#">
                                    <div class="bg-span-posi">
                                        <img src="../assets/img/12.jpg" alt=""/>
                                        <span class="view-masker">8秒</span>
                                    </div>
                                </a>
                            </li>
                            <li class="item-pre-view">
                                <a href="#">
                                    <div class="bg-span-posi">
                                        <img src="../assets/img/11.jpg" alt=""/>
                                        <span class="view-masker">8秒</span>
                                    </div>
                                </a>
                            </li>
                            <li class="item-pre-view">
                                <a href="#">
                                    <div class="bg-span-posi">
                                        <img src="../assets/img/12.jpg" alt=""/>
                                        <span class="view-masker">8秒</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mod-box-bg bg-color-b">
                <div class="mod-box">
                    <div class="m-b-title">片花</div>
                    <div class="m-b-uls">
                        <ul class="m-b-items">
                            <li class="item-pre-view">
                                <a href="#">
                                    <div class="bg-span-posi">
                                        <img src="../assets/img/13.jpg" alt=""/>
                                        <span class="view-masker">1分33秒</span>
                                    </div>
                                    <p>《知否》原著解读：如兰爱上穷书生，竟全靠顾二爷成全？</p>
                                </a>
                            </li>
                            <li class="item-pre-view">
                                <a href="#">
                                    <div class="bg-span-posi">
                                        <img src="../assets/img/14.jpg" alt=""/>
                                        <span class="view-masker">1分33秒</span>
                                    </div>
                                    <p>虐！二叔截胡小公爷，网友：请初恋cp立刻马上原地完婚</p>
                                </a>
                            </li>
                            <li class="item-pre-view">
                                <a href="#">
                                    <div class="bg-span-posi">
                                        <img src="../assets/img/13.jpg" alt=""/>
                                        <span class="view-masker">1分33秒</span>
                                    </div>
                                    <p>《知否》原著解读：如兰爱上穷书生，竟全靠顾二爷成全？</p>
                                </a>
                            </li>
                            <li class="item-pre-view">
                                <a href="#">
                                    <div class="bg-span-posi">
                                        <img src="../assets/img/14.jpg" alt=""/>
                                        <span class="view-masker">1分33秒</span>
                                    </div>
                                    <p>虐！二叔截胡小公爷，网友：请初恋cp立刻马上原地完婚</p>
                                </a>
                            </li>
                            <li class="item-pre-view">
                                <a href="#">
                                    <div class="bg-span-posi">
                                        <img src="../assets/img/13.jpg" alt=""/>
                                        <span class="view-masker">1分33秒</span>
                                    </div>
                                    <p>《知否》原著解读：如兰爱上穷书生，竟全靠顾二爷成全？</p>
                                </a>
                            </li>
                            <li class="item-pre-view">
                                <a href="#">
                                    <div class="bg-span-posi">
                                        <img src="../assets/img/14.jpg" alt=""/>
                                        <span class="view-masker">1分33秒</span>
                                    </div>
                                    <p>虐！二叔截胡小公爷，网友：请初恋cp立刻马上原地完婚</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mod-box-bg">
                <div class="mod-box">
                    <div class="m-b-title">会员特权</div>
                    <div class="m-b-uls">
                        <ul class="m-b-items uls-vip-items">
                            <li class="vip-item">
                                <a href="javascript:void(0);">
                                    <img src="../assets/img/icon3.png" alt="">
                                    <span>院线新片</span>
                                </a>
                            </li>
                            <li class="vip-item">
                                <a href="javascript:void(0);">
                                    <img src="../assets/img/icon4.png" alt="">
                                    <span>独家美剧</span>
                                </a>
                            </li>
                            <li class="vip-item">
                                <a href="javascript:void(0);">
                                    <img src="../assets/img/icon5.png" alt="">
                                    <span>广告特权</span>
                                </a>
                            </li>
                            <li class="vip-item">
                                <a href="javascript:void(0);">
                                    <img src="../assets/img/icon6.png" alt="">
                                    <span>1080P</span>
                                </a>
                            </li>
                            <li class="vip-item">
                                <a href="javascript:void(0);">
                                    <img src="../assets/img/icon7.png" alt="">
                                    <span>赠观影劵</span>
                                </a>
                            </li>
                            <li class="vip-item">
                                <a href="javascript:void(0);">
                                    <img src="../assets/img/icon8.png" alt="">
                                    <span>尊贵身份</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mod-box-bg">
                <div class="mod-box">
                    <div class="m-b-title">会员福利</div>
                    <div class="m-b-uls">
                        <ul class="m-b-items uls-vip-items">
                            <li class="vip-item vip-buy-item">
                                <a href="javascript:void(0);">
                                    <img src="../assets/img/15.jpg" alt="">
                                    <span>【限时抢】VIP首月12元</span>
                                </a>
                            </li>
                            <li class="vip-item vip-buy-item">
                                <a href="javascript:void(0);">
                                    <img src="../assets/img/16.jpg" alt="">
                                    <span>领15天喜马拉雅VIP</span>
                                </a>
                            </li>
                            <li class="vip-item vip-buy-item">
                                <a href="javascript:void(0);">
                                    <img src="../assets/img/15.jpg" alt="">
                                    <span>【限时抢】VIP首月12元</span>
                                </a>
                            </li>
                            <li class="vip-item vip-buy-item">
                                <a href="javascript:void(0);">
                                    <img src="../assets/img/16.jpg" alt="">
                                    <span>领15天喜马拉雅VIP</span>
                                </a>
                            </li>
                            <li class="vip-item vip-buy-item">
                                <a href="javascript:void(0);">
                                    <img src="../assets/img/15.jpg" alt="">
                                    <span>【限时抢】VIP首月12元</span>
                                </a>
                            </li>
                            <li class="vip-item vip-buy-item">
                                <a href="javascript:void(0);">
                                    <img src="../assets/img/16.jpg" alt="">
                                    <span>领15天喜马拉雅VIP</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mod-box-bg">
                <div class="mod-box">
                    <div class="m-b-title">影视圈</div>
                    <div class="m-b-uls">
                        <ul class="m-b-items uls-vip-items uls-comment-items">
                            <li class="item-comment">
                                <dl>
                                    <dt><img src="../assets/img/g.jpg" alt="追剧小奶鹅"></dt>
                                    <dd>追剧小奶鹅  </dd>
                                </dl>
                                <div class="i-comment-bg">
                                    <p class="i-c-text">正午阳光又一良心剧上线，剧里一帧一画都是壁纸，服装细节真实好评，小奶鹅忍不住点赞打Call！</p>
                                    <ul class="i-c-pic">
                                        <li><img src="../assets/img/17.jpg" alt=""></li>
                                        <li><img src="../assets/img/18.jpg" alt=""></li>
                                        <li><img src="../assets/img/19.jpg" alt=""></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="item-comment">
                                <dl>
                                    <dt><img src="../assets/img/h.jpg" alt="半夏微澜  "></dt>
                                    <dd>半夏微澜    </dd>
                                </dl>
                                <div class="i-comment-bg">
                                    <p class="i-c-text">昨夜雨疏风骤，浓睡不消残酒。
                                        试问卷帘人，却道“海棠依旧”。
                                        知否，知否？应是绿肥红瘦
                                        盛家有女初长成 稚嫩萌芽情深种
                                        身着冬衣走河畔 叶泪黄枯萎疾成
                                        桥下袭人莫留恋 谁知夕阳停留影
                                        笙笙不息模样汝 小巧玲珑印已刻 ​​​
                                        期待明兰温暖这一整个冬天。
                                        喜欢点赞评论哦！</p>
                                    <ul class="i-c-pic">

                                    </ul>
                                </div>
                            </li>
                            <li class="item-comment">
                                <dl>
                                    <dt><img src="../assets/img/j.jpg" alt="一名追剧奇葩的网友"></dt>
                                    <dd>一名追剧奇葩的网友  </dd>
                                </dl>
                                <div class="i-comment-bg">
                                    <p class="i-c-text">知否，知否？应是绿肥红瘦。丽颖又来新剧，丽颖和绍峰现实中是夫妻，剧中演从相识相恋也是夫妻，缘分啊！😂1225首播准时追，有多少人在等呢？大姆指决定看看啊</p>
                                    <ul class="i-c-pic">

                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div style="padding: 15px 15px 0;">
                        <a href="javascript:void(0);" class="btn_open_v">
                            <span class="icon_logo_v"></span>
                            <span class="icon_text">打开腾讯视频，参与<span>21796</span>条热评大讨论</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="g-style-mask" :class="{none:isNone}">
            <div class="quit-login-bg">
                <div class="quit-login">
                    <p class="q-l-title">温馨提示</p>
                    <p class="q-l-txt">您确定要退出登录吗？</p>
                    <div class="q-l-butt-box">
                        <a href="javascript:void(0);" @click="cancel" class="q-l-button q-l-b-cancel">取消</a>
                        <a href="javascript:void(0);" @click="confirm" class="q-l-button q-l-b-confirm">确定</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import videoInfoDetail from '../components/videoInfoDetail'
    export default {
        name: "play",
        data(){
            return {
                isNone:true,
                isNone1:true,
                isNone2:false,
                numList:['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16',
                '17','18','19','20','21','22','23','24']
            }
        },
        components:{
            videoInfoDetail,
        },
        methods:{
            cancel(){
                this.isNone = true;
            },
            confirm(){
                this.isNone = true;
                this.isNone1 = false;
                this.isNone2 = true;
            },
            appear(){
                this.isNone = false;
            },
            showCurrent(index){
                if(index === 0){
                    let lis = document.getElementsByClassName('item');
                    lis[index].classList.add('current');
                    lis[index].className = 'current';
                }
            }
        }
    }
</script>

<style scoped>
    @import '../assets/css/play.css';
    .play-page-v{
        background-color: rgba(42,40,54,1);
    }
</style>
