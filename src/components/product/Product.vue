<template>
  <div class="product">
    <div class="input-grupo">
      <GoBack to="/product" name="Produtos" />
      <div class="row">
        <div class="product-image col-sm text-center border">
          <img
            src="https://cdn.leroymerlin.com.br/products/tinta_latex_economica_plural_18l_89486915_5868_300x300.jpeg"
            alt="aaa"
          />
        </div>
        <div class="col-sm offset-1">
          <div class="product-title">
            <h1>{{ entity.name }}</h1>
          </div>
          <div class="product-description">
            <p>{{ entity.description }}</p>
          </div>
          <button class="btn btn-light">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            Adicionar ao Orçamento
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoBack from "../extra/GoBack";

export default {
  components: { GoBack },
  name: "Product",
  props: [],
  data: function() {
    return {
      entity: {
        name: "Tinner",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
    };
  }
};
</script>

<style>
.product {
  margin-top: 40px;
  margin-bottom: 40px;
}
.product-image {
}
</style>