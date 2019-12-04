<template>
  <div class="home">
    <Navbar />
    <Main />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Main,
    Footer
  }
};
</script>

<style scoped>
.home {
  margin: 0 auto;
  overflow: hidden;
}

@media only screen 
  and (min-width: 320px) 
  and (max-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
  .home{
    margin: 0;
  }
}
</style>
