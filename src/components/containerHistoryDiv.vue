<template>
    <div class="part content-focus history">
        <h3>{{data.playTitle}}</h3>
        <div class="item-list">
            <a href="#" v-for="h in data.playMenu">
                <div class="item-cont">
                    <img :src="h.hImg" alt=""/>
                    <p><i class="icon-tri-red"></i><span class="icon-type-text">{{h.hTypeText}}</span></p>
                    <span>{{h.hDate}}</span>
                </div>
                <div class="item-title">{{h.hName}}</div>
                <div class="item-intro">{{h.hIntro}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "containerHistoryDiv",
        props:['data']
    }
</script>

<style scoped>
    /*@import "../../assets/css/index.css";*/
</style>