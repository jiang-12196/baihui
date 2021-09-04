import { createApp } from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue3-lazyload'
import { Image as VanImage } from 'vant';
import { ImagePreview } from 'vant';

createApp(App).use(ImagePreview).mount('#app')
