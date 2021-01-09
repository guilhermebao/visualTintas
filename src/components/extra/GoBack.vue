<template>
  <div class="go-back">
    <a :href="to">
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
      {{ name }}
    </a>
  </div>
</template>

<script>
// import router from "@/config/router";

export default {
  name: "Goback",
  props: ["to", "name"],
  computed: {
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style>
.go-back {
  padding-bottom: 40px;
}

.go-back a {
  color: #001023;
  text-decoration: none;
}
</style>