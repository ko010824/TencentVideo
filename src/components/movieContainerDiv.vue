<template>
    <div class="container">
        <container-hotPlay-div :data="mode.playList1"></container-hotPlay-div>
        <container-hotPlay-div :data="mode.playList2"></container-hotPlay-div>
        <container-figure-play-div :data="mode.playList3"></container-figure-play-div>
        <container-figure-play-div :data="mode.playList4"></container-figure-play-div>
        <container-figure-play-div :data="mode.playList5"></container-figure-play-div>
    </div>
</template>

<script>
    import containerHotPlayDiv from './containerHotPlayDiv'
    import containerFigurePlayDiv from './containerFigurePlayDiv'
    export default {
        name: "movieContainerDiv",
        components:{
            containerHotPlayDiv,
            containerFigurePlayDiv
        },
        data(){
            return {
                mode: {
                    playList1: {
                        'playTitle': '',
                        'playMenu': [
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54124231_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "7.5",
                                "pName": "逃跑计划·首播",
                                "pIntro": "明丫头开心嫁人！"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54203860_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "8.7",
                                "pName": "雪怪大冒险·合家欢",
                                "pIntro": "呆萌雪怪遇人类小脚怪"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54124231_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "7.5",
                                "pName": "逃跑计划·首播",
                                "pIntro": "明丫头开心嫁人！"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54203860_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "8.7",
                                "pName": "雪怪大冒险·合家欢",
                                "pIntro": "呆萌雪怪遇人类小脚怪"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54124231_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "7.5",
                                "pName": "逃跑计划·首播",
                                "pIntro": "明丫头开心嫁人！"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54203860_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "8.7",
                                "pName": "雪怪大冒险·合家欢",
                                "pIntro": "呆萌雪怪遇人类小脚怪"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54124231_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "7.5",
                                "pName": "逃跑计划·首播",
                                "pIntro": "明丫头开心嫁人！"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54203860_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "8.7",
                                "pName": "雪怪大冒险·合家欢",
                                "pIntro": "呆萌雪怪遇人类小脚怪"
                            },
                        ]
                    },
                    playList2: {
                        'playTitle': '为你推荐',
                        'playMenu': [
                            {
                                "pImg": 'http://puui.qpic.cn/vcover_hz_pic/0/87zd07p6ok4h7r6t1444739356.jpg/0',
                                "pTypeText": "VIP",
                                "pDate": "8.6",
                                "pName": "异形",
                                "pIntro": "外星生物带来的灾难！！"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/vcover_hz_pic/0/o7dot17jax05d8gt1444750569.jpg/0',
                                "pTypeText": "VIP",
                                "pDate": "8.7",
                                "pName": "驱魔人",
                                "pIntro": "驱魔人大战恶灵"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/vcover_hz_pic/0/87zd07p6ok4h7r6t1444739356.jpg/0',
                                "pTypeText": "VIP",
                                "pDate": "8.6",
                                "pName": "异形",
                                "pIntro": "外星生物带来的灾难！！"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/vcover_hz_pic/0/o7dot17jax05d8gt1444750569.jpg/0',
                                "pTypeText": "VIP",
                                "pDate": "8.7",
                                "pName": "驱魔人",
                                "pIntro": "驱魔人大战恶灵"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/vcover_hz_pic/0/87zd07p6ok4h7r6t1444739356.jpg/0',
                                "pTypeText": "VIP",
                                "pDate": "8.6",
                                "pName": "异形",
                                "pIntro": "外星生物带来的灾难！！"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/vcover_hz_pic/0/o7dot17jax05d8gt1444750569.jpg/0',
                                "pTypeText": "VIP",
                                "pDate": "8.7",
                                "pName": "驱魔人",
                                "pIntro": "驱魔人大战恶灵"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/vcover_hz_pic/0/87zd07p6ok4h7r6t1444739356.jpg/0',
                                "pTypeText": "VIP",
                                "pDate": "8.6",
                                "pName": "异形",
                                "pIntro": "外星生物带来的灾难！！"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/vcover_hz_pic/0/o7dot17jax05d8gt1444750569.jpg/0',
                                "pTypeText": "VIP",
                                "pDate": "8.7",
                                "pName": "驱魔人",
                                "pIntro": "驱魔人大战恶灵"
                            }
                        ]
                    },
                    playList3: {
                        'playTitle': '午夜放映：够胆！今晚只想惊声尖叫',
                        'playMenu': [
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54211726_1080607/0',
                                "pTypeText": "VIP",
                                "pDate": "8.6",
                                "pName": "鬼吹灯之寻龙诀",
                                "pIntro": "摸金校尉陈坤黄渤出山  开棺寻龙上演正宗盗墓"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54211739_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "7.6",
                                "pName": "午夜十二点",
                                "pIntro": "神秘宿舍恐怖事件频发"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54212242_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "8.5",
                                "pName": "唐人街探案",
                                "pIntro": "年度最惊悚一笑岂能不看"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54211739_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "7.6",
                                "pName": "午夜十二点",
                                "pIntro": "神秘宿舍恐怖事件频发"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54212242_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "8.5",
                                "pName": "唐人街探案",
                                "pIntro": "年度最惊悚一笑岂能不看"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54211739_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "7.6",
                                "pName": "午夜十二点",
                                "pIntro": "神秘宿舍恐怖事件频发"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54212242_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "8.5",
                                "pName": "唐人街探案",
                                "pIntro": "年度最惊悚一笑岂能不看"
                            },
                        ]
                    },
                    playList4: {
                        'playTitle': '首播影院',
                        'playMenu': [
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54201316_1080607/0',
                                "pTypeText": "VIP",
                                "pDate": "9.2",
                                "pName": "无双·最燃高智商犯罪片",
                                "pIntro": "发哥双枪横扫黑帮再现经典"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/52780317_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "8.1",
                                "pName": "焦点",
                                "pIntro": "雌雄大盗相爱相杀成真爱"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/39327036_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "8.0",
                                "pName": "爱情公寓",
                                "pIntro": "贱萌曾小贤变搞笑担当"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/52780317_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "8.1",
                                "pName": "焦点",
                                "pIntro": "雌雄大盗相爱相杀成真爱"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/39327036_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "8.0",
                                "pName": "爱情公寓",
                                "pIntro": "贱萌曾小贤变搞笑担当"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/52780317_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "8.1",
                                "pName": "焦点",
                                "pIntro": "雌雄大盗相爱相杀成真爱"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/39327036_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "8.0",
                                "pName": "爱情公寓",
                                "pIntro": "贱萌曾小贤变搞笑担当"
                            },
                        ]
                    },
                    playList5: {
                        'playTitle': '今晚只想惊声尖叫',
                        'playMenu': [
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54211726_1080607/0',
                                "pTypeText": "VIP",
                                "pDate": "8.6",
                                "pName": "鬼吹灯之寻龙诀",
                                "pIntro": "摸金校尉陈坤黄渤出山  开棺寻龙上演正宗盗墓"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54211739_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "7.6",
                                "pName": "午夜十二点",
                                "pIntro": "神秘宿舍恐怖事件频发"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54212242_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "8.5",
                                "pName": "唐人街探案",
                                "pIntro": "年度最惊悚一笑岂能不看"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54211739_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "7.6",
                                "pName": "午夜十二点",
                                "pIntro": "神秘宿舍恐怖事件频发"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54212242_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "8.5",
                                "pName": "唐人街探案",
                                "pIntro": "年度最惊悚一笑岂能不看"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54211739_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "7.6",
                                "pName": "午夜十二点",
                                "pIntro": "神秘宿舍恐怖事件频发"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/54212242_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "8.5",
                                "pName": "唐人街探案",
                                "pIntro": "年度最惊悚一笑岂能不看"
                            },
                        ]
                    },
                }
            }
        }
    }
</script>

<style scoped>

</style>