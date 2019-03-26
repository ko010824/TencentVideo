<template>
      <div class="header-top">
        <a href="#" class="logo-div"><div class="head-logo"></div></a>
        <a href="#" class="search-div">
          <span>{{msg}}</span>
          <div class="icon-search">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="svg_1_blur" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="0"/>
                </filter>
              </defs>
              <g>
                <title>Layer 1</title>
                <ellipse fill="none" stroke-width="1.5" cx="9" cy="9" id="svg_1" rx="5.92267" ry="6" stroke="grey" filter="url(#svg_1_blur)"/>
                <line fill="none" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" x1="13.40815" y1="13.67713" x2="18.40583" y2="17.56421" id="svg_4" stroke-linejoin="null" stroke-linecap="null" stroke="grey"/>
              </g>
            </svg>
          </div>
        </a>
      </div>
</template>

<script>
    export default {
        name: "homeHeaderTop",
        data(){
          return {
            msg:'知否知否'
          }
        }
    }
</script>

<style scoped>
</style>
