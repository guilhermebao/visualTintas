<template>
  <!-- <div class="header">
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
        <router-link to="/register"><span>CADASTRE-SE</span></router-link>
      </div>
      <div class="user-drop-down d-none d-sm-block" v-else>
        <UserDropDown />
      </div>

    </div>
  </div> -->

  <header id="header" class="sticky-top shadow">
    <div class="container d-flex align-items-center">
      <div class="toggle toggle-style d-sm-none mx-3" @click="toggleMenu">
        <i class="fa fa-bars"></i>
      </div>
      <img src="../../assets/logo-visual.png" alt=""/>
      
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="/company">EMPRESA</a></li>
          <li><a href="/product">PRODUTOS</a></li>
          <li><a href="#">CONTATO</a></li>
        </ul>
      </nav>
        <nav class="nav-menu d-none d-lg-block" style="position: absolute; right: 270px;" v-if="!user">
          <ul>
            <li><a href="#">LOGIN</a></li>
          </ul>
        </nav>
        <UserDropDown v-if="user"/>
        <!-- .nav-menu -->
        <img class="search-btn" src="../../assets/search-btn.png" alt=""/>
        <a href="/register" class="get-started-btn scrollto" v-if="!user">Cadastre-se</a>
    </div>
  </header>
  <!-- End Header -->
</template>

<script>
import UserDropDown from "./UserDropDown";
import { mapState } from "vuex";

export default {
  name: "Header",
  components: { UserDropDown },
  props: {
    tittle: String,
    hideToggle: Boolean,
  },
  computed: {
    icon() {
      return "fa-angle-left";
    },
    ...mapState(["user"]),
  },
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
  },
};
</script>

<style>
/* .header {
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
} */

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  transition: all 0.5s;
  z-index: 997;
  padding: 15px 0;
  background-color: #f3f5f9;
}

#header.header-scrolled,
#header.header-inner-pages {
  background: rgba(40, 58, 90, 0.9);
}

#header .logo {
  font-size: 30px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
}

#header .logo a {
  color: #fff;
}

#header .logo img {
  max-height: 40px;
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Desktop Navigation */
.nav-menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-menu > ul {
  display: flex;
}

.nav-menu > ul > li {
  position: relative;
  white-space: nowrap;
  padding: 10px 0 10px 28px;
}

.nav-menu a {
  display: block;
  position: relative;
  color: #001023;
  transition: 0.3s;
  /* font-size: 18px; */
  letter-spacing: 0.5px;
  font-weight: 600;
  text-transform: uppercase;
}

.nav-menu a:hover,
.nav-menu .active > a,
.nav-menu li:hover > a {
  color: #001023;
  text-decoration: none;
}

.nav-menu .drop-down ul {
  border-radius: 8px;
  display: block;
  position: absolute;
  left: 14px;
  top: calc(100% + 30px);
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  padding: 10px 0;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
}

.nav-menu .drop-down:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.nav-menu .drop-down li {
  min-width: 180px;
  position: relative;
}

.nav-menu .drop-down ul a {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  text-transform: none;
  color: #001023;
}

.nav-menu .drop-down ul a:hover,
.nav-menu .drop-down ul .active > a,
.nav-menu .drop-down ul li:hover > a {
  color: #001023;
}

.nav-menu .drop-down > a:after {
  content: "\ea99";
  font-family: IcoFont;
  padding-left: 5px;
}

.nav-menu .drop-down .drop-down ul {
  top: 0;
  left: calc(100% - 30px);
}

.nav-menu .drop-down .drop-down:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
}

.nav-menu .drop-down .drop-down > a {
  padding-right: 35px;
}

.nav-menu .drop-down .drop-down > a:after {
  content: "\eaa0";
  font-family: IcoFont;
  position: absolute;
  right: 15px;
}

@media (max-width: 1366px) {
  .nav-menu .drop-down .drop-down ul {
    left: -90%;
  }
  .nav-menu .drop-down .drop-down:hover > ul {
    left: -100%;
  }
  .nav-menu .drop-down .drop-down > a:after {
    content: "\ea9d";
  }
}

/* Get Startet Button */
.get-started-btn {
  margin-left: 25px;
  color: #fff;
  border-radius: 50px;
  padding: 6px 25px 7px 25px;
  white-space: nowrap;
  transition: 0.3s;
  font-size: 1rem;
  display: inline-block;
  background-color: #0ab279;
  text-transform: uppercase;
  font-weight: 600;
  position: absolute;
  right: 85px;
}

.get-started-btn:hover {
  background: #0ab279;
  color: #fff;
}

.search-btn {
  position: absolute; 
  right: 350px;
}

@media (max-width: 768px) {
  .get-started-btn {
    display: none;
    margin: 0 48px 0 0;
    padding: 6px 20px 7px 20px;
  }
  .search-btn {
    display: block;
    position: absolute;
    right: 25px;
  }
}

/* Mobile Navigation */
.mobile-nav-toggle {
  position: fixed;
  top: 20px;
  right: 15px;
  z-index: 9998;
  border: 0;
  background: none;
  font-size: 24px;
  transition: all 0.4s;
  outline: none !important;
  line-height: 1;
  cursor: pointer;
  text-align: right;
}

.mobile-nav-toggle i {
  color: #fff;
}

.mobile-nav {
  position: fixed;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  z-index: 9999;
  overflow-y: auto;
  background: #fff;
  transition: ease-in-out 0.2s;
  opacity: 0;
  visibility: hidden;
  border-radius: 10px;
  padding: 10px 0;
}

.mobile-nav * {
  margin: 0;
  padding: 0;
  list-style: none;
}

.mobile-nav a {
  display: block;
  position: relative;
  color: #37517e;
  padding: 10px 20px;
  font-weight: 500;
  outline: none;
}

.mobile-nav a:hover,
.mobile-nav .active > a,
.mobile-nav li:hover > a {
  color: #001023;
  text-decoration: none;
}

.mobile-nav .drop-down > a:after {
  content: "\ea99";
  font-family: IcoFont;
  padding-left: 10px;
  position: absolute;
  right: 15px;
}

.mobile-nav .active.drop-down > a:after {
  content: "\eaa1";
}

.mobile-nav .drop-down > a {
  padding-right: 35px;
}

.mobile-nav .drop-down ul {
  display: none;
  overflow: hidden;
}

.mobile-nav .drop-down li {
  padding-left: 20px;
}

.mobile-nav-overly {
  width: 100%;
  height: 100%;
  z-index: 9997;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(40, 58, 90, 0.6);
  overflow: hidden;
  display: none;
  transition: ease-in-out 0.2s;
}

.mobile-nav-active {
  overflow: hidden;
}

.mobile-nav-active .mobile-nav {
  opacity: 1;
  visibility: visible;
}

.mobile-nav-active .mobile-nav-toggle i {
  color: #fff;
}

.toggle-style {
  font-size: 24px;
}
</style>