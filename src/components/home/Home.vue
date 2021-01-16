<template>
  <div class="home">
    <div class="carrousel-area bg-grey-one">
      <Carousel :perPage="1" :loop="true" :centerMode="true">
        <Slide> <img src="https://picsum.photos/1501/600" class="carousel-image" alt=""/> </Slide>
        <Slide> <img src="https://picsum.photos/1502/600" class="carousel-image" alt=""/> </Slide>
        <Slide> <img src="https://picsum.photos/1503/600" class="carousel-image" alt=""/> </Slide>
        <Slide> <img src="https://picsum.photos/1504/600" class="carousel-image" alt="" /> </Slide>
      </Carousel>
    </div>
    <div class="container-fluid bg-grey-one">
      <div class="row align-items-center pb-8">
        <div class="col-md-6">
          <img
            src="../../assets/ilustracao-1.png"
            class="img-fluid float-right"
            alt=""
          />
        </div>
        <div class="col-md-6">
          <div class="pl-5">
            <h1 class="text-h1 pb-2-4r">Vittin, a nossa Moeda Virtual</h1>
            <p class="text-p pb-5">
              Para facilitar suas compras Futuras. Adquira o valor que
              necessitar e nossa equipe de vendas irá gerar seu pedido conforme
              sua necessidade. Após efetuar o pagamento iremos gerar crédito em
              seu nome para você utilizar conforme sua necessidade.
            </p>
            <button class="bt-vittin shadow">
              <img
                class="pr-10 img-hover"
                src="../../assets/imgVt-hover.png"
                alt=""
              />
              <img
                class="pr-10 img-default"
                src="../../assets/imgVt.png"
                alt=""
              />
              Compre Vittin
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid pt-5">
    
    <PageTitle main="Produto" />
      <div class="carrousel-area pt-5">
        <Carousel :perPage="1" :loop="true" :centerMode="true">
          <Slide>
            <img
              src="../../assets/produtos.png"

              alt=""
            />
          </Slide>
          <Slide>
            <img
              src="../../assets/produtos.png"

              alt=""
            />
          </Slide>
          <Slide>
            <img
              src="../../assets/produtos.png"

              alt=""
            />
          </Slide>
          <Slide>
            <img
              src="../../assets/produtos.png"

              alt=""
            />
          </Slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import PageTitle from "../template/PageTitle";

export default {
  name: "Home",
  components: { Carousel, Slide, PageTitle },

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
@media (max-width: 768px) {
  .carousel-image {
    width: auto !important;
  }
}

.carousel-image {
  width: 100%;
}

.text-p {
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  line-height: 1.9;
  color: #4a4a4a;
}

.text-h1 {
  font-size: 40px;
  font-weight: 700;
  color: #001023;
}

.bt-vittin {
  font-family: "Raleway Semibold", sans-serif;
  color: #fff;
  font-size: 22px;
  padding: 22px;
  border-radius: 8px;
  background-color: #097a7f;
  border: 0;
  transition: 0.3s;
}

.bt-vittin:hover {
  color: #001023;
  background-color: #f3f3f3;
}

.bt-vittin img.img-hover {
  display: none;
}
.bt-vittin:hover img.img-default {
  display: none;
}
.bt-vittin:hover img.img-hover {
  display: inherit;
}

.bg-grey-one {
  background: #f3f5f9;
}

.line {
  width: 99px;
  height: 3px;
  background: #59d38a;
}

.p40 {
  font-size: 40px;
  text-align: center;
  font-weight: 700;
}

.externa {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
