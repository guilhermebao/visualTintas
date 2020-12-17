<template>
  <div class="company">
    <PageTitle main="Quem somos" />
    <div align="center">
      <img src="https://picsum.photos/900/300" alt="IMAGEM EMPRESA" />
    </div>
    <div class="weare-area">
      <p>
        A VISUAL TINTAS é uma Loja moderna, que oferece um serviço agil e sério,
        com um sistema de preparação de infinitas cores automotivas nacionais e
        importadas, aliada ainda à qualidade e tecnologia dos produtos de
        fornecedores conceituados.
      </p>
      <p>
        Fundada em 1991, com o nome de LOJA DOS REPAROS,focando alinha de
        pequenos reparos residenciais e ferramentas em linha geral. esta sempre
        visando a satisfação dos seus clientes e acompanhando a evolução do
        mercado e a necessidade da clientela.
      </p>
      <p>
        Em meados de 1997 nasceu a VISUAL TINTAS, visando atender a necessidade
        de uma clientela exigente na area de repintura automotiva.
      </p>
      <p>
        Desde de 2002 utilizamos o PPQ-Programa de Padronizaqäo e Qualidade como
        forma de maior integracäo da EQUIPE, o que se tornou um grande
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
        Automotivas e Complementos de Qualidade com Alto Padräo de Atendimento.
        Buscando Sempre a Satisfacão Geral."
      </p>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
export default {
  name: "Company",
  components: { PageTitle },
  data: function() {
    return {};
  }
};
</script>

<style>
.weare-area {
  width: 900px;
  margin: 40px auto
}
</style>