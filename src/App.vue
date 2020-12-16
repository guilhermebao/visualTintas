<template>
  <div id="app" :class="{ 'hide-menu': !isMenuVisible || !user, 'hide-header': !user }">
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    <Header/>
    <Menu v-if="user" />
    <Content/>
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
body {
  font-family: "Open Sans", sans-serif;
  color: #444444;
}

a {
  color: #47b2e4;
}

a:hover {
  color: #73c5eb;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Jost", sans-serif;
}

/* 
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
} */
</style>
