import Vue from 'vue'
import Messages from './message.vue'

new Vue({
    el: '#app',
    components: {
        Messages
    },
    data() {
        return {
            vueMessage: 'Message from Vue'
        }
    }
})