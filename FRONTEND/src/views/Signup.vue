<template>
  <div class="signup">
    <h1 class="heading-1">Sign Up</h1>
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
      <custom-button text="Signup" />
    </form>
  </div>
</template>

<script>
import InputGroup from "@/components/InputGroup";
import CustomButton from "@/components/CustomButton";

export default {
  name: "Signup",
  components: {
    InputGroup,
    CustomButton
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
  margin: 0 10rem;
  margin-bottom: 8rem;
}

.signup p {
  font-size: 1.6rem;
  color: #3d3d3d;
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

@media screen and (max-width: 750px) {
  .signup {
    margin: 0 5rem;
  }
}
</style>
