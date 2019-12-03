<template>
  <div class="home">
    <Navbar />
    <Main/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Main from "@/components/Main.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Main
  }
};
</script>

<style scoped>
.home {}
</style>
