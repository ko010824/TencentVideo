<template>
  <div class="container">
      <container-swiper-div :data="data.swiList"></container-swiper-div>
      <container-history-div :data="data.historyList"></container-history-div>
      <container-hotPlay-div :data="data.mode[0].playList1"></container-hotPlay-div>
      <container-hotPlay-div :data="data.mode[0].playList2"></container-hotPlay-div>
      <container-figurePlay-div :data="data.mode[0].playList3"></container-figurePlay-div>
      <container-figurePlay-div :data="data.mode[0].playList4"></container-figurePlay-div>
      <container-figurePlay-div :data="data.mode[0].playList5"></container-figurePlay-div>
      <container-history-div :data="data.mode[0].playList6"></container-history-div>
      <container-figurePlay-div :data="data.mode[0].playList7"></container-figurePlay-div>
      <container-hotPlay-div :data="data.mode[0].playList8"></container-hotPlay-div>
      <container-figurePlay-div :data="data.mode[0].playList9"></container-figurePlay-div>
      <container-figurePlay-div :data="data.mode[0].playList10"></container-figurePlay-div>
  </div>
</template>

<script>
import "../assets/css/index.css";
import containerSwiperDiv from './containerSwiperDiv'
import containerHistoryDiv from './containerHistoryDiv'
import containerHotPlayDiv from './containerHotPlayDiv'
import containerFigurePlayDiv from './containerFigurePlayDiv'

    export default {
        name: "containDiv",
        props:["data"],
        components:{
            containerSwiperDiv,
            containerHistoryDiv,
            containerHotPlayDiv,
            containerFigurePlayDiv,
        }
    }
</script>

<style scoped>
</style>
