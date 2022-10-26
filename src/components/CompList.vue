<template>
    <div class="list">
      <div class="item" v-for="item of data" :key="item.id" >
        <span>{{ item.id }}</span>
        <span>{{ item.date }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.value }}</span>
      </div>
    </div>
</template>


<script>
export default {
    name: 'CompList',
    props: {
        data: {
            type: Array,
            default: [],
        }
    }
}
</script>

<style lang="scss">
.list {
    width: 500px;
    margin: 0 auto;
  }
  
  .item {
    display: grid;
    grid-template-columns: 50px 200px 180px 50px;
    border-bottom: 1px solid #ccc;
    padding: 20px 0 10px 0;
    font-size: 15px;
    text-align: left;
    &:last-child {
      margin-bottom: 20px;
    }
  }
</style>