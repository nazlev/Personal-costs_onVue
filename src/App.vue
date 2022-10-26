<template>
  <div id="app">
    <CompList :data="list"></CompList>
    <CompPage></CompPage>
    <CompForm v-on:add="onAdd"></CompForm>
  </div>
</template>

<script>
import CompList from './components/CompList.vue';
import CompForm from './components/CompForm.vue';
import CompPage from './components/CompPage.vue';

export default {
  name: 'App',
  components: {
    CompList,
    CompForm,
    CompPage
},
data() {
    return {
      list: []
    }
  },
methods: {
  onAdd({x, y, z}) {
      this.list.push({id: this.list.length, date: x, name: y, value: z});
    }
},
mounted() {
  this.list = [
        {id: '#', date: 'Date', name: 'Category', value: 'Value'},
        {id: 1, date: '23.03.2020', name: 'Food', value: 169},
        {id: 2, date: '24.03.2020', name: 'Transport', value: 360},
        {id: 3, date: '25.03.2020', name: 'Food', value: 530},
        {id: 4, date: '26.03.2020', name: 'Housing', value: 273},
        {id: 5, date: '27.03.2020', name: 'Healthcare', value: 545},
        {id: 6, date: '28.03.2020', name: 'Housing', value: 502},
        {id: 7, date: '29.03.2020', name: 'Closing', value: 692},
        {id: 8, date: '30.03.2020', name: 'Food', value: 545},
        {id: 9, date: '01.04.2020', name: 'Housing', value: 339},
        {id: 10, date: '02.04.2020', name: 'Closing', value: 912}
      ]
}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
