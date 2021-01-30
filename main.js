const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeFromCart(id) {
      const index = this.cart.lastIndexOf(id);
      this.cart = this.cart.filter((item, idx) => idx !== index);
    }
  }
});
