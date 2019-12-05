<template>
  <div class="update">
    <h1 class="heading-1">Update Details</h1>
    <p>
      The BVN gives each Bank customer a unique identity across the Nigerian
      Banking industry that can <br />
      be used for easy identification and verification at Point of Banking
      operations
    </p>
    <main>
      <form @submit.prevent="submitBvn" action="">
        <input-group
          type="text"
          name="verify-bvn"
          text="Verify Bvn"
          v-model="$v.form.bvn.$model"
          :error="$v.form.bvn.$anyError"
        >
          <template v-slot:errors>
            <p class="error" v-if="$v.form.bvn.$dirty && !$v.form.bvn.required">
              *This field is required
            </p>
          </template>
        </input-group>

        <input-group
          type="date"
          name="dob"
          text="Date of birth"
          :error="$v.form.dob.$anyError"
          v-model="$v.form.dob.$model"
        >
          <template v-slot:errors>
            <p class="error" v-if="$v.form.dob.$dirty && !$v.form.dob.required">
              *This field is required
            </p>
          </template>
        </input-group>

        <custom-button
          :loading="loading"
          text="Update"
          :disabled="$v.form.$invalid"
        />

        <input-group
          class="status"
          type="text"
          name="verify-bvn"
          text="Verify Bvn"
          v-model="form.bvn"
          :icon="bvnMatch ? 'good' : 'bad'"
        />
      </form>
      <section class="info" v-if="show">
        <div v-if="bvnMatch" class="heading">
          <img src="@/assets/icons/good.svg" />
          <h2>BVN Updated</h2>
        </div>
        <div v-if="bvnMatch" class="">
          <div class="more">
            <p class="title">First Name</p>
            <p class="value">{{ user.firstname }}</p>
          </div>
          <div class="more">
            <p class="title">Last Name</p>
            <p class="value">{{ user.lastname }}</p>
          </div>
          <div class="more">
            <p class="title">Date of Birth</p>
            <p class="value">{{ user.phone_number }}</p>
          </div>
        </div>
        <div v-else class="heading">
          <img src="@/assets/icons/bad.svg" />
          <h2>BVN Not Matched!</h2>
        </div>
      </section>
      <section v-else class="waiting">
        <h2>Input your bvn</h2>
      </section>
    </main>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import InputGroup from "@/components/InputGroup";
import CustomButton from "@/components/CustomButton";
export default {
  name: "UpdateDetails",
  components: {
    InputGroup,
    CustomButton
  },
  data: () => ({
    details: {
      "last name": "Xtermin",
      "first name": "Fadert",
      "date of birth": "12/08/2019"
    },
    show: false,
    form: {
      bvn: "",
      dob: "",
      verify: ""
    }
  }),
  validations: {
    form: {
      bvn: {
        required
      },
      dob: {
        required
      }
    }
  },
  computed: {
    loading() {
      return this.$store.state.bvnLoading;
    },
    bvnMatch() {
      return this.$store.state.bvnMatch;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    async submitBvn() {
      await this.$store.dispatch("checkBvn", {
        bvn: this.form.bvn,
        dob: this.form.dob
          .split("-")
          .reverse()
          .join("")
      });
      this.show = true;
      // if (this.$store.state.bvnMatch) {
      //   this.$toasted.success("BVN Matched!");
      // } else {
      //   this.$toasted.error(this.$store.state.error);
      // }
    }
  }
};
</script>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.update {
  margin: 0 10rem 8rem;
}

.update p {
  font-size: 1.6rem;
  color: #3d3d3d;
}

.input-group,
.btn-box {
  margin-top: 4rem;
}

main > * {
  width: 45%;
}

.btn-box {
  text-align: left;
}

.input-group.status {
  margin-top: 15rem;
}

.heading {
  display: flex;
  align-items: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #080f4d;
  margin-bottom: 2rem;
}

.heading > * {
  display: inline-block;
  margin-right: 2rem;
}

.more {
  margin: 1rem 0;
}

.more .title {
  font-size: 1.3rem;
  text-transform: capitalize;
  margin: 0;
}

.more .value {
  font-weight: 600;
  font-size: 2.4rem;
  text-transform: capitalize;
  margin-top: 1rem;
}

@media screen and (max-width: 900px) {
  main > * {
    width: 100%;
  }

  .input-group.status {
    margin-top: 10rem;
  }

  .info {
    margin-top: 10rem;
  }
}

@media screen and (max-width: 750px) {
  .update {
    margin: 0 5rem;
  }
}
</style>
