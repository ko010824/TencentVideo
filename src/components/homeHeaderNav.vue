<template>
  <div class="header-nav">
    <ul>
      <li v-for="(l,i) in data.list" @focus="getIndex(i)">
        <router-link :to="l.href">
          <span>{{l.option}}</span>
          <i class="line"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "homeHeaderNav",
    props:['data'],
    methods: {
      getIndex(i){
          let lis = document.getElementsByTagName("li");
          lis[i].firstElementChild.className = 'active';
          lis[i].firstElementChild.lastElementChild.className = "line";
          // lis[!i].firstElementChild.className = '';
          // lis[!i].firstElementChild.lastElementChild.className = '';
      }
    }
  }

</script>

<style scoped>
</style>
