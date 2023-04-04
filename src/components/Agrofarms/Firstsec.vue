<template>
  <div class="q-pa-md container q-my-lg">
    <div class="row align-c text-c q-pt-xl">
      <div class="col-md-6 q-pb-lg col-sm-6 col-xs-12">
        <!-- <h2
          style="font-size: 40px"
          class="text-h3 q-my-lg text-weight-bold text-primary"
        >
          Select a plan
        </h2> -->
        <h2 style="font-size: 30px" class="text-primary line text-weight-bold">
          Inclusive Farming
        </h2>

        <p class="">
          As part of our community sensitization program, we continuously
          advocate for women to farm alongside men for an all-inclusive economic
          development. Agrobays is largely a women-driven farming community and
          this is quite unique because the level of innovation that breeds
          excellence and constant annual productivety.
        </p>

        <!-- <button class="text-secondary btn">Get started</button> -->
      </div>
      <div class="col col-md-6 col-sm-6 col-xs-12 text-center">
        <img src="/images/agrofarm2.png" />
      </div>
    </div>

    <!-- <div class="row">
      <div class="col">.col</div>
      <div class="col">.col</div>
      <div class="col">.col</div>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.align-c {
  display: flex;
  align-items: center;
}

img {
  width: 90%;
  object-fit: contain;
  border-radius: 20px;
  max-width: 400px;
}

.btn {
  border: none;
  background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%);
  padding: 0.75rem;
  border-radius: 8px;
  margin: 0.55rem 0;
}

.line {
  line-height: 1.2;
  margin-bottom: 0.75rem;
}

@media (max-width: 400px) {
}

@media (max-width: 520px) {
  .text-c {
    text-align: center;
  }
}
</style>
