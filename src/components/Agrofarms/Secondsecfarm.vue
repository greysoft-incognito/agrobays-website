<template>
  <div class="q-pa-md q-mt-lxl">
    <div class="top container">
      <div class="row flex align-c text-c">
        <div class="col col-md-6 col-sm-6 col-xs-12 q-pb-xl">
          <img src="/images/agrofarm1.png" />
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12">
          <!-- <h2
            style="font-size: 40px"
            class="text-h3 q-my-lg text-weight-bold text-secondary"
          >
            Select a plan
          </h2> -->
          <h2
            style="font-size: 30px"
            class="text-primary line text-weight-bold"
          >
            Small Holder Farmers (SMH)
          </h2>

          <p class="q-mb-md">
            Small Holder Farmers (SMH) constitute the majority of farmers in
            Sub-Saharan Africa with handkerchief sized farms designed to feed
            their immediate families. We have engaged in training programs for
            farmers on the need for the practice of large scale farming and the
            benefits of cooperatives in accessing larger markets. Our myriads of
            SMFs enroll annually in our various out growers scheme projects to
            farm a variety of crops for local and global markets.
          </p>

          <!-- <button class="text-secondary btn">Get started</button> -->
        </div>
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
