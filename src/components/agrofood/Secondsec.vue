<template>
  <div class="q-pa-md">
    <div class="top container">
      <div class="row align-c flexx text-c">
        <div class="col col-md-6 col-sm-6 col-xs-12 q-py-xl">
          <img src="/images/agrofood1.png" />
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12">
          <h2
            style="font-size: 40px"
            class="text-h3 q-my-lg text-weight-bold text-primary"
          >
            Save Money
          </h2>

          <p class="q-mt-lg">
            After selecting your desired plan, select the number of days you
            wish to save for on the savings calendar and save each time. Ensure
            to complete savings before the due date.
          </p>

          <button @click="goto" class="text-secondary btn">Get started</button>
        </div>
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
img {
  width: 50%;
}
.align-c {
  display: flex;
  align-items: center;
}

.btn {
  border: none;
  background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%);
  padding: 0.75rem;
  border-radius: 8px;
  margin: 0.55rem 0;
}

@media (max-width: 400px) {
}

@media (max-width: 520px) {
  .text-c {
    text-align: center;
  }
}
</style>
