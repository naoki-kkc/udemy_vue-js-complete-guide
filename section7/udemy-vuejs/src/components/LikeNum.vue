<template>
    <div>
        <p>いいね({{halfnum}})</p>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
export default{
    props: ['totalNumber'],
    computed:{
        halfnum(){
            return this.totalNumber / 2;
        }
    },
    methods: {
        increment(){
            this.num += 1;
        }
    }
}
</script>

<style scoped>/* scopedをつけることでLikeNum.vueのみに適用する */
  div{
    border: 1px solid blue;
  }
</style>