<template>
    <header>
        <home-header-top></home-header-top>
        <home-header-nav :data="data"></home-header-nav>
    </header>
</template>

<script>
import homeHeaderTop from './homeHeaderTop'
import homeHeaderNav from './homeHeaderNav'
import "../assets/css/index.css";
export default {
    name: 'headerDiv',
    components:{homeHeaderTop,homeHeaderNav},
    props:["data"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
