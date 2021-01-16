<template>
  <footer id="footer">
    <div class="footer-top" style="margin-top: 162px;">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-8">
            <img class="logo-footer" src="../../assets/logo-footer.png" alt="" />
          </div>
          <div class="col-sm-4">
            <div class="footer-bottom clearfix">
              <div class="credits">
                <span class="tl-footer pr-4">Siga-nos</span>
                <img class="pr-4 img-insta" src="../../assets/insta.png" alt="" />
                <img class="img-facebook" src="../../assets/facebook.png" alt="" />
              </div>
            </div>
            <div class="co2 content-footer">Rua Antônio Eustáquio Piazza, 3663, Tirol</div>
            <div class="co2 content-footer">Belo Horizonte / MG</div>
          </div>
        </div>
        <div class="row">
          <div class="hr-footer mt-5 mb-3"></div>
          <div class="col-md-4 col-sm-12">
            <div class="tl-footer text-left padding-tl-footer">Formas de Pagamento</div>
            <img class="img-pagamentos" src="../../assets/pagamentos.png" alt="" />
          </div>
          <!-- <span class="hr-h-footer"></span> -->
          <div class="_hr-footer"></div>
          <div class="col-md-4 col-sm-12">
            <div class="tl-footer text-left padding-tl-footer">Dúvidas Frequentes</div>
            <div class="_co2 content-footer pb-3">Como Comprar</div>
            <div class="_co2 content-footer pb-3">Polí­tica de Trocas</div>
            <div class="_co2 content-footer pb-3">Polí­tica de Entrega</div>
            <div class="_co2 content-footer pb-3">Polí­tica de Segurança</div>
          </div>
          <div class="_hr-footer"></div>
          <div class="col-md-4 col-sm-12">
            <div class="tl-footer text-left padding-tl-footer">Fale Conosco</div>
            <div class="text-left pb-3">
              <img class="pr-4 img-insta" src="../../assets/tel.png" alt="" />
              <span class="co2 content-footer pb-3">(31) 99733-8710</span>
            </div>
            <div class="text-left pb-3">
              <img class="pr-4 img-insta" src="../../assets/phone.png" alt="" />
              <span class="co2 content-footer pb-3">(31) 3385-1365</span><br>
              <span class="co2 content-footer pb-3 pl-5">(31) 3385-1365</span>
            </div>
            <div class="text-left pb-3">
              <img class="pr-4 img-insta" src="../../assets/email.png" alt="" />
              <span class="co2 content-footer pb-3">vendas@visualtintas.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  font-size: 14px;
  background: #37517e;
}

#footer .footer-newsletter {
  padding: 50px 0;
  background: #f3f5fa;
  text-align: center;
  font-size: 15px;
  color: #444444;
}

#footer .footer-newsletter h4 {
  font-size: 24px;
  margin: 0 0 20px 0;
  padding: 0;
  line-height: 1;
  font-weight: 600;
  color: #727d89;
}

#footer .footer-newsletter form {
  margin-top: 30px;
  background: #fff;
  padding: 6px 10px;
  position: relative;
  border-radius: 50px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.06);
  text-align: left;
}

#footer .footer-newsletter form input[type="email"] {
  border: 0;
  padding: 4px 8px;
  width: calc(100% - 100px);
}

#footer .footer-newsletter form input[type="submit"] {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border: 0;
  background: none;
  font-size: 16px;
  padding: 0 20px;
  background: #097a7f;
  color: #fff;
  transition: 0.3s;
  border-radius: 50px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}

#footer .footer-newsletter form input[type="submit"]:hover {
  background: #209dd8;
}

#footer .footer-top {
  padding: 60px;
  background: #dbdee6;
}

#footer .footer-top .footer-contact {
  margin-bottom: 30px;
}

#footer .footer-top .footer-contact h3 {
  font-size: 28px;
  margin: 0 0 10px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 600;
  color: #37517e;
}

#footer .footer-top .footer-contact p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  color: #5e5e5e;
}

#footer .footer-top h4 {
  font-size: 16px;
  font-weight: bold;
  color: #001023;
  position: relative;
  text-transform: uppercase;
  padding-top: 8px;
}

#footer .footer-top .footer-links {
  margin-bottom: 30px;
}

#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#footer .footer-top .footer-links ul i {
  padding-right: 2px;
  color: #097a7f;
  font-size: 20px;
  line-height: 1;
}

#footer .footer-top .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}

#footer .footer-top .footer-links ul a {
  color: #777777;
  transition: 0.3s;
  display: inline-block;
  line-height: 1;
}

#footer .footer-top .footer-links ul a:hover {
  text-decoration: none;
  color: #097a7f;
}

#footer .footer-top .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #097a7f;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .footer-top .social-links a:hover {
  background: #209dd8;
  color: #fff;
  text-decoration: none;
}

#footer .footer-bottom {
  padding-top: 30px;
  padding-bottom: 30px;
  color: #fff;
}

#footer .copyright {
  float: left;
}

#footer .credits {
  float: right;
  font-size: 13px;
}

#footer .credits a {
  transition: 0.3s;
}

.tl-footer {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: #031727;
}

.co2 {
  text-align: right !important;
}

.content-footer {
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
}

.padding-tl-footer {
  padding-bottom: 3rem
}

@media (max-width: 768px) {
  #footer .footer-bottom {
    padding-top: 9px;
    padding-bottom: 20px;
  }
  #footer .copyright,
  #footer .credits {
    text-align: left;
    float: none;
  }
  #footer .credits {
    padding-top: 45px;
  }
  .logo-footer {
    width: 220px;
    margin-top: 45px;
  }
  #footer .footer-top {
    padding: 10px;
    padding-left: 40px;
    padding-right: 40px;
  }
  .tl-footer {
    font-size: 13px;
    font-weight: 200;
  }
  .img-facebook{
    width: 17px;
  }
  .img-insta{
    width: 40px;
  }
  .co2 {
    text-align: left !important;
    font-size: 13px !important;
  }
  ._co2 {
    text-align: left;
    font-size: 13px;
  }
  .img-pagamentos {
    width: 180px;
  }
  .padding-tl-footer {
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
  ._hr-footer {
    width: 100%;
    height: 1px;
    margin-top: 20px;
    margin-bottom: 15px;
    background-color: #C6C6C7;
  }
}


.hr-footer {
  width: 100%;
  height: 1px;
  background-color: #C6C6C7;
}




.hr-h-footer {
  width: 1px;
  height: 247px;
  background-color: #C6C6C7;
}
</style>