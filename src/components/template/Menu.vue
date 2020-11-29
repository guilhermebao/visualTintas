<template>
  <aside class="menu">
    
  </aside>
</template>

<script>

export default {
  name: "Menu",
  components: {  },
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
  background: radial-gradient(
    circle,
    rgba(97, 97, 97, 1) 0%,
    rgba(66, 67, 75, 1) 100%
  );
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

</style>