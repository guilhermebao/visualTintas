<template>
  <div class="product">
    <div class="__product">
      <GoBack to="/product" name="Produtos" />
      <div class="row">
        <div class="product-image col-sm text-center border">
          <img
            src="https://cdn.leroymerlin.com.br/products/tinta_latex_economica_plural_18l_89486915_5868_300x300.jpeg"
            alt="aaa"
          />
        </div>
        <div class="col-sm _offset-1">
          <div>
            <h1 class="product-title">{{ entity.name }}</h1>
          </div>
          <div>
            <p class="product-description">{{ entity.description }}</p>
          </div>
          <button class="btn btn-light btn-shopping shadow-sm">
            <i class="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
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
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
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
.product-title {
  font-family: 'Poppins', sans-serif;
  color: #001023;
  font-size: 40px;
  font-weight: 600;
}

.product-description {
  font-family: "Raleway", sans-serif;
  color: #4A4A4A;
  font-size: 16px;  
}

.__product {
  padding-left: 15rem;
  padding-right: 15rem;
}

.btn-shopping {
  height: 72px;
  font-family: "Raleway", sans-serif;
  font-size: 22px;
  color: #001023;
  font-weight: 800;
}

._offset-1 {
  margin-left: 8.333333%;
}

@media (max-width: 768px) {
  .__product {
    padding-left: 15px;
    padding-right: 15px;
  }
  .product-image {
    margin-left: 22px;
    margin-right: 22px;
    margin-bottom: 25px;
  }
  .product-description {
    font-size: 13px;
    line-height: 2.3;  
  }
  ._offset-1 {
    margin-left: 12px;
    margin-right: 12px;
  }
  .btn-shopping {
    width: 100%;
    font-size: 14px;
    height: 51px;
  }
}

</style>