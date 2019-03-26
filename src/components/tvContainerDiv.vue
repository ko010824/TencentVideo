<template>
    <div class="container">
        <container-swiper-div :data="swiList"></container-swiper-div>
        <container-hotPlay-div :data="mode.playList1"></container-hotPlay-div>
        <container-figurePlay-div :data="mode.playList2"></container-figurePlay-div>
        <container-figurePlay-div :data="mode.playList3"></container-figurePlay-div>
        <container-figurePlay-div :data="mode.playList4"></container-figurePlay-div>
        <container-figurePlay-div :data="mode.playList5"></container-figurePlay-div>
    </div>
</template>

<script>
    import containerSwiperDiv from './containerSwiperDiv'
    import containerHotPlayDiv from './containerHotPlayDiv'
    import containerFigurePlayDiv from './containerFigurePlayDiv'
    export default {
        name: "tvContainerDiv",
        components:{
            containerSwiperDiv,
            containerHotPlayDiv,
            containerFigurePlayDiv,
        },
        data(){
            return {
                swiList:[
                    {
                        "sImg":require("../assets/img/20.jpg"),
                        "sTypeText":"VIP",
                        "sDate":"更新至41集",
                        "sTitle":"【知否】顾廷烨迎亲，被三个姐夫堵门口"
                    },
                    {
                        "sImg":require("../assets/img/21.jpg"),
                        "sTypeText":"VIP",
                        "sDate":"更新至15集",
                        "sTitle":"【花不弃·更新】虐到肝疼！莲衣客拒绝不弃告白"
                    },
                    {
                        "sImg":require("../assets/img/20.jpg"),
                        "sTypeText":"VIP",
                        "sDate":"更新至41集",
                        "sTitle":"【知否】顾廷烨迎亲，被三个姐夫堵门口"
                    },
                    {
                        "sImg":require("../assets/img/21.jpg"),
                        "sTypeText":"VIP",
                        "sDate":"更新至15集",
                        "sTitle":"【花不弃·更新】虐到肝疼！莲衣客拒绝不弃告白"
                    },
                    {
                        "sImg":require("../assets/img/20.jpg"),
                        "sTypeText":"VIP",
                        "sDate":"更新至41集",
                        "sTitle":"【知否】顾廷烨迎亲，被三个姐夫堵门口"
                    },
                    {
                        "sImg":require("../assets/img/21.jpg"),
                        "sTypeText":"VIP",
                        "sDate":"更新至15集",
                        "sTitle":"【花不弃·更新】虐到肝疼！莲衣客拒绝不弃告白"
                    },
                ],
                mode: {
                    playList1: {
                        'playTitle': '热剧精选',
                        'playMenu': [
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/53302052_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "更新至41集",
                                "pName": "知否知否[会员抢先看]",
                                "pIntro": "明丫头开心嫁人！"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/53093738_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "更新至15集",
                                "pName": "花不弃[会员抢先看]",
                                "pIntro": "不弃高烧又失恋病情加重"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/53302052_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "更新至41集",
                                "pName": "知否知否[会员抢先看]",
                                "pIntro": "明丫头开心嫁人！"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/53093738_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "更新至15集",
                                "pName": "花不弃[会员抢先看]",
                                "pIntro": "不弃高烧又失恋病情加重"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/53302052_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "更新至41集",
                                "pName": "知否知否[会员抢先看]",
                                "pIntro": "明丫头开心嫁人！"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/53093738_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "更新至15集",
                                "pName": "花不弃[会员抢先看]",
                                "pIntro": "不弃高烧又失恋病情加重"
                            },
                        ]
                    },
                    playList2: {
                        'playTitle': '回家长途漫漫 备点好剧准备过年',
                        'playMenu': [
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/52252072_1080607/0',
                                "pTypeText": "VIP",
                                "pDate": "02:37",
                                "pName": "怒晴湘西[1月21日全网独播]",
                                "pIntro": "潘粤明高伟光辛芷蕾探秘峭壁悬棺之谜！！"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/53210360_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "01:42",
                                "pName": "知否·快乐源泉",
                                "pIntro": "小六的奇妙约会"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/52959880_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "05:22",
                                "pName": "入戏·小秦氏",
                                "pIntro": "我还有大招等着赵丽颖"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/53210360_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "01:42",
                                "pName": "知否·快乐源泉",
                                "pIntro": "小六的奇妙约会"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/52959880_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "05:22",
                                "pName": "入戏·小秦氏",
                                "pIntro": "我还有大招等着赵丽颖"
                            },
                        ]
                    },
                    playList3: {
                        'playTitle': '热剧追追追',
                        'playMenu': [
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/52698965_1080607/0',
                                "pTypeText": "VIP",
                                "pDate": "更新至28集",
                                "pName": "星途叵测[会员看28集]",
                                "pIntro": "颁奖礼闹剧！推哥遭两女星现场争抢！！"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/52947412_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "全87集",
                                "pName": "如懿传[会员看全集]",
                                "pIntro": "周迅霍建华演绎清宫风云"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/52243668_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "全47集",
                                "pName": "大江大河[全集限免]",
                                "pIntro": "王凯杨烁演绎时代奋斗史"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/52947412_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "全87集",
                                "pName": "如懿传[会员看全集]",
                                "pIntro": "周迅霍建华演绎清宫风云"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/52243668_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "全47集",
                                "pName": "大江大河[全集限免]",
                                "pIntro": "王凯杨烁演绎时代奋斗史"
                            },
                        ]
                    },
                    playList4: {
                        'playTitle': '限免进行中，补剧正当时',
                        'playMenu': [
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/44979916_1080607/0',
                                "pTypeText": "VIP",
                                "pDate": "全52集",
                                "pName": "沙海",
                                "pIntro": "吴磊秦昊开启探险之旅"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/44979652_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "全42集",
                                "pName": "斗破苍穹",
                                "pIntro": "吴磊林允闯荡热血江湖"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/52243668_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "全50集",
                                "pName": "人生若如初相见",
                                "pIntro": "韩东君孙怡民国错位虐恋"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/44979652_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "全42集",
                                "pName": "斗破苍穹",
                                "pIntro": "吴磊林允闯荡热血江湖"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/52243668_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "全50集",
                                "pName": "人生若如初相见",
                                "pIntro": "韩东君孙怡民国错位虐恋"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/44979652_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "全42集",
                                "pName": "斗破苍穹",
                                "pIntro": "吴磊林允闯荡热血江湖"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/52243668_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "全50集",
                                "pName": "人生若如初相见",
                                "pIntro": "韩东君孙怡民国错位虐恋"
                            },
                        ]
                    },
                    playList5: {
                        'playTitle': '脑洞清奇的泰剧',
                        'playMenu': [
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/52698965_1080607/0',
                                "pTypeText": "VIP",
                                "pDate": "更新至28集",
                                "pName": "星途叵测[会员看28集]",
                                "pIntro": "颁奖礼闹剧！推哥遭两女星现场争抢！！"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/45996388_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "全26集",
                                "pName": "O型血[会员全集]",
                                "pIntro": "泰国少年青春时光勇敢追爱"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/45096390_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "全54集",
                                "pName": "命中不注定[会员全集]",
                                "pIntro": "大团圆！安瑞初一家三口团聚"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/49934463_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "全20集",
                                "pName": "一喵定情[会员全集]",
                                "pIntro": "Esther与男友上演萌宠情缘"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/46147470_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "全26集",
                                "pName": "毒玫瑰[会员全集]",
                                "pIntro": "毒舌男医生恋上娇蛮大明星"
                            },
                        ]
                    },
                    playList6: {
                        'playTitle': 'Bigger爆表的美剧',
                        'playMenu': [
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/52795876_1080607/0',
                                "pTypeText": "VIP",
                                "pDate": "全8集",
                                "pName": "X战警：军团",
                                "pIntro": "大表哥点醒七秒记忆的高僧"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/49327101_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "更新至08集",
                                "pName": "反击美版第五季",
                                "pIntro": "最帅的动作美剧"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/49327961_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "全23集",
                                "pName": "闪电侠新季[会员全集]",
                                "pIntro": "小闪米帅遭黑丝雀截胡"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/44453934_498280/0',
                                "pTypeText": "VIP",
                                "pDate": "01:23",
                                "pName": "《权力的游戏8》概念预告 ",
                                "pIntro": "冰龙火龙大战一触即发"
                            },
                            {
                                "pImg": 'http://puui.qpic.cn/tv/0/39335309_498280/0',
                                "pTypeText": "限免",
                                "pDate": "全10集",
                                "pName": "西部世界[全集限免]",
                                "pIntro": "高分神作！AI终极反抗"
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