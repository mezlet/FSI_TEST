<template>
  <div class="input-group">
    <label :for="name">{{ text }}</label>
    <input
      :type="type"
      :name="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <img
      class="input-icon"
      v-if="icon"
      :src="require(`../assets/icons/${icon}.svg`)"
      alt=""
      srcset=""
    />
  </div>
</template>

<script>
export default {
  name: "InputGroup",
  props: ["name", "value", "text", "type", "icon"]
};
</script>

<style scoped>
.input-group {
  border: 2px solid #080f4d;
  padding: 15px 20px;
  border-radius: 7px;
  position: relative;
  margin-top: 6rem;
}

.input-group label {
  position: absolute;
  top: -8px;
  background: white;
  padding: 0 5px;
}

.input-group input {
  border: none;
  outline: none;
  font-size: 1.6rem;
}

.input-icon {
  position: absolute;
  right: 15px;
  top: 9px;
}
</style>
