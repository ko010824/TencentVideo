<template>
    <div class="part content1-swiper">
        <div class="swiper-container">
            <div class="swiper-wrapper swiper-my-container">
                <div class="swiper-slide" v-for="s in data">
                    <router-link to="/play">
                        <div class="item-cont">
                            <img :src="s.sImg" alt=""/>
                            <p><i class="icon-tri-red"></i><span class="icon-type-text">{{s.sTypeText}}</span></p>
                            <span>{{s.sDate}}</span>
                        </div>
                        <div class="s-title-text">
                            {{s.sTitle}}
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="swiper-pagination swi-page"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper"
    import "../assets/css/swiper.css";
    export default {
        name: "containerSwiperDiv",
        props:['data'],
        mounted(){
            new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
                autoplay: {
                    type: true,
                    delay: '2000',

                }
            })
        }
    }
</script>

<style scoped>
    /*@import "../../assets/css/index.css";*/
</style>