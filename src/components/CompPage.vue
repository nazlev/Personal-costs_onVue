 <template>
    <div class="pagination">
      <button @click="$store.commit('setPrevPage')"><font-awesome-icon icon="fa-solid fa-angle-left btnIcon" /></button>
      <button v-for="num, idx of numbers" :key="idx" class="btn">{{ num }}</button>
      <button @click="$store.commit('setNextPage')"><font-awesome-icon icon="fa-solid fa-angle-right btn" /></button>
    </div>
 </template>

 <script>
 export default {
    name: 'CompPage',
    data() {
        return {
            numbers: [
                1,
                2
            ]
        }
    }
 }
</script>

<style lang="scss">
    .pagination {
        margin: 0 auto;
        width: 495px;
        border: 1px solid #ccc;
        padding: 5px;
    }

    .btnIcon {
        border: none;
        outline: none;
    }

    .btn {
        border: none;
        background-color: white;
        &:hover {
            color: lightseagreen;
        }
    }
</style>