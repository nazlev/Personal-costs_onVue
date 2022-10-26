 <template>
    <div class="pagination">
        <font-awesome-icon icon="fa-solid fa-angle-left" />
        <button v-for="num, idx of numbers" :key="idx" class="btn">{{ num }}</button>
        <font-awesome-icon icon="fa-solid fa-angle-right" />
    </div>
 </template>

 <script>
 export default {
    name: 'CompPage',
    data() {
        return {
            numberPag: 1,
            numbers: [
                1,
                2,
                3
            ]
        }
    }
 }
</script>

<style lang="scss">
    .pagination {
        margin: 0 auto;
        width: 300px;
        border: 1px solid #ccc;
    }

    .btn {
        border: none;
        background-color: white;
    }
</style>