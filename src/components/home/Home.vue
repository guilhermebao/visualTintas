<template>
  <div class="home">
    <div class="carrousel-area">
      <Carousel :perPage="1" :loop="true" :centerMode="true">
        <Slide
          ><img src="https://picsum.photos/1501/600" class="carousel-image" alt=""
        /></Slide>
        <Slide
          ><img src="https://picsum.photos/1502/600" class="carousel-image" alt=""
        /></Slide>
        <Slide
          ><img src="https://picsum.photos/1503/600" class="carousel-image" alt=""
        /></Slide>
        <Slide
          ><img src="https://picsum.photos/1504/600" class="carousel-image" alt=""
        /></Slide>
      </Carousel>
    </div>
    <div class="publicity-area">
      <h1>Vittin, a nossa Moeda Virtual</h1>
      <span>Para facilitar suas compras Futuras. Adquira o valor que necessitar e nossa equipe de vendas irá gerar seu pedido conforme sua necessidade. Após efetuar o pagamento iremos gerar crédito em seu nome para você utilizar conforme sua necessidade.</span>
    </div>
    <button>Compre Vittin</button>
    <div class="product-area">
      
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Home",
  components: { Carousel, Slide },

  data: function () {
    return {
      data: [],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style>
.carousel-image {
  width: 100%;
}
</style>
