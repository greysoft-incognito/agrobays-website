<template>
  <q-page class="ppge">
    <Hero />
    <!-- <BBoxes /> -->

    <div class="rowss q-pt-xl">
      <div class="head text-center">
        <h2 class="text-primary text-h4 q-pa-md text-weight-bold">
          Steps to enjoy an unlimited food supply.
        </h2>
        <p class="text-positive q-mx-md">
          Follow the instructions for a feeding plan that works.
        </p>
      </div>

      <Firstsec />
      <Secondsec />
      <Thirdsec />
    </div>
    <Mission />
    <How />
    <Plans />
    <Get id="get" />
    <!-- <Subscribe /> -->
    <!-- <Contact /> -->
    <Footer />
  </q-page>
</template>

<script>
import Hero from "../components/agrofood/Hero.vue";
// import BBoxes from "../components/BBoxes.vue";
import Firstsec from "../components/agrofood/Firstsec.vue";
import Secondsec from "../components/agrofood/Secondsec.vue";
import Thirdsec from "../components/agrofood/Thirdsec.vue";
import Mission from "../components/agrofood/Mission.vue";
import How from "../components/agrofood/How.vue";
import Plans from "../components/agrofood/Plans.vue";
// import Subscribe from "../components/Subscribe.vue";
// import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
import Get from "../components/Get.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Hero,
    Get,
    Firstsec,
    Secondsec,
    Thirdsec,
    Mission,
    How,
    Plans,
    // Subscribe,
    // Contact,
    Footer,
  },
});
</script>

<style scoped></style>
