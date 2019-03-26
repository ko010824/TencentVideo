<template>
    <div>
        <header-div :data="data"></header-div>
        <movie-container-div></movie-container-div>
    </div>
</template>

<script>
    import headerDiv from "../components/headerDiv";
    import movieContainerDiv from "../components/movieContainerDiv";
    export default {
        name: "movie",
        components:{
            headerDiv,
            movieContainerDiv
        },
        props:["data"]
    }
</script>

<style scoped>

</style>