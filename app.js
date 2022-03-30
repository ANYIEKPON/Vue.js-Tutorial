const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showbooks: true,
            books: [
                {title: 'paradise at home', author: 'pattrick ruffos', img: 'assets/images(1).jpg', isFav: true},
                {title: 'paradise at home', author: 'pattrick ruffos', img: 'assets/images(2).jpg', isFav: false},
                {title: 'paradise at home', author: 'pattrick ruffos', img: 'assets/images(3).jpg', isFav: true}
            ]
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
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleisFav(book) {
            book.isFav = !book.isFav
        }
    }
 });

app.mount('#app')