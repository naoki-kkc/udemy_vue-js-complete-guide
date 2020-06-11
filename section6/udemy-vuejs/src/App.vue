<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNum></LikeNum>
  </div>
</template>

<script>

import LikeHeader from "./components/LikeHeader.vue";

export default{
  components:{
    // コンポーネントのローカル登録
    LikeHeader: LikeHeader,
  }
}
</script>
