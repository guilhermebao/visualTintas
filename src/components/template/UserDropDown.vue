<template>
  <div class="user-dropdown pl-4">
    <div class="user-button">
      <img style="height: 16px;" src="../../assets/user.png" alt="" />
    </div>

    <div class="user-dropdown-content shadow mt-2">
      <router-link to="" class="my-2">
        Usuário
      </router-link>
      <router-link to="" class="my-2">
        V$ 0.00
      </router-link>
      <router-link to="" class="my-2">
        Meus Orçamentos
      </router-link>
       <router-link to="">
        Comprar Vittin
      </router-link>
      <a class="my-2" href @click.prevent="">Sair</a>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UserDropdown",
  components: { },
  computed: mapState(["user"]),
  methods: {
    logout() {
    
    }
  }
};
</script>

<style>
.user-dropdown {
  position: relative;
  cursor: pointer;
}

/* .user-dropdown:hover {
  background-color:#ededed;
} */

.user-dropdown-content {
  position: absolute;
  right: 0px;
  background-color: #f9f9f9;
  min-width: 170px;
  padding: 10px;
  z-index: 1;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}

.user-dropdown:hover .user-dropdown-content {
  visibility: visible;
  opacity: 1;
}

.user-dropdown-content a {
  text-decoration: none;
  color: #001023;
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
}

.user-dropdown-content router-link {
  padding: 5px;
}

.user-dropdown-content a:hover {
  text-decoration: none;
  color: #000;
  background-color: #ededed;
}

.user-dropdown-content router-link:hover {
  background-color: #ededed;
  cursor: pointer
}

</style>