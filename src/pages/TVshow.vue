<template>
    <div>
        <header-div :data="data"></header-div>
        <tv-container-div></tv-container-div>
    </div>
</template>

<script>
  import headerDiv from "../components/headerDiv";
  import tvContainerDiv from "../components/tvContainerDiv";
  export default {
      name: "TVshow",
      components:{
          headerDiv,
          tvContainerDiv,
      },
      props:["data"]
  }
</script>

<style scoped>

</style>
