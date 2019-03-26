<template>
    <div id="app">
        <router-view :data="data.data"></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return {
            data: []
        }
    },
    created() {
        fetch("/api/data")
            .then(function(response) {
                // console.log(response)
                return response.json();
            })
            .then(json=>{
                this.data = json
                // console.log(this.data)
            })
    }
}
</script>

<style>
#app {
    width: 100%;
    height: 100%;
}
</style>
