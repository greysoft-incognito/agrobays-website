<template>
  <div class="q-pa-md services q-my-lg">
    <div class="wrrap container">
      <h2
        style="font-size: 40px"
        class="text-h3 q-my-md text-center text-weight-bold text-primary"
      >
        Join Our Community of Farmers
      </h2>
      <!-- <p class="text-center q-pb-lg q-mb-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        inventore eligendi adipisci.
      </p> -->
    </div>

    <div class="row items-center q-col-gutter-x-md text-c q-pb-xl container">
      <div class="col col-md-6 col-sm-6 col-xs-12 text-center">
        <img src="/images/join.png" />
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12">
        <p class="q-my-xl">To be a member of our community sign up</p>
        <form @submit.prevent="join">
          <div class="input-wrap">
            <label class="text-primary" for="">Full Name</label> <br />

            <div class="input">
              <i class="fa-solid q-mr-sm fa-user text-primary"></i>
              <input
                required
                v-model="data.name"
                type="text"
                name="name"
                placeholder="Farmers Full Name"
              />
            </div>
          </div>

          <div class="input-wrap">
            <label for="" class="text-primary">Email</label> <br />

            <div class="input">
              <i class="q-mr-sm fa-solid fa-envelope text-primary"></i>

              <input
                required
                v-model="data.email"
                type="email"
                name="email"
                placeholder="Enter Email"
              />
            </div>
          </div>
          <div class="input-wrap">
            <label for="" class="text-primary">Phone Number</label> <br />

            <div class="input">
              <i class="q-mr-sm fa-solid fa-phone text-primary"></i>

              <input
                required
                name="phone"
                v-model="data.phoneNumber"
                type="tel"
                placeholder="Enter phone number"
              />
            </div>
          </div>
          <div class="input-wrap">
            <label for="" class="text-primary">State</label> <br />

            <div class="input">
              <i class="q-mr-sm fa-solid fa-location text-primary"></i>

              <input
                required
                name="state"
                v-model="data.state"
                type="text"
                placeholder="Enter your state"
              />
            </div>
          </div>

          <q-btn type="submit" class="text-secondary btn">Join</q-btn>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      data: {},
    };
  },
  methods: {
    join() {
      console.log(this.data);
      fetch("http://localhost:5000/api/posts", {
        method: "POST",
        body: this.data,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        console.log("hey", response).catch((err) => {
          console.log(err);
        });
      });
    },
  },
};
</script>

<style scoped>
.input-wrap .input {
  border: 1px solid #2b945b;
  padding: 0.55rem;
  margin: 1rem 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.input-wrap .input input {
  border: none;
  padding: 0.45rem;
  width: 100%;
  background: transparent;
}

.btn {
  border: none;
  background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%);
  padding: 16px 24px 16px 24px;
  margin: 1rem;
  border-radius: 8px;
  margin: 0.55rem 0;
  font-size: 14px;
  width: 150px;
}

@media (max-width: 400px) {
  .input-wrap .input {
    border: 1px solid #2b945b;
    padding: 0.35rem;
    margin: 1rem 0;
    font-size: 14px;
  }
}
</style>
