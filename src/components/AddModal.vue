<template>
<transition name="fade">
    <div v-if="isShown" class="modal">
        <div class="modal__body">
            Window
        </div>
        <button class="close-btn" v-on:click="$modal.hide('add')">Close</button>
    </div>
</transition>
</template>

<script>
    export default {
        name: 'AddModal',
        data: () => ({
            isShown: false,
            id: 'add'
        }),
        methods: {
            show(id) {
                console.log('show', id, this.id)
                if(id == this.id) {
                    this.isShown = true
                }
            },
            hide(id) {
                if(id == this.id) {
                    this.isShown = false
                }
            }
        },
        mounted() {
            this.$modal.EventBus.$on('modalShow', this.show),
            this.$modal.EventBus.$on('modalHide', this.hide)
        }
    }
</script>


<style lang="scss">
.modal {
    border: 1px solid #ccc;
    width: 200px;
    margin: 0 auto;
    &__body {
        padding: 20px;
    }
}
</style>
