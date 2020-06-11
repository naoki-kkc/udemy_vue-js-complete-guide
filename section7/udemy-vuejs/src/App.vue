<template>
  <div>
    <LikeHeader></LikeHeader>
    <p>{{num}}</p>
    <LikeNum v-bind:num="num"></LikeNum>
    <LikeNum :num="num"></LikeNum>
  </div>
</template>

<script>

import LikeHeader from "./components/LikeHeader.vue";

export default{
  data(){
    return {
      num: 14,
    }
  },
  components:{
    // コンポーネントのローカル登録
    LikeHeader: LikeHeader, // 定義はパスカルケースで行っているが、template内はパスカルケース/ケバブケースを問わない(キャメルケースは想定していないので書かないこと)
  }
}
</script>

<style scoped>/* scopedをつけることでApp.vueのみに適用する */
  div{
    border: 1px solid red;
  }
</style>