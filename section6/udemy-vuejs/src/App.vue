<template>
  <div>
    
    <!-- [vuecli]パスカルケースで書く -->
    <!-- <LikeHeader></LikeHeader> -->

    <!-- [vuecli]ケバブケースでも書ける -->
    <like-header></like-header>
    
    <LikeNum></LikeNum>
  </div>
</template>

<script>

import LikeHeader from "./components/LikeHeader.vue";

export default{
  components:{
    // コンポーネントのローカル登録
    LikeHeader: LikeHeader, // 定義はパスカルケースで行っているが、template内はパスカルケース/ケバブケースを問わない(キャメルケースは想定していないので書かないこと)
  }
}
</script>

<style scoped>
  div{
    border: 1px solid red;
  }
</style>