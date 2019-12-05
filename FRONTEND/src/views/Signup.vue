<template>
  <div class="signup">
    <h1 class="heading-1">Sign Up</h1>
    <p>
      Over 25,000 businesses of all sizes use Wentworths to accept payments
      online, <br />including some of Nigeria's biggest brands
    </p>
    <form @submit.prevent="submitForm" action="">
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
        name="password"
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
          <p
            class="error"
            v-if="$v.form.password.$dirty && !$v.form.password.minLength"
          >
            Password must have at least
            {{ $v.form.password.$params.minLength.min }} characters.
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
      <custom-button
        text="Signup"
        :disabled="$v.form.$invalid"
        :loading="loading"
      />
    </form>
  </div>
</template>

<script>
import { required, sameAs, minLength } from "vuelidate/lib/validators";
// import { VSnackbar } from "vuetify/lib";
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
      lastName: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      address: ""
    },
    snack: true
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
        required,
        minLength: minLength(8)
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password")
      }
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  methods: {
    async submitForm() {
      await this.$store.dispatch("registerUser", {
        firstname: this.form.firstName,
        lastname: this.form.lastName,
        password: this.form.password,
        address: this.form.address,
        phone_number: this.form.phoneNumber
      });
      console.log(this.$store.state.isLoggedIn);
      if (this.$store.state.isLoggedIn) {
        this.$toasted.success("Logged In sucessfully", { type: "sucess" });
        setTimeout(() => {
          this.$router.push("/update");
        });
      } else {
        this.$toasted.error(this.$store.state.error, { type: "sucess" });
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
