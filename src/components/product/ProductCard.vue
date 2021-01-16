<template>
  <div class="product-card mx-3">
    <div class="item-card card text-center">
      <a href="/product/1" class="card-body">
        <img class="card-img-top" :src="image" alt="image" />
        <h5 class="card-title">{{ main }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ sub }}</h6>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["image", "main", "sub"]
};
</script>

<style>
.product-card {
  min-width: 247px;
  height: 302px;
}

.product-card a {
  color: #001023;
  text-decoration: none;
}

.product-card img {
  max-width: 150px;
}

.item-card {
  box-shadow: 10px 11px 11px -4px rgba(0,0,0,0.29);
  border-radius: 2%;
}
</style>