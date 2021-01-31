<template>
  <div class="company">
    <div class="container-fluid pt-2">
      <PageTitle main="Contato" />
      <div class="row">
        <div class="col-6" style="padding-left: 80px; margin-top: 50px">
          <input class="input-contact w-100 p-1 pl-2 mb-2" placeholder="Nome" />
          <input
            class="input-contact w-100 p-1 pl-2 mb-2"
            placeholder="Telefone"
          />
          <input
            class="input-contact w-100 p-1 pl-2 mb-2"
            placeholder="Email"
          />
          <input
            class="input-contact w-100 p-1 pl-2 mb-2"
            placeholder="Assunto"
          />
        </div>
        <div class="col-6 textarea-contact pl-1">
          <textarea rows="7" cols="50" class="w-100">
          Mensagem
          </textarea>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center pt-4" style="margin-bottom: 90px">
          <button class="bt-vittin shadow">Enviar</button>
        </div>
      </div>

      </div>

      <div class="col-sac">
        <div class="col-12">
          <PageTitle main="Dúvidas Frequentes" />
        </div>
        <div class="col-12">
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
              <a class="nav-link active btn-sac pt-sac" href="#">Como Comprar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active btn-sac" href="#"
                >Política de Privacidade</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active btn-sac pt-sac" href="#"
                >Polí­tica de Trocas</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active btn-sac" href="#"
                >Polí­tica de Entrega</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active btn-sac" href="#"
                >Polí­tica de Segurança</a
              >
            </li>
          </ul>
        </div>

        <div class="weare-area text-p text-p-mobile txt-fs-16">
        <p class="text-block shadow">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          
        </p>
      </div>
      </div>

      


      <div class="container-fluid pt-2">
      <PageTitle main="Contato" />
      <div class="row">
        <div class="col-6" style="padding-left: 80px; margin-top: 50px">
          <input class="input-contact w-100 p-1 pl-2 mb-2" placeholder="Nome" />
          <input
            class="input-contact w-100 p-1 pl-2 mb-2"
            placeholder="Telefone"
          />
          <input
            class="input-contact w-100 p-1 pl-2 mb-2"
            placeholder="Email"
          />
          <input
            class="input-contact w-100 p-1 pl-2 mb-2"
            placeholder="Assunto"
          />
        </div>
        <div class="col-6 textarea-contact pl-1">
          <textarea rows="7" cols="50" class="w-100">
          Mensagem
          </textarea>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center pt-4" style="margin-bottom: 90px">
          <button class="bt-vittin shadow">Enviar</button>
        </div>
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
    font-family: "Raleway", sans-serif;
    font-size: 13px;
  }
}
.input-contact {
  font-family: "Raleway", sans-serif;
  color: #001023;
  font-size: 14px;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: #eaeaea;
}
.input-contact {
  font-family: "Raleway", sans-serif;
  color: #001023;
  font-size: 14px;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: #eaeaea;
}
.textarea-contact {
  font-family: "Raleway", sans-serif;
  color: #001023;
  font-size: 14px;
  padding-right: 80px;
  margin-top: 50px;
}
input[type="text"],
textarea {
  border-style: inset;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: #eaeaea;
}

.btn-sac {
  height: 95px;
  width: 194px;
  padding-top: 22px;
  margin-bottom: 15px;
  text-transform: uppercase;
  background-color: #001023 !important;
}

.pt-sac {
  padding-top: 36px;
}

.txt-fs-16 {
  font-size: 16px;
}

.col-sac {
  background-color: #f3f5f9;
  padding-top: 40px;
  padding-bottom: 70px;
}

.text-block {
  background-color: #fff;
  padding: 60px;
}
</style>