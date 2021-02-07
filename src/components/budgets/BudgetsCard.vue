<template>
  <div class="budgets-card">
    <accordion>
      <accordion-item>
        <template slot="accordion-trigger">
          <div class="row">
            <h5 class="col my-auto tl16">Pedido nº {{ number }}</h5>
            <h6 class="col my-auto card-subtitle mb-2 tl-sb16">{{ date }}</h6>
            <div class="col">
              <vue-step
                :now-step="order"
                style-type="style2"
                :step-list="['Pendente', 'Em análise', 'Cotado', 'Aprovado']"
                active-color="black"
              ></vue-step>
            </div>
          </div>
        </template>
        <template slot="accordion-content">
          <div class="row">
            <img class="border" style="margin-left: -24px; margin-bottom: 22px;" :src="entity.img" alt="image" />
            <div class="col-6 mt-4 ml-5">
              <h5 class="tl16">{{ entity.name }}</h5>
              <h6 class="tl-sb16">
                {{ entity.description }}
              </h6>
            </div>
            <div class="col text-right my-auto">
              <h6 class="mb-2 tl-sb16 mr-4">Quantidade: 10</h6>
              <h6
                v-if="order >= 3"
                class="mb-2"
                :class="{ 'font-weight-bold': order == 3 }"
              >
                Total: R$100,00
              </h6>
            </div>
          </div>

          <div v-if="order == 3">
            <hr class="mt-4 mb-4" />
            <span class="font-weight-bold">Forma de pagamento</span>
            <div class="mt-4 row">
              <div class="btn-group col-3">
                <button class="btn font-weight-bold btn-outline-dark mr-4">
                  Pagar com Vittin
                </button>
                <button class="btn font-weight-bold btn-outline-dark">
                  Pagar na Loja
                </button>
              </div>
              <div class="col">
                <button class="bt-vittin shadow float-right">Aprovar</button>
              </div>
            </div>
          </div>

          <div class="w-auto mt-4 text-right" v-if="order == 4">
            <span class="font-weight-bold">Forma de pagamento</span>: Pagar com Vittin
          </div>
        </template>
      </accordion-item>
    </accordion>
  </div>
</template>

<script>
import Accordion from "../extra/accordion/accordion";
import AccordionItem from "../extra/accordion/accordion-item";
import vueStep from "vue-step";

export default {
  name: "BudgetsCard",
  props: ["number", "date", "order"],
  methods: {},
  components: {
    Accordion,
    AccordionItem,
    vueStep
  },
  data() {
    return {
      entity: {
        name: "Tinner",
        description:
          "Lorem Ipsum is simply dummy text of the printing.",
        img:
          "https://cdn.leroymerlin.com.br/products/tinta_latex_economica_plural_18l_89486915_5868_300x300.jpeg"
      }
    };
  }
};
</script>

<style>
.budgets-card {
  background-color: #ffffff;
  /* height: 130px; */
  margin-top: 15px;
  border-radius: 3px;
  margin-bottom: 15px;
}

.budgets-card img {
  max-width: 130px;
  max-height: 130px;
}

.tl16 {
  font-size: 16px;
}

.tl-sb16 {
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  color: #4A4A4A;
}

.v-step-item-label {
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  color: #4A4A4A;
}
</style>