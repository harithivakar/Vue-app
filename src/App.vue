<template>
  <NavBar :numberOfItems="numberOfItems" />
  <router-view
    :shoppingCart="shoppingCart"
    :products="products"
    :userInfo="userInfo"
    @addToCart="addToCart"
    @userInfoSaved="updateUserInfo"
  ></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue';
import products from './pages/products';

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      shoppingCartTitles: [],
      products,
      userInfo: { name: '', age: 0, address: '' }
    }
  },
  computed: {
    shoppingCart() {
      return this.shoppingCartTitles.map(title => {
        return this.products.find(p => p.title === title)
      });
    },
    numberOfItems() {
      return this.shoppingCartTitles.length;
    }
  },
  methods: {
    addToCart(title) {
      this.shoppingCartTitles.push(title);
      console.log(this.shoppingCartTitles);
    },
    updateUserInfo(name, age, address) {
        this.userInfo = {name, age, address};
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
