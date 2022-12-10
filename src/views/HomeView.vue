<template>
  <div class="home">
    <CompList />
    <CompPage />
    <button v-on:click="showModal">Добавить +</button>
    <AddModal />
  </div>
</template>

<script>
import CompList from '@/components/CompList.vue';
import CompPage from '@/components/CompPage.vue';
import AddModal from '@/components/AddModal.vue';

export default {
  name: 'HomeView',
  components: {
    CompList,
    CompPage,
    AddModal
  },
  methods: {
    showModal() {
      this.$modal.show('add')
    }
  }
}
</script>
