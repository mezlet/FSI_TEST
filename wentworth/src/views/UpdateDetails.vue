<template>
  <div class="update">
    <h1>Update Details</h1>
    <p>
      The BVN gives each Bank customer a unique identity across the Nigerian
      Banking industry that can <br />
      be used for easy identification and verification at Point of Banking
      operations
    </p>
    <main>
      <form action="">
        <div class="input-group">
          <label for="verify-bvn">Verify Bvn</label>
          <input type="text" name="verify-bvn" />
        </div>
        <div class="input-group">
          <label for="fname">Date of birth</label>
          <input type="date" />
        </div>
        <div class="btn-box">
          <button><span>Update</span>&rarr;</button>
        </div>

        <div class="status input-group">
          <label for="fname">Date of birth</label>
          <input type="date" />
        </div>
      </form>
      <section class="info">
        <div class="heading">
          <img src="@/assets/icons/good.svg" />
          <h2>BVN Updated</h2>
        </div>
        <div class="more" v-for="(detail, name) in details" :key="name">
          <p class="title">{{ name }}</p>
          <p class="value">{{ detail }}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "UpdateDetails",
  data: () => ({
    details: {
      "last name": "Xtermin",
      "first name": "Fadert",
      "date of birth": "12/08/2019"
    }
  })
};
</script>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

.status {
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
</style>
