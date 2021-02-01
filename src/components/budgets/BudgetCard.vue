<template>
  <div class="budget-card">
    <div href="/product/1" class="row" @click="goToProduct">
      <img class="col 2" :src="image" alt="image" style="margin-left: 40px;" />

      <div class="col-6 budget-align-center">
        <h5 class="">{{ main }}</h5>
        <h6 class="text-nowrap text-truncate card-subtitle">
          {{ description }}
        </h6>
      </div>
      <div class="col-3 budget-align-center">
        <div class="row">
          <label class="col quant">Quantidade</label>
          <input class="col" type="text" />
        </div>
      </div>
      <div class="col-1 budget-align-center">
        <i class="fa fa-trash-o fa-2x" style="cursor: pointer;" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BudgetCard",
  props: ["image", "main", "description"],
  methods: {}
};
</script>

<style>
.budget-card {
  background-color: #ffffff;
  /* margin: 10px; */
  /* min-width: 247px; */
  border-radius: 4px;
  height: 167px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-top: 33px;
}

.budget-card a {
  color: #001023;
  text-decoration: none;
}

.card-title {
  font-size: 18px;
}

.card-subtitle {
  font-family: "Raleway", sans-serif;
  color: #4a4a4a;
  font-size: 16px;
}

.budget-card img {
  max-width: 130px;
}

.budget-align-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.quant {
  color: #4a4a4a;
  font-size: 16px;
  font-family: "Raleway", sans-serif;
}

@media (max-width: 768px) {
  .product-card {
    min-width: 145px;
    max-width: 145px;
    height: 178px;
    margin: 13px;
  }
}
</style>