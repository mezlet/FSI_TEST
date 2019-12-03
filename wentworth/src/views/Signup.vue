<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <p>
      Over 25,000 businesses of all sizes use Wentworths to accept payments
      online, <br />including some of Nigeria's biggest brands
    </p>
    <form action="">
      <div class="input-group">
        <label for="fname">First Name</label>
        <input type="text" />
      </div>
      <div class="input-group">
        <label for="fname">Last Name</label>
        <input type="text" />
      </div>
      <div class="input-group">
        <label for="fname">Phone No</label>
        <input type="text" />
      </div>
      <div class="input-group">
        <label for="fname">Address</label>
        <input type="text" />
      </div>
      <div class="input-group">
        <label for="fname">Password</label>
        <input type="password" />
      </div>
      <div class="input-group">
        <label for="fname">Confirm Password</label>
        <input type="password" />
      </div>
      <div class="btn-box">
        <button><span>Signup</span>&rarr;</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signup"
};
</script>

<style scoped>
.signup {
  margin-bottom: 8rem;
}
form {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.input-group {
  width: 47%;
}

@media screen and (max-width: 800px) {
  .input-group {
    width: 100%;
  }
}
</style>
