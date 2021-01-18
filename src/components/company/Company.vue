<template>
  <div class="company">
    <div class="container-fluid pt-2">
      
      <PageTitle main="Quem somos" />

      <div align="center">
        <img class="img-empresa" src="../../assets/banner_2.png" alt="IMAGEM EMPRESA" />
      </div>
      <div class="weare-area text-p text-p-mobile">
        <p>
          A VISUAL TINTAS é uma Loja moderna, que oferece um serviço agil e
          sério, com um sistema de preparação de infinitas cores automotivas
          nacionais e importadas, aliada ainda à qualidade e tecnologia dos
          produtos de fornecedores conceituados.
        </p>
        <p>
          Fundada em 1991, com o nome de LOJA DOS REPAROS,focando alinha de
          pequenos reparos residenciais e ferramentas em linha geral. esta
          sempre visando a satisfação dos seus clientes e acompanhando a
          evolução do mercado e a necessidade da clientela.
        </p>
        <p>
          Em meados de 1997 nasceu a VISUAL TINTAS, visando atender a
          necessidade de uma clientela exigente na area de repintura automotiva.
        </p>
        <p>
          Desde de 2002 utilizamos o PPQ-Programa de Padronizaqäo e Qualidade
          como forma de maior integracäo da EQUIPE, o que se tornou um grande
          diferencial entre tantas outras empresas do ramo.
        </p>
        <p>
          A VISUAL TINTAS trabalha com seriedade, sempre buscando oferecer para
          seus clientes produtos da melhor qualidade. para isso contamos com uma
          Equipe de colaboradores preparados para melhor atendimento aos seus
          consumidores.
        </p>
        <p>MISSÄO:</p>
        <p>
          "A Razäo de Existir da Visual Tintas é Repassar aos Clientes Tintas
          Automotivas e Complementos de Qualidade com Alto Padräo de
          Atendimento. Buscando Sempre a Satisfacão Geral."
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
export default {
  name: "Company",
  components: { PageTitle },
  data: function () {
    return {};
  },
};
</script>

<style>
.weare-area {
  /* width: 900px; */
  padding-left: 80px;
  padding-right: 80px;
  margin: 50px auto;
}
@media (max-width: 768px) {
  .img-empresa {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }
  .weare-area {
    padding-left: 15px;
    padding-right: 15px;
  }
  .text-p-mobile {
    font-size: 13px;
  }
}
</style>