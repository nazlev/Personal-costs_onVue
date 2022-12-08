<template>
  <div class="home">
    <CompList/>
    <CompPage/>
  </div>
</template>

<script>
import CompList from '@/components/CompList.vue';
import CompPage from '@/components/CompPage.vue';


export default {
  name: 'HomeView',
  components: {
    CompList,
    CompPage
},


}
</script>
