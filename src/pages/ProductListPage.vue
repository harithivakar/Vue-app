<template>
  <h2>Available items:</h2>
  <div v-for="product in products" :key="product.title">
    <router-link :to="`/products/${product.title}`">
      <h3>{{ product.title }}</h3>
    </router-link>
    <p>{{ product.price }}</p>
    <button @click="addToCart(product.title)">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "ProductListPage",
  props: ['products'],
  emits: ['addToCart'],
  methods: {
    addToCart(title) {
        this.$emit('addToCart', title)
    }
  }
};
</script>
