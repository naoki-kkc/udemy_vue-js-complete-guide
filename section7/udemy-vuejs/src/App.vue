<template>
  <div>
    <LikeHeader></LikeHeader>
    <p>{{num}}</p>
    <!-- 属性名をキャメルケースで書く -->
    <LikeNum v-bind:totalNumber="num" test-props="test" v-on:increment="num = $event"></LikeNum>
    <!-- 属性名をケバブケースで書く(こっちの方が良い) -->
    <LikeNum v-bind:total-number="num"  v-on:increment="incrementNum($event)"></LikeNum>
    <!-- totalNumberを指定していないのでデフォルトを使用する -->
    <LikeNum></LikeNum>
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
  },
  methods:{
    incrementNum(val){
      this.num = val;
    }
  }
}
</script>

<style scoped>/* scopedをつけることでApp.vueのみに適用する */
  div{
    border: 1px solid red;
  }
</style>