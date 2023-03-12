<template>
  <q-page class="">
    <div id="home" class="hero">
      <div class="wrapper">
        <div>EOS Crop Monitoring</div>
        <p class="job">
          Agrobays Crop Monitoring uses a number of algorithms that allow us to
          analyze the resulting data from drones and satellite images for any
          required aspect of farming for effective decision making towards
          attaining improved and maximal yield...
        </p>
      </div>
    </div>

    <div id="about" class="about max">
      <div class="">
        <!-- <h1>About Me</h1> -->

        <div
          v-for="(cropmonitoring, index) in cropmonitorings"
          :key="index"
          class="about_wrapper"
        >
          <div class="about_img">
            <img :src="cropmonitoring.image" alt="" />
          </div>
          <div class="about_text">
            <div class="title">{{ cropmonitoring.title }}</div>
            <p class="text">
              {{ cropmonitoring.text }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <section id="contributions" class="contributions max q-pt-xl">
      <div class="about">
        <h1 class="btn-12">For Whom ?</h1>
      </div>
      <div class="wrapper_contrubutions">
        <div class="box first">
          <h2>Farmers</h2>
        </div>
        <div class="box second">
          <h2>Investors</h2>
        </div>
        <div class="box third">
          <h2>Insurers</h2>
        </div>
        <div class="box fourth">
          <h2>Traders</h2>
        </div>
        <div class="box fifth">
          <h2>Producers</h2>
        </div>
        <div class="box sixth">
          <h2>IT companies</h2>
        </div>
      </div>
    </section>

    <section id="professional" class="publications">
      <div class="about">
        <h1>Benefits</h1>

        <section class="awesome-list">
          <div class="awesome-list-item">
            <span>Cost-efficient entry into the smart farming trend.</span>
          </div>
          <div class="awesome-list-item">
            <span>Effective decision-making with satellite data.</span>
          </div>
          <div class="awesome-list-item">
            <span>Increasing profits from your fields. </span>
          </div>
          <div class="awesome-list-item">
            <span>Reduction of scouting costs.</span>
          </div>
          <div class="awesome-list-item toggle">
            <span>Advanced problem-spotting within your fields.</span>
          </div>
          <div class="awesome-list-item toggle-active">
            <span>Precise weather predictions.</span>
          </div>
          <div class="awesome-list-item toggle-active">
            <span>Determine which are your most productive fields.</span>
          </div>
          <div class="awesome-list-item toggle-active">
            <span>24/7 access to your fields from anywhere at anytime.</span>
          </div>
        </section>

        <div class="download_btn_cv q-mt-xl text-center">
          <button @click="seeMore" class="custom-btn btn-12">
            <span>See more Benefits</span><span>See more Benefits </span>
          </button>
        </div>
      </div>
    </section>

    <Footer />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Footer from "../components/Footer.vue";
export default defineComponent({
  name: "IndexPage",
  components: {
    Footer,
  },

  data() {
    return {
      load: false,
      cropmonitorings: [
        {
          image:
            "https://img.freepik.com/free-photo/closeup-biologist-researcher-holding-hands-vegan-beef-meat-sample_482257-4542.jpg?size=626&ext=jpg",
          title: " Seedling Monitoring",
          text: "Environmental factors often limit plant establishment and survival through increased seedling mortality. Understanding plant growth and the causes of mortality can be helpful in developing solutions that enhance seeding success and improve restoration monitoring. The purpose of our research was to assess the efficacy of time lapse and motion sensing cameras for monitoring seedling height, density, and fate. We conducted this study in a salt desert shrub community in northwest Utah, USA. In spring 2017, we placed 28 cameras in fenced and unfenced plots seeded with bottlebrush squirreltail and collected hourly images of the seedlings’ development for the initial four months post-seeding. ",
        },
        {
          image:
            "https://img.freepik.com/free-vector/earth-structure-infographic_23-2148415580.jpg?size=626&ext=jpg",
          title: " Cold stress",
          text: "Low temperature or cold stress is one of the major abiotic stresses for bean seeds production. The objective of this study was to analyze the effect of cold stress on Phaseolusvulgaris l seeds by doing different types of tests(germination studies, respiration response, conductivity test, amylase and catalase test) at different temperatures like room temperature, at 3° C and at - 19° C. Seeds were germinated in germination box. Germination percentage, rate, seed vigour and germination index was measured. Respiration response was also analyzed. The procedure does not quantify a respiration rate, but it indicates that respiration rate can be compared across different treatments. Observation from conductivity measurement shows that leachate solution of -19° C gives low conductivity whereas 3° C gives moderate and at normal room temperature it was high.",
        },
        {
          image:
            "data:image/jpeg;base64,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",
          title: "A researcher",
          text: "In Central and Eastern Europe, long-standing crop growing practices rely on minerals from NPK fertilizers to improve land productivity and maximize yields. However, mineral nutrients’ effectiveness rarely goes beyond 40–60%, decreasing even more from repeated droughty periods. Moreover, irrational fertilization leaves a negative footprint on the environment. Luckily, today’s agriculture can opt for innovative practices allowing farmers to achieve higher yields while applying fewer chemicals. The only hindrance is farmers and agronomists’ conservatism preventing them from making a leap to sustainable agriculture methods and technologies.",
        },
        {
          image:
            "https://img.freepik.com/free-vector/illustration-computer-hacking-code_53876-37633.jpg?w=2000&t=st=1678269220~exp=1678269820~hmac=555b4ba45477621780b85be00fa62704759b26ffdc5a8afa5807632fdddd83c5",
          title: " Weather data",
          text: "Daily updated weather forecasts (precipitation, air temperature, the sum of average temperatures, humidity, wind speed, snow depth). Available resolution: 6.5 х 6.5 km Access to historical weather data archives (precipitation, temperatures, humidity, wind speeds, snow depth) Analysis of 'critical' weather conditions for crops to prevent harvest losses (Cold stress, Heat stress)",
        },
        {
          image:
            "https://img.freepik.com/free-vector/earth-core-structure-composition_1284-64912.jpg?size=626&ext=jpg",
          title: "Zoning",
          text: "Productivity map ● Flexibility for the customization of zoning settings ● Fertilizer application map ● Ability to identify optimal sowing period ● Fertilizer application recommendations ● Data support for top agricultural machinery manufacturer terminals. From the perspective of development trend, the application prospect of high-resolution EOS is very extensive. We believe that more and more new high-resolution EOSs will be launched in the near future. Moreover, the application achievements of high-resolution EOS have been very rich at this stage. Therefore, this multidisciplinary topic aims to invite scholars to publish articles on the latest progress and the development trends of high-resolution EOSs, technologies, and applications.",
        },
      ],
    };
  },

  methods: {
    seeMore() {
      const toggleActives = document.querySelectorAll(".toggle-active");
      toggleActives.forEach((item) => {
        item.classList.toggle("show");
        if (!item.classList.contains("show")) {
          document
            .getElementById("professional")
            .scrollIntoView({ behavior: "smooth" });
        }
      });
    },
  },
});
</script>

<style scoped>
.hero {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: flex-end;
  background: url("https://img.freepik.com/free-vector/satellite-space-scene_1308-31304.jpg?size=626&ext=jpg")
    no-repeat center center/cover;
  position: relative;
  padding-bottom: 8rem;
}
.hero::before {
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
}

.hero .wrapper img {
  width: 60%;
  border-radius: 10px;
}

.hero .wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 75%;
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;
}

p.hi {
  color: black;
  font-size: 1.4rem;
  margin-top: 2rem;
  text-align: left;
  text-align: center;
}

.hero .wrapper > div {
  color: #ffffff;
  font-size: 4.2rem;
  font-weight: 700;
  line-height: 1;
  margin: 1rem 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

p.job {
  color: aliceblue;
  font-size: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

p.about_text,
p.by {
  color: black;
  font-size: 1rem;
  font-size: 12px;
  padding: 0.45rem;
  border-radius: 10px;
}

.addpad {
  padding: 7rem 0 2rem;
}
.about {
  max-width: 1000px;
  margin: 0 auto;
}

.about_img {
  height: 100%;
}
.about_img img {
  height: 100%;
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
  align-items: flex-start;
  grid-template-columns: 2fr 4fr;
  gap: 3rem;
  margin: 2.5rem 0;
}

.about .about_wrapper img {
  border-radius: 10px;
}

/* publications */

.publications {
  padding: 6rem 0;
}
.wrapper_contrubutions {
  max-width: 744px;
  margin: 3rem auto 2rem;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.wrapper_contrubutions .box {
  width: 90%;
  height: 100px;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  place-items: center;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
}
.wrapper_contrubutions .box:hover {
  transform: scale(1.1);
}
.wrapper_contrubutions .box h2 {
  line-height: 1.2;
  font-size: 30px;
}
.wrapper_contrubutions .box p {
  font-weight: 700;
}

.wrapper_contrubutions .box.first {
  background: #0b6623;
}
.wrapper_contrubutions .box.second {
  background: #1da1f2;
}
.wrapper_contrubutions .box.third {
  background: #f56040;
}
.wrapper_contrubutions .box.fourth {
  background: #0077b5;
}
.wrapper_contrubutions .box.fifth {
  background: #e71989;
}
.wrapper_contrubutions .box.sixth {
  background: grey;
}

.contributions .about h1 {
  width: 350px;
}

.contributions {
  padding: 7rem 0 2rem;
  width: 80%;
  margin: 0 auto;
  position: relative;
}

.about h1 {
  font-size: 50px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 auto 2rem;
  text-align: center;
}
.awesome-list {
  /* Create a new instance of a counter called "my-awesome-list" and set the counter to 0. */
  counter-reset: my-awesome-list;
  vertical-align: middle;
  max-width: 744px;
  margin: 1rem auto 0;
  position: relative;
}

.awesome-list-item {
  /* Increment the "my-awesome-list" counter for every list item. */
  counter-increment: my-awesome-list;
  margin: 1em 0;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}

.awesome-list-item::before {
  /* Display the counter and set the list style for the list. */
  content: counter(my-awesome-list, decimal-leading-zero);
  background: #fff;
  border: 10px solid #111;
  border-radius: 50%;
  color: #fff;
  display: inline-block;
  font-weight: bold;
  font-size: 1.8em;
  line-height: 2.6em;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 100px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.list-intro > h1 {
  font-size: 1.4em;
}

.awesome-list-item > span {
  background: #8e44ad;
  border-radius: 4px;
  color: #fff;
  display: inline-block;
  width: 100%;
  position: relative;
  line-height: 2em;
  margin: 0 0 0 -2em;
  padding: 1.2em 2em 1.2em 3em;
  vertical-align: middle;
}

.awesome-list-item > span::after {
  background: transparent;
  content: "";
  position: absolute;
  top: 24%;
  right: 2%;
  width: 50%;
  height: 50%;
  max-width: 300px;
  z-index: -1;
  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.4);
  transform: rotate(3deg);
}

.awesome-list-item:nth-child(1)::before {
  background: #333;
  border-color: #111;
  box-shadow: 0 0 0 3px #333;
}

.awesome-list-item:nth-child(1) > span {
  background: #333;
}

.awesome-list-item:nth-child(2)::before {
  background: #333;
  border-color: #111;
  box-shadow: 0 0 0 3px #333;
}

.awesome-list-item:nth-child(2) > span {
  background: #333;
}

.awesome-list-item:nth-child(3)::before {
  background: #333;
  border-color: #111;
  box-shadow: 0 0 0 3px #333;
}

.awesome-list-item:nth-child(3) > span {
  background: #333;
}

.awesome-list-item:nth-child(4)::before {
  background: #333;
  border-color: #111;
  box-shadow: 0 0 0 3px #333;
}
.awesome-list-item:nth-child(4) > span {
  background: #333;
}
.awesome-list-item:nth-child(5)::before {
  background: #333;
  border-color: #111;
  box-shadow: 0 0 0 3px #333;
}
.awesome-list-item:nth-child(5) > span {
  background: #333;
}

.awesome-list-item:nth-child(6)::before {
  background: #333;
  border-color: #111;
  box-shadow: 0 0 0 3px #333;
}
.awesome-list-item:nth-child(6) > span {
  background: #333;
}

.awesome-list-item:nth-child(7)::before {
  background: #333;
  border-color: #111;
  box-shadow: 0 0 0 3px #333;
}
.awesome-list-item:nth-child(7) > span {
  background: #333;
}
.awesome-list-item:nth-child(8)::before {
  background: #333;
  border-color: #111;
  box-shadow: 0 0 0 3px #333;
}
.awesome-list-item:nth-child(8) > span {
  background: #333;
}

.awesome-list-item:nth-child(9)::before {
  background: #333;
  border-color: #111;
  box-shadow: 0 0 0 3px #333;
}
.awesome-list-item:nth-child(9) > span {
  background: #333;
}

.awesome-list-item:nth-child(10)::before {
  background: #333;
  border-color: #111;
  box-shadow: 0 0 0 3px #333;
}
.awesome-list-item:nth-child(10) > span {
  background: #333;
}

.awesome-list-item:nth-child(11)::before {
  background: #333;
  border-color: #111;
  box-shadow: 0 0 0 3px #333;
}
.awesome-list-item:nth-child(11) > span {
  background: #333;
}

.awesome-list-item:nth-child(12)::before {
  background: #333;
  border-color: #111;
  box-shadow: 0 0 0 3px #333;
}
.awesome-list-item:nth-child(12) > span {
  background: #333;
}
.awesome-list-item:nth-child(13)::before {
  background: #333;
  border-color: #111;
  box-shadow: 0 0 0 3px #333;
}
.awesome-list-item:nth-child(13) > span {
  background: #333;
}

.toggle-active {
  display: none;
}
.toggle-active.show {
  display: flex;
}

@keyframes bounce-in {
  0% {
    opacity: 0.8;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes hithere {
  30% {
    transform: scale(1.1);
  }
  40%,
  60% {
    transform: rotate(-20deg) scale(1.1);
  }
  50% {
    transform: rotate(20deg) scale(1.1);
  }
  70% {
    transform: rotate(0deg) scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.btn-12 {
  position: relative;
  bottom: 20px;
  border: none;
  box-shadow: none;
  width: 200px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
  cursor: pointer;
}
.btn-12 span {
  background: #000;
  color: #fff;

  display: block;
  position: absolute;
  width: 200px;
  height: 40px;
  box-shadow: inset 2px 2px 2px 2px rgba(255, 255, 255, 0.5),
    7px 7px 20px 2px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.btn-12 span:nth-child(1) {
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12 span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12:hover span:nth-child(1) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
.btn-12:hover span:nth-child(2) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}

@media (max-width: 1024px) {
  .hero .wrapper {
    height: 90%;
  }
  .hero .wrapper > div {
    font-size: 3.7rem;
    margin: 0.5rem 0;
  }

  .hero .wrapper img {
    width: 60%;
  }

  p.job {
    color: aliceblue;
    font-size: 1.3rem;
  }

  p.hi {
    margin-top: 1rem;
    font-size: 1.3rem;
  }

  .hero {
    background-position: 80%;
  }
}
@media (max-width: 1015px) {
  .hero .wrapper {
    height: 75%;
  }
}
@media (max-width: 900px) {
  .hero .wrapper {
    width: 90%;
    margin: 0 auto;
  }

  .publications {
    padding: 0 0 2rem;
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
@media (max-width: 500px) {
  .hero {
    height: 85vh;
    padding-bottom: 0rem;
  }
  .contributions .about h1 {
    width: 280px;
    max-width: 300px;
  }
  .contributions {
    padding: 4rem 0 5rem;
  }

  .wrapper_contrubutions {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  p.job {
    font-size: 1rem;
  }

  .about p.intro {
    font-size: 16px;
  }
  .hero .wrapper {
    padding: 0;
    text-align: left;
    height: 65%;
  }
  .hero .wrapper > div {
    font-size: 2rem;
  }

  p.hi {
    text-align: left;
  }

  .hero .wrapper img {
    width: 100%;
  }

  .one h1 {
    font-size: 25px;
  }

  .about {
    width: 90%;
    margin: 1rem auto;
  }

  .awesome-list {
    width: 90%;
  }

  .awesome-list-item > span {
    line-height: 1.6;
  }

  .awesome-list-item::before {
    width: 70px;
    height: 60px;
    font-size: 1em;
  }
}

@media (max-width: 300px) {
  .about p.intro {
    font-size: 15px;
  }

  .about h1 {
    width: 200px !important;
    font-size: 23px;
  }
}
</style>
