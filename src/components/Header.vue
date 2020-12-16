<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          src="/docs/4.1/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          alt=""
        />
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Empresa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Produtos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contato</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <a class="nav-link" href="#">Login</a>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Cadastre-se
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>