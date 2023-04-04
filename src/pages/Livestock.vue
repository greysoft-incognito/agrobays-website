<template>
  <HeroHomes
    title="Livestock"
    background="/images/farmbg.jpeg"
    desc="Our community of farmers are trained for best farming practice to
          leverage technology and mechanization for improved yield."
  />
  <!-- <Secondsecfarm class="q-mt-xl" />
  <Firstsec /> -->
  <div id="about" class="about max">
    <div class="">
      <!-- <h1>About Me</h1> -->

      <div class="about_wrapper">
        <div class="about_img">
          <img src="/images/cow.jpeg" alt="" />
        </div>
        <div class="about_text">
          <div class="title text-primary">Livestock Farm</div>
          <p class="text">
            Agrobays has various livestock farms of small rumnants, piggery,
            poultry and cattles that are grown for meat, diary, eggs and
            leather. Our patnership with global agric institutioins has helped
            us maintain international best practices and a constant remarkable
            high productivity.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="headd">
    <h2 class="text-primary q-mt-lg text-weight-bold text-center">Our Farm</h2>
    <Farmthree />
  </div> -->
  <Join />
  <!-- <Invest /> -->
  <!-- <Sponsors /> -->

  <Footer />
</template>

<script>
import HeroHomes from "../components/HeroHomes.vue";
import Innovative from "../components/Agrofarms/Innovative.vue";
import Farmthree from "../components/Agrofarms/Farmthree.vue";
import Join from "../components/agrobase/Join.vue";
import Invest from "../components/agrobase/Invest.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    HeroHomes,
    Innovative,
    Farmthree,
    Invest,
    Join,
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
</style>
