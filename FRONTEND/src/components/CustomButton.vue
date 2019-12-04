<template>
  <div class="btn-box">
    <button type="submit" @click="$emit('click')" :disabled="disabled">
      <span>{{ text }}</span
      >&rarr;
    </button>
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  props: ["text", "disabled"]
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

.btn-box button:disabled {
  opacity: 0.6;
}

.btn-box button span {
  display: inline-block;
  margin-right: 20rem;
}
</style>
