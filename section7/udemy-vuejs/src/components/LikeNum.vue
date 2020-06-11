<template>
    <div>
        <p>いいね({{halfnum}})</p>
        <p v-if="testProps != ''">{{testProps}}</p>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
export default{
    
    // propsを配列で指定
    // props: ['totalNumber', 'testProps],
    
    // propsをオブジェクトで指定
    props :{
        totalNumber: {
            type:     Number,
            default:  10
        },
        testProps: {
            type: String,
        }
    },

    computed:{
        halfnum(){
            return this.totalNumber / 2;
        }
    },
    methods: {
        increment(){
            this.$emit("increment", this.totalNumber + 1);
        }
    }
}
</script>

<style scoped>/* scopedをつけることでLikeNum.vueのみに適用する */
  div{
    border: 1px solid blue;
  }
</style>