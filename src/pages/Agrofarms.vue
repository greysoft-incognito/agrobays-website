<template>
  <HeroHomes
    title="AgroFarms"
    background="/images/agrofarm1.jpeg"
    desc="Our community of farmers are trained for best farming practice to
          leverage technology and mechanization for improved yield."
  />

  <Innovative />

  <div id="about" class="about max">
    <div class="">
      <div class="about_wrapper">
        <div class="about_img">
          <img src="/images/agrofarm3.png" alt="" />
        </div>
        <div class="about_text">
          <div class="title text-primary">Ginger Farm</div>
          <p class="text">
            Our ginger, situated across southern Kaduna, Nothern Nigeria is
            well-priced because of its flavour and neatness. We ensure that our
            yields are Aflatoxin free and this has secured access to global
            markets and create demands from more global regions. Premium pre and
            post harvest handlng of the produce presents us a Grade-A product,
            which are marketed as wet or dry ginger.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div id="about" class="about max">
    <div class="">
      <div class="about_wrapper">
        <div class="about_img">
          <img src="/images/agrofarm1.png" alt="" />
        </div>
        <div class="about_text">
          <div class="title text-primary">Small Holder Farmers (SMH)</div>
          <p class="text">
            Small Holder Farmers (SMH) constitute the majority of farmers in
            Sub-Saharan Africa with handkerchief sized farms designed to feed
            their immediate families. We have engaged in training programs for
            farmers on the need for the practice of large scale farming and the
            benefits of cooperatives in accessing larger markets. Our myriads of
            SMFs enroll annually in our various out growers scheme projects to
            farm a variety of crops for local and global markets.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div id="about" class="about max">
    <div class="">
      <div class="about_wrapper">
        <div class="about_img">
          <img src="/images/agrofarm2.png" alt="" />
        </div>
        <div class="about_text">
          <div class="title text-primary">Inclusive Farming</div>
          <p class="text">
            As part of our community sensitization program, we continuously
            advocate for women to farm alongside men for an all-inclusive
            economic development. Agrobays is largely a women-driven farming
            community and this is quite unique because the level of innovation
            that breeds excellence and constant annual productivety.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- <Farmone /> -->
  <!-- <Secondsecfarm /> -->
  <!-- <Firstsec /> -->

  <!-- <hr /> -->
  <!-- <div class="headd">
    <h2 class="text-primary q-mt-xl text-weight-bold text-center">Our Farms</h2>

    <Farmtwo class="q-mt-xl" />
    <Farmthree />
    <Farmfour />
  </div> -->
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
import Sponsors from "../components/agrobase/Sponsors.vue";
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
    Sponsors,
    Footer,
  },
};
</script>

<style scoped>
.about {
  max-width: 1000px;
  margin: 0 auto;
}

.about_img {
  height: 100%;
}
.about_img img {
  height: 100%;
  max-width: 100% !important;
}
.about p.intro {
  font-size: 18px;
  text-align: center;
  margin: 4rem 0 0;
  color: #000;
}

.about .about_text > div.title {
  color: #000;
  /* color: #000; */
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 1rem;
}
.about .about_text p.text {
  color: #000;
  font-weight: normal;
  font-size: 24px;
  line-height: 1.45;
  font-style: normal;
  font-size: 100%;
}
.about .about_wrapper {
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 4fr;
  gap: 3rem;
  margin: 2.5rem 0;
}
.about .about_wrapper.kind {
  display: grid;
  align-items: center;
  grid-template-columns: 4fr 2fr;
  gap: 3rem;
  margin: 2.5rem 0;
}

.about .about_wrapper img {
  border-radius: 10px;
}
@media (max-width: 1025px) {
  .about {
    max-width: 900px;
  }
}
@media (max-width: 800px) {
  .about {
    width: 70%;
  }
  .about .about_wrapper {
    grid-template-columns: 1fr;
  }
}

hr {
  width: 100%;
  height: 100px;
  border: solid 2px #2b945b;
  border-color: #2b945b transparent transparent transparent;
  border-radius: 50%/100px 100px 0 0;
}
</style>
