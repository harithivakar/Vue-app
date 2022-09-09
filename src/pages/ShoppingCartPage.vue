<template>
  <h1>Shopping cart page</h1>
  <div v-for="product in shoppingCart" :key="product.title">
    <router-link :to="`/products/${product.title}`">
      <h3>{{ product.title }}</h3>
    </router-link>
    <p>{{ product.price }}</p>
  </div>
</template>

<script>
export default {
  name: "ShoppingCartPage",
  props: ["shoppingCart"],
};
</script>
