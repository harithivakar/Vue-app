<template>
  <div v-if="productFound">
    <h1>{{ product.title }}</h1>
    <h3>{{ product.price }}</h3>
    <p>{{ product.description }}</p>
    <button @click="addToCart">Add to cart</button>
  </div>
  <div v-if="!productFound">
    <h1>Oops... we couldn't find that product</h1>
  </div>
</template>

<script>
export default {
  name: "ProductDetailPage",
  props: ["products"],
  computed: {
    product() {
      return this.products.find(
        (prod) => `${prod.title}` === `${this.$route.params.title}`
      );
    },

    productFound() {
      return !!this.product;
    },
  },
  emits: ["addToCart"],
  methods: {
    addToCart() {
      this.$emit("addToCart", this.$route.params.title);
    },
  },
};
</script>
