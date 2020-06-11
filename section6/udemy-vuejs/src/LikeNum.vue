<template>
    <div>
        <p>いいね({{num}})</p>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
export default{
    data(){
        return {
            num: 100,
        };
    },
    methods: {
        increment(){
            this.num += 1;
        }
    }
}
</script>
