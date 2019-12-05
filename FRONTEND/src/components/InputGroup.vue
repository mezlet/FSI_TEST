<template>
  <div class="input-wrapper">
    <div class="input-group" :class="{ error: error }">
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
    <div class="errors">
      <slot name="errors"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputGroup",
  props: ["name", "value", "text", "type", "icon", "error"]
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

.input-group.error {
  border: 2px solid red;
}

.input-wrapper p.error {
  color: red;
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
  width: 100%;
}

.input-icon {
  position: absolute;
  right: 15px;
  top: 11px;
  height: 30px;
  width: 30px;
}

@media screen and (max-width: 750px) {
  #app {
    margin: 0 5rem;
  }

  .input-icon {
    top: 6px;
  }
}
@media screen and (max-width: 800px) {
  .input-group {
    width: 100%;
    margin-top: 2rem;
  }
}
</style>
