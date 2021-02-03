<template>
  <div class="">
    <PageTitle main="Meus Orçamentos" />
    <div class="budgets">
      <div class="_input-grupo pt-4">
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
</style>