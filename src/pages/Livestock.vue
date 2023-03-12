<template>
  <HeroHomes
    title="Livestock"
    background="https://img.freepik.com/free-photo/cow-bulls-cowshed-farm_1303-30828.jpg?w=1800&t=st=1678255225~exp=1678255825~hmac=d54c7d8ec89c842c6bcb2473cf09618ca84da026fb722a4e9ccbf1ac008853f3"
    desc="Our community of farmers are trained for best farming practice to
          leverage technology and mechanization for improved yield."
  />
  <Secondsecfarm class="q-mt-xl" />
  <Firstsec />
  <div class="headd">
    <h2 class="text-primary q-mt-lg text-weight-bold text-center">Our Farm</h2>
    <Farmthree />
  </div>
  <Join />
  <!-- <Invest /> -->
  <!-- <Sponsors /> -->

  <Footer />
</template>

<script>
import HeroHomes from "../components/HeroHomes.vue";
import Innovative from "../components/Agrofarms/Innovative.vue";
import Secondsecfarm from "../components/Agrofarms/Secondsecfarm.vue";
import Firstsec from "../components/Agrofarms/Firstsec.vue";
import Farmone from "../components/Agrofarms/Farmone.vue";
import Farmtwo from "../components/Agrofarms/Farmtwo.vue";
import Farmthree from "../components/Agrofarms/Farmthree.vue";
import Farmfour from "../components/Agrofarms/Farmfour.vue";
import Join from "../components/agrobase/Join.vue";
import Invest from "../components/agrobase/Invest.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    HeroHomes,
    Innovative,
    Secondsecfarm,
    Firstsec,
    Farmone,
    Farmtwo,
    Farmthree,
    Farmfour,
    Invest,
    Join,
    Footer,
  },
};
</script>

<style scoped>
img {
  width: 70%;
  object-fit: contain;
  border-radius: 20px;
}

hr {
  width: 100%;
  height: 100px;
  border: solid 2px #2b945b;
  border-color: #2b945b transparent transparent transparent;
  border-radius: 50%/100px 100px 0 0;
}
</style>
