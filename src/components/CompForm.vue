<template>
<div>
    <div class="formAdd" v-show="visible">
        <select class="formAdd__input formAdd__select"  v-model="newDesc"> 
            <option value="" disabled hidden>Payment Description</option>
            <option v-for="desc in getPayList" :value="desc">
                {{ desc }} 
            </option>
        </select>
        <input class="formAdd__input" type="text" placeholder="Payment amount" v-model="newValue"/>
        <input class="formAdd__input" type="text" placeholder="Payment date" v-model="newDate"/>
        <button class="formAdd__btn" v-on:click="add">ADD +</button>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'CompForm',
    data() {
        return {
            newDesc: '',
            newValue: '',
            newDate: '',
            visible: true
        }
    },
    computed: {
        ...mapGetters([
        'getPayList'
        ]) 
    },
    methods: {
        add() {
            this.$emit('add', { x: this.newDate, y: this.newDesc, z: this.newValue });
            this.newDate = '',
            this.newDesc = '',
            this.newValue = ''
        },
    },
}
</script>

<style lang="scss">
    .formAdd {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        width: 400px;
        &__input {
            margin-bottom: 10px;
            border: none;
            box-shadow: 0px 1px 5px 1px rgba(114, 111, 111, 0.2);
            padding: 5px 15px 5px 10px;
            width: 250px;
            height: 28px;
            padding-left: 10px;
            margin-left: -240px;
            &::placeholder {
                color: #ccc;
            }
        }
        &__btn {
            border: none;
            padding: 5px 50px;
            background-color: lightseagreen;
            color: white;
            cursor: pointer;
            margin-left: -240px;
        }
        &__select {
            padding:17px;
            width: 275px;
            color: black;
            margin-left: -240px;
        }
    }
    .formAddBtn{
        padding: 5px 30px;
        margin: 20px 0px;
        margin-left: -350px;
    }
</style>