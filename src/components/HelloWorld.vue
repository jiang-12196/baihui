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
  index.value = newIndex;
};
</script>

<template>
<div class="root-div">
  <div class="id-title">柏慧嫁衣</div>
  <div>
    <img v-for="(item, index) in images" :key="item" :src="item" @click="showImage(index)"/>
  </div>
<van-image-preview v-model:show="show" :images="images" :start-position="index" @change="onChange">
  <template v-slot:index>第{{ index + 1 }}页</template>
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
  display: flex;
  padding: 10px 0;
  flex-wrap: wrap;
  justify-content: space-around;
  img {
    margin: 10px 1%;
    width: 30%;
  }
}
.van-image-preview {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    transform: none;
}

</style>
