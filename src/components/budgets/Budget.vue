<template>
  <div class="">
    <PageTitle main="Orçamento" />
    <div class="budget">
      <div class="input-grupo pt-4">
        <BudgetCard
          v-for="(budget, index) in budgets"
          :key="index"
          :main="budget.title"
          :description="budget.description"
          :image="budget.image"
          v-model="budget.amount"
        />

        <div class="md-form">
          <label for="form7">Observações</label>
          <textarea
            id="form7"
            class="md-textarea form-control"
            rows="3"
          ></textarea>
        </div>

        <div>
          <button>
            Adicionar produtos
          </button>
          <button>
            Adicionar produto Customizado
          </button>
          <button>
            Finalizar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import BudgetCard from "./BudgetCard";

export default {
  components: { PageTitle, BudgetCard },
  name: "Budget",
  props: [],
  data: function() {
    return {
      budgets: [
        {
          title: "Tinta",
          amount: 1,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          image:
            "https://cdn.leroymerlin.com.br/products/tinta_latex_economica_plural_18l_89486915_5868_300x300.jpeg"
        },
        {
          title: "Tinner",
          amount: 1,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          image:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTnRtY-ol6oRQUr9uNXi1uzi6ne7YmPPbulIGCB624_Ew1g5PG_2lXMiBP4vWlrDQ_fwfiOODKdL_QaSXiq8c-Qi8vb-BG7&usqp=CAE"
        },
        {
          title: "Pincel",
          amount: 1,
          description: "Cerda Branca",
          image:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSEoKHVJltjXHvCWQb83FzN15OYQr2qqcPfEiGaTy_27DANmvlX6mJ0yOGjV2KakHZf7KjXqxnQVdGJWn8WC_fZPETWglCmTHU24n0TalKt8k34kh21Ex9uZlNT&usqp=CAE"
        },
        {
          title: "Cola",
          amount: 1,
          description: "250ml",
          image:
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQcVHFpSNNmRtUKVbbm1ekvSlQDJfGVAPZwnLS3t5ZciUkz9_7epBQgD-DnTJRBuzwWUfM2_DpcQi5ZDeZBXFdZMqMd9KU6gFrsr8dWaiGZZpe3EkqFIRLo84I&usqp=CAE"
        }
      ]
    };
  }
};
</script>

<style>
.budget {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin-top: 40px;
  margin-bottom: 40px; */
  background-color: #f3f5f9;
}
.budget-image {
}
</style>