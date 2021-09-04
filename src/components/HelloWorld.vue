<script setup>
import image1 from '../assets/images/WechatIMG108.jpeg'
const files = import.meta.globEager('../assets/images/*')
import modules from '../assets/images/index.js'
console.log('------>', modules)
const images = Object.keys(modules).map(key => modules[key])
</script>

<template>
<div class="root-div">
  <div>
    <img v-for="item in images" :key="item" :src="item" />
  </div>
</div>
</template>

<style scoped lang="less">
a {
  color: #42b983;
}
.root-div {
  display: flex;
  padding: 10px 0;
  flex-wrap: wrap;
  justify-content: space-around;
  img {
    margin: 10px 1%;
    width: 30%;
  }
}
</style>
