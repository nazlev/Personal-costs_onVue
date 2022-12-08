<template>
<div class="form">
    <CompForm v-on:add="onAdd"/>
    <router-link to="/"><button class="rout">Home</button></router-link>
</div>
</template>


<script>
import CompForm from '@/components/CompForm.vue';
export default {
    name: 'FormView',
    components: {
        CompForm
    },
    methods: {
        onAdd({x, y, z}) {
            this.$store.getters.getList.push({id: this.$store.getters.getList.length + 1, date: x, name: y, value: z});
        }
},
}

</script>


<style lang="scss">
    .rout {
        border: none;
        border-radius: 5px;
        padding: 5px 30px;
        font-size: 15px;
        background-color: lightseagreen;
        color:black;
        cursor: pointer;
        margin-left: -240px;
        margin-top: 30px;
    }
</style>
