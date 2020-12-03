<template>
  <div class="header">
    <div class="logo">
      
      <div class="toggle d-sm-none" @click="toggleMenu">
        <i class="fa fa-bars"></i>
      </div>

      <img src="../../assets/logo.png" alt="aaaaaaaa" />
    </div>

    <div class="buttons d-none d-sm-block">
      <span>EMPRESA</span>
      <span>PRODUTOS</span>
      <span>CONTATO</span>
    </div>

    <div class="right-buttons">

      <div class="seach-bar">
        <i class="fa fa-search"></i>
      </div>

      <div class="user-singin d-none d-sm-block" v-if="user">
        <span>LOGIN</span>
      </div>
      <div class="cart d-none d-sm-block" v-else>
        <i class="fa fa-shopping-cart"></i>
      </div>

      <div class="user-singup d-none d-sm-block" v-if="user">
        <span>CADASTRE-SE</span>
      </div>
      <div class="user-drop-down d-none d-sm-block" v-else>
        <UserDropDown />
      </div>

    </div>
  </div>
</template>

<script>
import UserDropDown from "./UserDropDown";
import { mapState } from "vuex";

export default {
  name: "Header",
  components: { UserDropDown },
  props: {
    tittle: String,
    hideToggle: Boolean
  },
  computed: {
    icon() {
      return "fa-angle-left";
    },
    ...mapState(["user"])
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu')
    }
  }
};
</script>

<style>
.header {
  grid-area: header;
  background-color: #f3f5f9;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logo {
  width: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
}

.logo > img {
  width: 80px;
}

.buttons {
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.buttons > span {
  padding: 10px;
}

.right-buttons {
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>