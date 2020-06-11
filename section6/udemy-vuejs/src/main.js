import Vue from 'vue'
import App from './App.vue' // <= renderに渡す「App」はコレ。「単一ファイルコンポーネント」と呼ばれるもの。


console.log(App);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // ↓ これと同じ
  // render: function(h){
  //   return h(App);
  // }
}).$mount('#app')
