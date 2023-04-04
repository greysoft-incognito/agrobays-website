<template>
  <q-page class="">
    <div id="home" class="hero">
      <div class="wrapper">
        <div>Agrobays Crop Monitoring</div>
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
            <!-- <div class="title text-primary">{{ cropmonitoring.title }}</div> -->
            <p class="text">
              <span class="text-weight-bold">{{ cropmonitoring.topText }}</span>
              {{ cropmonitoring.text }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <section id="contributions" class="contributions serve max q-pt-xl">
      <div class="about">
        <h1 class="btn-12">Drone-Only Services for Crop Monitoring</h1>
      </div>
      <div class="services_contribution serve flexer">
        <div class="right">
          <img src="/images/droneimg.jpg" />
        </div>

        <div class="left">
          <ul>
            <li>
              Here are some ways in which Agrobays can carry out crop monitoring
              and management using drone only to help farmers master their
              cultivation and numbers.
            </li>
            <li>
              <i class="fa-solid fa-check"></i>
              <span>
                <span class="text-weight-bold"> Crop mapping:</span> The Mavic 2
                Pro can be used to capture aerial imagery of fields and crops,
                which can then be stitched together to create detailed crop
                maps. These maps can be used to identify areas of the field that
                may be underperforming or experiencing issues, and to plan more
                targeted crop management strategies.</span
              >
            </li>
            <li>
              <i class="fa-solid fa-check"></i>
              <span>
                <span class="text-weight-bold"> Crop health analysis: </span>
                The high-resolution camera on the Mavic 2 Pro can be used to
                capture detailed images of crops, which can then be analyzed to
                identify areas of the field that may be suffering from nutrient
                deficiencies, disease, or other issues. This information can be
                used to make targeted management decisions, such as applying
                fertilizer or pesticides only where needed.</span
              >
            </li>

            <div v-if="showMore">
              <li>
                <i class="fa-solid fa-check"></i>
                <span>
                  <span class="text-weight-bold">Yield estimation: </span>
                  By regularly monitoring crops with the Mavic 2 Pro, farmers
                  can gain a better understanding of their yield potential and
                  adjust their management strategies accordingly. This can help
                  farmers maximize their yield and profitability.</span
                >
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <span>
                  <span class="text-weight-bold">Irrigation management: </span>
                  The Mavic 2 Pro can be used to monitor soil moisture levels,
                  which can help farmers make more informed decisions about when
                  and how much to irrigate their crops. This can help conserve
                  water and improve crop yields.</span
                >
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <span>
                  <span class="text-weight-bold">Weed management: </span>
                  The Mavic 2 Pro can be used to identify and map areas of the
                  field that are infested with weeds, allowing farmers to target
                  those areas with herbicides or other management
                  strategies.</span
                >
              </li>
              <li>
                <span>
                  Overall, the Mavic 2 Pro can be a powerful tool for crop
                  monitoring and management, allowing farmers to gather
                  high-quality data and make more informed decisions about how
                  to manage their crops for maximum yield and
                  profitability.</span
                >
              </li>
            </div>

            <q-btn
              :label="showMore ? 'Show less' : 'Show more'"
              @click="showMore = !showMore"
              color="primary"
            />
          </ul>
        </div>
      </div>
    </section>

    <section id="contributions" class="contributions max q-pt-xl">
      <div class="about">
        <h1 class="btn-12">Services</h1>
      </div>
      <div class="services_contribution">
        <div class="left">
          <ul>
            <li>
              <i class="fa-solid fa-check"></i>
              <span>
                <span class="text-weight-bold">Identifying crop health:</span>
                By analyzing satellite images, it is possible to detect changes
                in vegetation health, including stress, disease, and nutrient
                deficiencies. This information can be used to identify problem
                areas in the field and take corrective action.
              </span>
            </li>
            <li>
              <i class="fa-solid fa-check"></i>
              <span>
                <span class="text-weight-bold"> Estimating crop yield:</span>
                Satellite images can be used to estimate crop yield potential by
                analyzing factors such as plant density, vegetation health, and
                environmental conditions.</span
              >
            </li>
            <li>
              <i class="fa-solid fa-check"></i>
              <span>
                <span class="text-weight-bold"> Tracking growth: </span>
                Satellites can be used to track crop growth over time, providing
                insight into how crops are developing and when they are ready
                for harvest.
              </span>
            </li>
          </ul>
        </div>
        <div class="right">
          <img src="/images/zoning.jpeg" />
        </div>
      </div>
      <div class="services_contribution flexer">
        <div class="right">
          <img src="/images/fertilizer.jpeg" />
        </div>

        <div class="left">
          <ul>
            <li>
              <i class="fa-solid fa-check"></i>
              <span>
                <span class="text-weight-bold"> Mapping soil moisture:</span> By
                analyzing satellite images, it is possible to map soil moisture
                levels, which can help farmers make decisions about irrigation
                and water management.</span
              >
            </li>
            <li>
              <i class="fa-solid fa-check"></i>
              <span>
                <span class="text-weight-bold"> Monitoring weather: </span>
                Satellite data can also be used to monitor weather patterns,
                including temperature, precipitation, and cloud cover, which can
                help farmers make decisions about planting, harvesting, and
                other farm activities.</span
              >
            </li>
          </ul>
        </div>
      </div>
    </section>
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
      showMore: false,
      cropmonitorings: [
        {
          image: "/images/drone.jpg",
          title: " Seedling Monitoring",
          topText: "Our drones and Satellite imaging system",
          text: " offer farmers a powerful tool for monitoring crop health and identifying potential issues before they become major problems. By using drone data, farmers can make more informed decisions about crop management, leading to higher yields and healthier crops. Our NDVI Mapping: Drones can capture images of crops using specialized cameras that can measure the Normalized Difference Vegetation Index (NDVI). NDVI is a measure of the amount of live vegetation in an area, and it can be used to identify areas of a crop that are under stress. In addition, thermal cameras mounted on our drones can detect variations in temperature across a crop, which can indicate areas that are experiencing stress or disease. Our Multispectral cameras can capture images of crops in multiple wavelengths of light, allowing farmers to identify specific issues like nutrient deficiencies, water stress, or pest infestations and our drones can be used to collect data on soil moisture, nutrient levels, and other environmental factors, which can be used to create a detailed map of the field. This information can then be used to guide precision farming practices, such as variable-rate fertilizer application.",
        },
        {
          image: "/images/farmers.jpeg",
          title: " Cold stress",
          topText: "Farmers are the primary beneficiaries",
          text: " of Agrobays crop monitoring services. By providing detailed and up-to-date information about their crops, farmers can make better-informed decisions about when to water, fertilize, and harvest their crops. This can lead to increased yields and profits for farmers, as well as more sustainable farming practices.",
        },
        {
          image: "/images/insure.jpeg",
          title: "A researcher",
          topText: "Agricultural insurance companies",
          text: " also benefit from Agrobays services. By monitoring crop growth and health, Agrobays can provide insurers with more accurate information about the risks associated with insuring certain crops. This can help insurers to better manage their risks and offer more competitive insurance products to farmers.",
        },
        {
          image: "/images/ngo.jpeg",
          title: " Weather data",
          topText: "Government agencies and NGOs",
          text: " also benefit from Agrobays crop monitoring services. By providing detailed information about crop growth and health, Agrobays can help these organizations to identify areas of potential food insecurity and target their aid and development programs more effectively. Overall, Agrobays; crop monitoring services have the potential to revolutionize the way that we grow and manage crops. By providing farmers, insurers, and other stakeholders with more accurate and timely information about crop growth and health, Agrobays is helping to create a more sustainable and resilient agricultural industry.",
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
  height: 85%;
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
  max-width: 100% !important;
  object-fit: cover !important;
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
  gap: 2rem;
  margin: 2.5rem 0;
}

.about .about_wrapper img {
  border-radius: 10px;
}

/* publications */

.services_contribution {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;
  margin-top: 2rem;
}
.services_contribution.serve {
  align-items: flex-start;
}
.services_contribution.serve img {
  border-radius: 10px;
}

.services_contribution img {
  width: 100%;
  max-width: 100% !important;
}

.services_contribution li {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0.5rem 0;
  font-size: 1rem;
}
.services_contribution i {
  background: #2b945b;
  color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
}

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
  font-size: 25px;
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
.contributions.serve .about h1 {
  width: auto;
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
  border: 10px solid #2b945b;
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
  background: #2b945b;
  border-color: #111;
  box-shadow: 0 0 0 3px #2b945b;
}

.awesome-list-item:nth-child(1) > span {
  background: #2b945b;
}

.awesome-list-item:nth-child(2)::before {
  background: #2b945b;
  border-color: #111;
  box-shadow: 0 0 0 3px #2b945b;
}

.awesome-list-item:nth-child(2) > span {
  background: #2b945b;
}

.awesome-list-item:nth-child(3)::before {
  background: #2b945b;
  border-color: #111;
  box-shadow: 0 0 0 3px #2b945b;
}

.awesome-list-item:nth-child(3) > span {
  background: #2b945b;
}

.awesome-list-item:nth-child(4)::before {
  background: #2b945b;
  border-color: #111;
  box-shadow: 0 0 0 3px #2b945b;
}
.awesome-list-item:nth-child(4) > span {
  background: #2b945b;
}
.awesome-list-item:nth-child(5)::before {
  background: #2b945b;
  border-color: #111;
  box-shadow: 0 0 0 3px #2b945b;
}
.awesome-list-item:nth-child(5) > span {
  background: #2b945b;
}

.awesome-list-item:nth-child(6)::before {
  background: #2b945b;
  border-color: #111;
  box-shadow: 0 0 0 3px #2b945b;
}
.awesome-list-item:nth-child(6) > span {
  background: #2b945b;
}

.awesome-list-item:nth-child(7)::before {
  background: #2b945b;
  border-color: #111;
  box-shadow: 0 0 0 3px #2b945b;
}
.awesome-list-item:nth-child(7) > span {
  background: #2b945b;
}
.awesome-list-item:nth-child(8)::before {
  background: #2b945b;
  border-color: #111;
  box-shadow: 0 0 0 3px #2b945b;
}
.awesome-list-item:nth-child(8) > span {
  background: #2b945b;
}

.awesome-list-item:nth-child(9)::before {
  background: #2b945b;
  border-color: #111;
  box-shadow: 0 0 0 3px #2b945b;
}
.awesome-list-item:nth-child(9) > span {
  background: #2b945b;
}

.awesome-list-item:nth-child(10)::before {
  background: #2b945b;
  border-color: #111;
  box-shadow: 0 0 0 3px #2b945b;
}
.awesome-list-item:nth-child(10) > span {
  background: #2b945b;
}

.awesome-list-item:nth-child(11)::before {
  background: #2b945b;
  border-color: #111;
  box-shadow: 0 0 0 3px #2b945b;
}
.awesome-list-item:nth-child(11) > span {
  background: #2b945b;
}

.awesome-list-item:nth-child(12)::before {
  background: #2b945b;
  border-color: #111;
  box-shadow: 0 0 0 3px #2b945b;
}
.awesome-list-item:nth-child(12) > span {
  background: #2b945b;
}
.awesome-list-item:nth-child(13)::before {
  background: #2b945b;
  border-color: #111;
  box-shadow: 0 0 0 3px #2b945b;
}
.awesome-list-item:nth-child(13) > span {
  background: #2b945b;
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
  /* width: 200px; */
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

@media (max-width: 1025px) {
  .about {
    max-width: 900px;
  }
}

@media (max-width: 1024px) {
  .hero .wrapper {
    height: 90%;
  }
  .hero .wrapper > div {
    font-size: 50px;
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
    height: 85%;
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

  .services_contribution {
    grid-template-columns: 1fr;
  }

  .flexer {
    display: flex;
    flex-direction: column-reverse;
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
    height: 70%;
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
