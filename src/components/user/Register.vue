<template>
  <div class="register">
    <div class="container-fluid input-grupo pt-5">
      <PageTitle main="Cadastre-se" />
      <div class="register-form form-group">
        <input
          class="form-control input__ mb-4"
          type="text"
          v-model="entity.cpfcnpj"
          placeHolder="CPF ou CNPJ"
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
      <div class="register-buttons mb-5">
        <button class="bt-vittin shadow" style="width: 240px; margin-top: 90px">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
export default {
  name: "Register",
  components: { PageTitle },
  data: function () {
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
        clientCode: "",
      },
    };
  },
};
</script>

<style>
.register-buttons {
  display: flex;
  justify-content: center;
}

.input__ {
  border: 0;
  border-bottom: 1px solid #cccccc;
  border-radius: 0rem;
}

.input-grupo {
  padding-left: 22rem;
  padding-right: 22rem;
}

@media (max-width: 768px) {
  .form-control {
    font-size: 13px;
  }
  .input-grupo {
    padding-left: 15px;
    padding-right: 15px;
  }
}



</style>