<template>
  <div class="home">
    <Main />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";

export default {
  name: "home",
  components: {
    Main
  }
};
</script>

<style scoped>
.home {
  margin: 0 auto;
}
</style>
