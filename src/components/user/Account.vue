<template>
  <div class="Account">
    <PageTitle main="Minha Conta" />
    <div class="form-group">
      <div class="input-group mb-3">
        <span class="input-group-text">CPF</span>
        <input
          class="form-control"
          type="text"
          v-model="entity.cpfcnpj"
          placeHolder="CPF ou CNPJ"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Nome</span>
        <input
          class="form-control"
          type="text"
          v-model="entity.name"
          placeHolder="Nome Completo ou Razão Social"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">E-mail</span>
        <input
          class="form-control"
          type="text"
          v-model="entity.email"
          placeHolder="E-mail"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">CEP</span>
        <input
          class="form-control"
          type="text"
          v-model="entity.postalcode"
          placeHolder="CEP"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Rua</span>
        <input
          class="form-control"
          type="text"
          v-model="entity.street"
          placeHolder="Rua"
        />
      </div>

      <div class="form-row">
        <div class="col input-group mb-3">
          <span class=" input-group-text">Número</span>
          <input
            class="form-control"
            type="text"
            v-model="entity.number"
            placeHolder="Número"
          />
        </div>
        <div class="col input-group mb-3">
          <span class="input-group-text">Complemento</span>
          <input
            class=" form-control"
            type="text"
            v-model="entity.complement"
            placeHolder="Complemento"
          />
        </div>
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Bairro</span>
        <input
          class="form-control"
          type="text"
          v-model="entity.neighborhood"
          placeHolder="Bairro"
        />
      </div>
      <div class="form-row">
        <div class="col input-group mb-3">
          <span class="input-group-text">Estado</span>
          <select
            class=" form-control"
            type="text"
            v-model="entity.state"
            placeHolder="Estado"
          >
            <option value="" disabled selected>Estado</option>
          </select>
        </div>
        <div class="col input-group mb-3">
          <span class="input-group-text">Cidade</span>
          <select class=" form-control" type="text" v-model="entity.city">
            <option value="" disabled selected>Cidade</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
export default {
  name: "Account",
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
</style>