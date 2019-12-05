<template>
  <div class="btn-box">
    <button type="submit" @click="$emit('click')" :disabled="disabled">
      <span class="text">{{ text }}</span>
      <span v-if="loadingin">
        <img src="@/assets/loading2.svg" alt="Loading Icon" />
      </span>
      <span v-else>
        &rarr;
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    text: String,
    disabled: Boolean,
    loadingin: Boolean
  }
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

.btn-box button .text {
  display: inline-block;
  margin-right: 20rem;
}
</style>
