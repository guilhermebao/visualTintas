<template>
  <div class="">
    <PageTitle main="Meus Orçamentos" />
    <div class="budgets">
      <div class="_img-card">
        <h5 class="tl16 mt-3 ml-4 mb-4">Deseja enviar alguma imagem?</h5>
        <div class="block-img mx-4">
          <img class="my-4" src="../../assets/_image.png" />
        </div>
      </div>
      <div class="_input-grupo pt-1">
        <BudgetsCard
          v-for="(budget, index) in budgets"
          :key="index"
          :number="budget.number"
          :order="budget.order"
          :date="budget.date"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import BudgetsCard from "./BudgetsCard";

export default {
  components: { PageTitle, BudgetsCard },
  name: "BudgetList",
  props: [],
  data: function() {
    return {
      budgets: [
        {
          order: "1",
          date: "04/05/1998",
          number: "0001"
        },
        {
          order: 2,
          date: "00/00/2020",
          number: "0002"
        },
        {
          order: 3,
          date: "02/04/2001",
          number: "0003"
        },
        {
          order: "4",
          date: "00/00/0000",
          number: "0004"
        }
      ]
    };
  }
};
</script>

<style>
.budgets {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f3f5f9;
}
.budget-image {
}

._input-grupo {
  padding-left: 80px;
  padding-right: 80px;
}

@media (max-width: 768px) {
  ._input-grupo {
    padding-left: 15px;
    padding-right: 15px;
  }
}

.bt-budget {
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  height: 60px;
  border-radius: 4px;

  width: 240px;
  border: 0;
  transition: 0.3s;
}

._on {
  color: #fff;
  background-color: #097a7f;
}

._off {
  color: #001023;
  background-color: #fff;
}

._img-card {
  background-color: #ffffff;
  height: 204px;
  margin-top: 15px;
  border-radius: 3px;
  margin-left: 80px;
  margin-right: 80px;
  cursor: pointer;
}

.block-img {
  background-color: #F3F5F9;
  margin: 10px;
  text-align: center;
  border-width: 1.5px;
  border-radius: 3px;
  border-style: dashed;
  border-color: #ABABAB;
}
</style>