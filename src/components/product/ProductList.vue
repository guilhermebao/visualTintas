<template>
  <div class="Account">
    <PageTitle main="Produtos" />
    <div class="form-group row">
      <div class="input-group col">
        <input
          class="form-control border-right-0"
          type="text"
          v-model="search"
          placeHolder="Buscar produtos"
        />
        <span class="input-group-append bg-white border-left-0">
          <span class="input-group-text bg-transparent">
            <i class="fa fa-search" aria-hidden="true"></i>
          </span>
        </span>
      </div>

      <div class="col"></div>
      <select class=" form-control col" type="text" v-model="selected">
        <option selected>Todos os produtos</option>
        <option
          v-for="(category, index) in categories"
          :key="index"
          v-bind:value="category.value"
        >
          {{ category.text }}
        </option>
      </select>
    </div>

    <div class="products-area">
      <div class="container __flex align-items-center">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :main="product.title"
          :sub="product.subTitle"
          :image="product.image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import ProductCard from "./ProductCard";

export default {
  name: "ProductList",
  components: { PageTitle, ProductCard },
  data: function() {
    return {
      search: "",
      selected: "Todos os produtos",
      categories: [
        { text: "Acessórios", value: "A" },
        { text: "Colas", value: "B" },
        { text: "Complementos", value: "C" },
        { text: "Discos de Lixas", value: "C" },
        { text: "Fitas", value: "C" },
        { text: "Lixas", value: "C" },
        { text: "Massas", value: "C" }
      ],
      products: [
        {
          title: "Tinta",
          subTitle: "250ml",
          image:
            "https://cdn.leroymerlin.com.br/products/tinta_latex_economica_plural_18l_89486915_5868_300x300.jpeg"
        },
        {
          title: "Tinner",
          subTitle: "250ml",
          image:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTnRtY-ol6oRQUr9uNXi1uzi6ne7YmPPbulIGCB624_Ew1g5PG_2lXMiBP4vWlrDQ_fwfiOODKdL_QaSXiq8c-Qi8vb-BG7&usqp=CAE"
        },
        {
          title: "Pincel",
          subTitle: "Cerda Branca",
          image:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSEoKHVJltjXHvCWQb83FzN15OYQr2qqcPfEiGaTy_27DANmvlX6mJ0yOGjV2KakHZf7KjXqxnQVdGJWn8WC_fZPETWglCmTHU24n0TalKt8k34kh21Ex9uZlNT&usqp=CAE"
        },
        {
          title: "Cola",
          subTitle: "250ml",
          image:
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQcVHFpSNNmRtUKVbbm1ekvSlQDJfGVAPZwnLS3t5ZciUkz9_7epBQgD-DnTJRBuzwWUfM2_DpcQi5ZDeZBXFdZMqMd9KU6gFrsr8dWaiGZZpe3EkqFIRLo84I&usqp=CAE"
        }
      ]
    };
  }
};
</script>

<style>
.products-area {
  background-color: #f3f5f9;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.__flex{
  display: flex
}

@media (max-width: 375px) {
  .__flex{
  display: block
}
}
</style>