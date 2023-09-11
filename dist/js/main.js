const app = Vue.createApp({
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    methods: {
        
    },
});

//init custom events for components
const emitter = mitt();
//global propety for custom events
app.config.globalProperties.$test = emitter;
