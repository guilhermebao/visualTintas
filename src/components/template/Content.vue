<template>
  <section class="content">
    <router-view />
  </section>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style>
.content {
  grid-area: content;
  background-color: #fff;
  /* padding: 20px; */
  /* overflow-y: scroll */
}
</style>