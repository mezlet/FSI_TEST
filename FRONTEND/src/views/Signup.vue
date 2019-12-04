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
        v-model.lazy="$v.form.firstName.$model"
        :error="$v.form.firstName.$anyError"
      >
        <template v-slot:errors>
          <p
            class="error"
            v-if="$v.form.firstName.$dirty && !$v.form.firstName.required"
          >
            *This field is required
          </p>
        </template>
      </input-group>

      <input-group
        type="text"
        name="lastname"
        v-model="$v.form.lastName.$model"
        :error="$v.form.lastName.$anyError"
        text="Last Name"
      >
        <template v-slot:errors>
          <p
            class="error"
            v-if="$v.form.lastName.$dirty && !$v.form.lastName.required"
          >
            *This field is required
          </p>
        </template>
      </input-group>
      <input-group
        type="text"
        name="phoneNo"
        v-model="$v.form.phoneNumber.$model"
        :error="$v.form.phoneNumber.$anyError"
        text="Phone Number"
        ><template v-slot:errors>
          <p
            class="error"
            v-if="$v.form.phoneNumber.$dirty && !$v.form.phoneNumber.required"
          >
            *This field is required
          </p>
        </template>
      </input-group>

      <input-group
        type="text"
        name="address"
        v-model="$v.form.address.$model"
        :error="$v.form.address.$anyError"
        text="Address"
      >
        <template v-slot:errors>
          <p
            class="error"
            v-if="$v.form.address.$dirty && !$v.form.address.required"
          >
            *This field is required
          </p>
        </template>
      </input-group>
      <input-group
        type="password"
        name="password"
        :error="$v.form.password.$anyError"
        v-model="$v.form.password.$model"
        text="Password"
      >
        <template v-slot:errors>
          <p
            class="error"
            v-if="$v.form.password.$dirty && !$v.form.password.required"
          >
            *This field is required
          </p>
        </template>
      </input-group>
      <input-group
        type="password"
        name="confirm-password"
        v-model="$v.form.confirmPassword.$model"
        :error="$v.form.confirmPassword.$anyError"
        text="Confirm password"
      >
        <template v-slot:errors>
          <p
            class="error"
            v-if="
              $v.form.confirmPassword.$dirty &&
                !$v.form.confirmPassword.required
            "
          >
            *This field is required
          </p>
          <p
            class="error"
            v-if="
              $v.form.confirmPassword.$dirty &&
                !$v.form.confirmPassword.sameAsPassword
            "
          >
            *Passwords must match!
          </p>
        </template>
      </input-group>
      <custom-button text="Signup" :disabled="$v.form.$invalid" />
    </form>
  </div>
</template>

<script>
import { required, sameAs } from "vuelidate/lib/validators";
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
      firstName: "",
      lastName: "Ore Somt",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      address: ""
    }
  }),
  validations: {
    form: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      phoneNumber: {
        required
      },
      address: {
        required
      },
      password: {
        required
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password")
      }
    }
  }
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
.input-wrapper {
  width: 47%;
}

@media screen and (max-width: 800px) {
  .input-wrapper {
    width: 100%;
  }
}

@media screen and (max-width: 750px) {
  .signup {
    margin: 0 5rem;
  }
}
</style>
