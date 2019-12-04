<template>
  <div class="input-group">
    <label :for="name">{{ text }}</label>
    <input
      :type="type"
      :name="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "InputGroup",
  props: ["name", "value", "text", "type"]
};
</script>

<style scoped>
.input-group {
  border: 2px solid #080f4d;
  padding: 1.5rem 2rem;
  border-radius: 7px;
  position: relative;
  margin-top: 6rem;
}

.input-group label {
  position: absolute;
  top: -13px;
  background: white;
  padding: 0 5px;
}

.input-group input {
  border: none;
  outline: none;
  font-size: 1.6rem;
}
</style>
