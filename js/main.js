const Counter = {
    data() {
        return {
           title: '',
           price: '',
           count: '',

           order: [
            // {
            //     id: 1,
            //     title: 'Good 1',
            //     price: 200,
            //     count: 2
            // },
           ]
        }
      },
      methods: {
        addProduct(e) {
            e.preventDefault();
            
            this.order.push({
                id: Date.now(),
                title: this.title,
                price: Number(this.price),
                count: Number(this.count)
            });

            this.title = '';
            this.price = '';
            this.count = '';
        }
      },
      computed: {
        totalPrice() {
            let totalPrice = 0;
            for (const product of this.order) {
                totalPrice += product.price * product.count;
            }
            return totalPrice
        },
        sortOrder() {
            return this.order.sort((a, b) => b.price - a.price);
        }
      }
    }

Vue.createApp(Counter).mount('#app');