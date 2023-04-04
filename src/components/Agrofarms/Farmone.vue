<template>
  <div class="q-pa-md container">
    <div class="row q-col-gutter-x-md align-c text-c">
      <div class="col-md-6 q-pb-lg col-sm-6 col-xs-12">
        <h2
          style="font-size: 40px"
          class="text-h3 q-my-lg text-weight-bold text-primary"
        >
          Ginger Farm
        </h2>

        <p class="q-mt-lg">
          Our ginger, situated across southern Kaduna, Nothern Nigeria is
          well-priced because of its flavour and neatness. We ensure that our
          yields are Aflatoxin free and this has secured access to global
          markets and create demands from more global regions. Premium pre and
          post harvest handlng of the produce presents us a Grade-A product,
          which are marketed as wet or dry ginger.
        </p>

        <!-- <button class="bg-secondary text-primary btn btn-white">
          Learn More
        </button> -->
      </div>
      <div class="col col-md-6 col-sm-6 col-xs-12 text-center">
        <img src="/images/agrofarm3.png" />
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
  max-width: 400px;
}

.btn {
  border: none;
  background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%);
  padding: 0.75rem;
  border-radius: 8px;
  margin: 0.55rem 0;
}

.btn-white {
  margin-left: 1rem;
  border: 1px solid #2b945b;
}
@media (max-width: 400px) {
}

@media (max-width: 520px) {
  .text-c {
    text-align: center;
  }
}
</style>
