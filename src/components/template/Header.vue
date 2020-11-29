<template>
  <div class="header">
    <div class="logo">
      <img src="../../assets/logo.png" alt="aaaaaaaa" />
    </div>

    <div class="buttons">
      <button>EMPRESA</button>
      <button>PRODUTOS</button>
      <button>CONTATO</button>
    </div>

    <div class="right-buttons">
      <div class="seach-bar">
        <i class="fa fa fa-search"></i>
      </div>
      <div class="cart">
        <i class="fa fa-shopping-cart"></i>
      </div>
      <div class="user-drop-down">
        <UserDropDown/>
      </div>
    </div>
    
  </div>
</template>

<script>
import UserDropDown from './UserDropDown'

export default {
  name: "Header",
  components: {UserDropDown},
  props: {
    tittle: String,
    hideToggle: Boolean
  },
  computed: {
    icon() {
      return "fa-angle-left";
    }
  },
  methods: {}
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
  justify-content: center;
  align-items: center;
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

.right-buttons {
  width: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>