const app = Vue.createApp({
    data() {
        return {
            showbooks: true,
            title:'The final Movie',
            author: 'Brandon Sanderson',
            age: 45
        }
    },

    methods: {
        togglebutton() {
            this.showbooks = !this.showbooks
        },
        handleEvent(e, data) {
            console.log(e, e.type);
            if(data){
                console.log(data);
            }
        }
    }
 });

app.mount('#app')