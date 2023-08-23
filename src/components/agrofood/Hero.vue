<template>
  <div class="sec">
    <div class="row items-center text-c container">
      <div class="col-md-6 col-sm-6 q-mb-xl col-xs-12">
        <!-- <h2
          style="font-size: 50px"
          class="text-h2 q-my-lg text-weight-bold text-primary"
        >
          AgroFoods
        </h2> -->
        <div class="text-h3 q-pt-xl text-dark text-weight-bold">
          <span class="text-primary">Save</span> like an Ant,
        </div>
        <div class="text-h3 text-dark text-weight-bold">
          <span class="text-primary">Eat</span> like an <span>Elephant</span>
        </div>

        <p style="font-size: 20px" class="q-mt-lg">
          Amazing how little drops of water make <br />
          a mighty ocean? Get a
          <span class="text-primary text-bold">Food Bag</span> every 30days
          <br />
          you never knew you were saving for!
        </p>

        <div>
          <div style="font-size: 18px" class="q-mt-lg">
            Book weekly delivery of the best
            <span class="text-primary text-bold q-mr-md">
              Fruits & Veggies</span
            >
            <br />
            <q-btn @click="goto" class="text-secondary btn"
              >Fruits & Veggies
            </q-btn>
          </div>
        </div>

        <!-- <div class="input-email q-mt-lg">
          <div class="input q-px-lg">
            <input placeholder="Enter your email " type="text" />
            <button class="text-secondary">Start Saving</button>
          </div>
        </div> -->
      </div>
      <div class="col col-md-6 col-sm-6 col-xs-12">
        <img class="img" src="/images/Group.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goto() {
      document.getElementById("get").scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
h5 span.skew {
  position: relative;
}
h5 span.skew::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  height: 3px;
  color: #ffff;
  background-color: #2b945b;
}
.sec {
  padding-top: 6rem;
}

h5 {
  line-height: 1.3;
}

.input-email .input {
  border-radius: 10px;
  border: 1px solid rgba(229, 229, 229, 0.4);
  background: rgba(229, 229, 229, 0.4);
  padding: 1rem;
  width: 70%;
  display: flex;
  justify-content: space-between;
}

.input-email input {
  border: none;
  /* background: rgba(229, 229, 229, 0.4); */
  background: none;
}

.input-email button {
  border: none;
  background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%);
  padding: 0.75rem;
  font-size: 14px;
  border-radius: 8px;
}

.img {
  width: 90%;
}

.btn {
  border: none;
  background: linear-gradient(121.81deg, #ca7c06 20.1%, #fcb64e 131.87%);
  padding: 0.75rem;
  border-radius: 8px;
  margin: 0.55rem 0;
}

@media (max-width: 400px) {
  .input-email .input {
    padding: 0.75rem;
  }

  .input-email button {
    padding: 0.45rem;
    border-radius: 8px;
  }
}

@media (max-width: 630px) {
  .text-c {
    text-align: center;
  }

  .input-email {
    margin: 0 auto;
  }

  .input-email .input {
    padding: 0.5rem;
    width: 100%;
    justify-content: space-around;
  }
  .input-email button {
    padding: 0.45rem;
    border-radius: 8px;
    font-size: 14px;
    min-width: 40%;
  }

  .input-email input {
    width: 50%;
  }
}
</style>
