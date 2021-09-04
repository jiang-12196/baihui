<script setup>
import { ref } from 'vue'
import modules from '../assets/images/index.js'
const images = Object.keys(modules).map(key => modules[key])
const showImage = (newIndex) => {
  show.value = true
  index.value = newIndex
}
const show = ref(false);
const index = ref(0);
const onChange = (newIndex) => {
  // index.value = newIndex;
};
</script>

<template>
<div class="root-div">
  <div class="id-title">栢慧婚纱</div>
  <div class="image-content">
    <div v-for="(item, index) in images" :key="item" class="image-item">
      <img :src="item[0]" @click="showImage(index)"/>
      <!-- <div>{{item[0].split('/')[item[0].split('/').length-1].split('.')[0]}}</div> -->
      <div>{{item.length}}</div>
    </div>
  </div>
  <van-image-preview v-model:show="show" :images="images[index]" :start-position="0" @change="onChange">
  </van-image-preview>
</div>
</template>

<style scoped lang="less">
.id-title {
  color: #cccccc;
  font-size: 20px;
  margin: 20px auto;
}
.root-div {
.image-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
    .image-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 30%;
      position: relative;
      div {
        text-align: center;
        font-size: 12px;
        position: absolute;
        left: 4px;
        bottom: 20px;
        background: #82704A;
        color: #fff;
        padding: 2px 4px;
        border-radius: 4px;
      }
    }
    img {
      margin: 10px 1%;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
