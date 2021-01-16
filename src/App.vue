<template>
  <div id="app" :class="{ 'hide-menu': !isMenuVisible || !user, 'hide-header': !user }">
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
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
* {
  font-family: 'Poppins', sans-serif;
}

a {
  color: #47b2e4;
}

a:hover {
  color: #73c5eb;
  text-decoration: none;
}

.pr-10 {
  padding-right: 10px;
}

.pb-2-4r {
  padding-bottom: 2.4rem;
}

.pb-8 {
  padding-bottom: 8rem;
}
</style>
