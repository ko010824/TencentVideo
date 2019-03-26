<template>
  <div>
    <header-div :data="data"></header-div>
    <contain-div :data="data"></contain-div>
  </div>
</template>

<script>
  import headerDiv from "../components/headerDiv";
  import containDiv from '../components/containDiv';
  export default {
        name: 'index',
        components: {headerDiv,containDiv},
        props:["data"]
  }
</script>

<style scoped>
  @import "../assets/css/index.css";
</style>
