<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <p>
      Over 25,000 businesses of all sizes use Wentworths to accept payments
      online, <br />including some of Nigeria's biggest brands
    </p>
    <form action="">
      <input-group
        type="text"
        name="fname"
        text="First Name"
        v-model="form.firstname"
      />
      <input-group
        type="text"
        name="lastname"
        v-model="form.lastname"
        text="Last Name"
      />
      <input-group
        type="text"
        name="phoneNo"
        v-model="form.phoneNumber"
        text="Phone Number"
      />
      <input-group
        type="text"
        name="address"
        v-model="form.address"
        text="Address"
      />
      <input-group
        type="password"
        name="password"
        v-model="form.password"
        text="Password"
      />
      <input-group
        type="text"
        name="confirm-password"
        v-model="form.confirmPassword"
        text="Confirm password"
      />
      <div class="btn-box">
        <button><span>Signup</span>&rarr;</button>
      </div>
    </form>
  </div>
</template>

<script>
import InputGroup from "@/components/InputGroup";

export default {
  name: "Signup",
  components: {
    InputGroup
  },
  data: () => ({
    form: {
      firstName: "Ore Somt",
      lastName: "Ore Somt",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      address: ""
    }
  })
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
  .signup{
    width: 90%;
    margin: 0 auto;
  }
  .input-group {
    width: 100%;
  }
}
</style>
