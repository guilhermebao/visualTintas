<template>
  <div class="register">
    <div class="container-fluid input-grupo pt-5">
    <PageTitle main="" />
    <div class="externa pt-5">
        <div class="line mb-4"></div>
      </div>
    <p class="p40 pb-5">Minha Conta</p>
    <div class="register-form form-group">
      <input
        class="form-control input__ mb-4"
        type="text"
        v-model="entity.cpfcnpj"
        placeHolder="CPF"
      />
      <input
        class="form-control input__ mb-4"
        type="text"
        v-model="entity.name"
        placeHolder="Nome Completo ou Razão Social"
      />
      <input
        class="form-control input__ mb-4"
        type="text"
        v-model="entity.email"
        placeHolder="E-mail"
      />
      <input
        class="form-control input__ mb-4"
        type="text"
        v-model="entity.postalcode"
        placeHolder="CEP"
      />
      <input
        class="form-control input__ mb-4"
        type="text"
        v-model="entity.street"
        placeHolder="Rua"
      />
      <div class="form-row">
        <input
          class="col form-control input__ mb-4"
          type="text"
          v-model="entity.number"
          placeHolder="Número"
        />
        <input
          class="col form-control input__ mb-4"
          type="text"
          v-model="entity.complement"
          placeHolder="Complemento"
        />
      </div>
      <input
        class="form-control input__ mb-4"
        type="text"
        v-model="entity.neighborhood"
        placeHolder="Bairro"
      />
      <div class="form-row">
        <select
          class="col form-control input__ mb-4"
          type="text"
          v-model="entity.state"
          placeHolder="Estado"
        >
            <option value="" disabled selected>Estado</option>
        </select>
        <select
          class="col form-control input__ mb-4"
          type="text"
          v-model="entity.city"
        >
        <option value="" disabled selected>Cidade</option>
        </select>
      </div>
      <input
        class="form-control input__ mb-4"
        type="text"
        v-model="entity.clientCode"
        placeHolder="Código do Cliente"
      />
    </div>
    <div class="register-buttons">
        <button>Cadastrar</button>
    </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
export default {
  name: "Register",
  components: { PageTitle },
  data: function() {
    return {
      entity: {
        cpfcnpj: "",
        name: "",
        email: "",
        postalCode: "",
        street: "",
        number: null,
        complement: "",
        neighborhood: "",
        state: "",
        city: "",
        clientCode: ""
      }
    };
  }
};
</script>

<style>

.register-buttons {
    display: flex;
    justify-content: center;
}

.input__ {
  border: 0;
  border-bottom: 1px solid #CCCCCC;
  border-radius: 0rem;
}

.input-grupo {
  padding-left: 22rem;
  padding-right: 22rem;
}
</style>