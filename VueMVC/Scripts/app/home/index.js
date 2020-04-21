import Vue from 'vue'
import FirstComponent from './footer.vue'
import heading from './heading.vue'
import helloworld from './helloWorld.vue'

new Vue({
    el: '#app',
    components: {
        FirstComponent,
        heading, 
        helloworld
    },
    data(){
        return {
            vueMessage: 'Message from Vue'
        }
    },
    methods: {
        toggleModal (){
            this.$refs.modal.open();
        }
    }
})