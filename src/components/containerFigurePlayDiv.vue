<template>
    <div class="part content-focus figurePlay">
        <h3>{{data.playTitle}}</h3>
        <div class="item-list item-list2 item-list3">
            <a href="#" v-for="p in data.playMenu">
                <div class="item-cont">
                    <img :src="p.pImg" alt=""/>
                    <p><i class="icon-tri-red"></i><span class="icon-type-text">{{p.pTypeText}}</span></p>
                    <span>{{p.pDate}}</span>
                </div>
                <div class="item-title">{{p.pName}}</div>
                <div class="item-intro">{{p.pIntro}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "containerFigurePlayDiv",
        props:['data']
    }
</script>

<style scoped>
    /*@import "../../assets/css/index.css";*/
</style>