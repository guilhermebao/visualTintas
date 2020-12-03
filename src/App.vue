<template>
  <div id="app" :class="{ 'hide-menu': !isMenuVisible || !user, 'hide-header': !user }">
    <Header/>
    <Menu v-if="user" />
    <Content v-else />
    <Footer />
  </div>
</template>

<script>

import Header from "@/components/template/Header";
import Menu from "@/components/template/Menu";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";
import { mapState } from 'vuex'

export default {
  title: "visual tintas",
  name: "App",
  components: { Header, Menu, Content, Footer },
  computed: mapState(['isMenuVisible', 'user']),
  data: function() {
    return {
    };
  },
  methods: {
  },
  created() {
  }
};
</script>

<style>
* {
  font-family: "Lato, sans-serif";
}

body {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: grid;
  grid-template-rows: 70px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas:
    "header header"
    "menu content"
    "menu footer";
}

#app.hide-menu {
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}

#app.hide-header {
  grid-template-areas:
    "content content"
    "content content"
    "footer footer";
}
</style>
