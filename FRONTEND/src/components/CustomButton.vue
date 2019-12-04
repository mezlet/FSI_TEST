<template>
  <div class="btn-box">
    <button @click="$emit('click')">
      <span>{{ text }}</span
      >&rarr;
    </button>
  </div>
</template>

<script>
export default {
  name: "Custom Button",
  props: ["text"]
};
</script>

<style scoped>
.btn-box {
  width: 100%;
  margin-top: 6rem;
  text-align: center;
}

.btn-box button {
  background: #ff4b35;
  color: white;
  font-size: 1.6rem;
  border-radius: 4px;
  padding: 2rem;
  border: none;
  margin: 0 auto;
}

.btn-box button span {
  display: inline-block;
  margin-right: 20rem;
}
</style>
