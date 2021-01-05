<template>
  <div class="page-title">
    <h1>{{ main }}</h1>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["main"],
};
</script>

<style>
.page-title h1 {
  text-align: center;
  margin: 0px;
}
</style>