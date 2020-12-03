<template>
  <div class="menu" v-if="isMenuVisible">
 
    <div class="new-user" v-if="user">
    <span>Olá, <br/><strong>entre</strong> ou <strong>cadastre-se</strong></span>
    </div>

    <div class="menu-buttons">
      <span>EMPRESA</span>
      <span>PRODUTOS</span>
      <span>CONTATO</span>
    </div> 
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Menu",
  components: {  },
  computed: mapState(["user", "isMenuVisible"]),

  data: function() {
    return {
      
    };
  },
  methods: {
  },
  mounted() {
  }
};
</script>

<style>
.menu {
  grid-area: menu;
  background-color: #FFFFFF;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.menu-buttons {
  display: flex;
  flex-direction: column;
}
</style>