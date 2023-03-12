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

    <div class="row align-c text-c q-pb-xl container">
      <div class="col col-md-6 col-sm-12 col-xs-12 text-center">
        <img src="/images/join.png" />
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <p style="font-size: 20px" class="text-body1 q-my-xl">
          To be a member of our community sign up
        </p>
        <div class="input-wrap">
          <label class="text-primary" for="">Full Name</label> <br />

          <div class="input">
            <i class="fa-solid q-mr-sm fa-user text-primary"></i>

            <input type="text" placeholder="Farmers Full Name" />
          </div>
        </div>

        <div class="input-wrap">
          <label for="" class="text-primary">Email</label> <br />

          <div class="input">
            <i class="q-mr-sm fa-solid fa-envelope text-primary"></i>

            <input type="email" placeholder="Enter Email" />
          </div>
        </div>

        <q-btn class="text-secondary btn">Join</q-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.input-wrap .input {
  border: 1px solid #2b945b;
  padding: 0.55rem;
  margin: 1rem 0;
  border-radius: 10px;
}

.input-wrap .input input {
  border: none;
  padding: 0.45rem;
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
