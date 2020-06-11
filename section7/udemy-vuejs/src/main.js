import Vue from 'vue'
import App from './App.vue' // <= renderに渡す「App」はコレ。「単一ファイルコンポーネント」と呼ばれるもの。
import LikeNum from './components/LikeNum.vue'

Vue.config.productionTip = false

// コンポーネントのグローバル登録
Vue.component('LikeNum', LikeNum)

new Vue({
  render: h => h(App),
  // ↓ これと同じ
  // render: function(h){
  //   return h(App);
  // }
}).$mount('#app')
