<template>
  <div class="q-pa-md q-my-lg">
    <div class="row align-c text-c q-pt-xl container">
      <div class="col-md-6 q-pb-lg col-sm-6 col-xs-12">
        <h2
          style="font-size: 30px"
          class="text-h3 text-weight-bold text-primary"
        >
          Beyond Traditional Agriculture
        </h2>

        <p class="q-pr-lg q-mt-md">
          We are changing the face of agriculture in Africa! <br />
          Many young Africans see farming as a mundane practice because of the
          traditional ways of farm cultivation using hand tools. We are making
          farming and farm products attractive to the young African population
          through the inclusion of technology and mechanization.<span
            v-if="readMore"
          ></span>
          <span v-else>...</span> <br />
        </p>
        <p class="q-mt-sm tran q-pr-lg" v-show="readMore">
          Agrobays' AgroFoods specializes in the delivery of well-packaged food
          items and vegetables to subscribers; AgroFarms cultivates a variety of
          crops and livestocks through technology and mechanization across
          Nigeria and also leverage small holder farmers in an outgrowers
          scheme; The AgroTech arm focuses on Agric Technologies which includes
          drone technologies for application of herbicides, irrigation and
          survellance; Farm Riskbay, which forcasts the viability of crops to be
          farmed in a given geography; Farm Accessbay, a platform which provides
          access to buyers of farm products, as well as resources such as;
          warehouses, tractors, fertilizers, herbicides, labour farm technology
          and Farm Trackbay which helps farm project managers track farm
          activities anywhere, from onboarding to conclusion.
        </p>

        <button class="btnn btn-success" @click="readMore = !readMore">
          <span v-if="readMore">Read Less</span>
          <span v-else>Read More</span>
        </button>
        <div class="btns">
          <!-- <button class="text-secondary btn">Get started</button>
          <button class="bg-secondary text-primary btn btn-white">
            View More
          </button> -->
          <q-btn class="btn2 btn btn-green" to="">Get Started</q-btn>
          <q-btn class="btn2 btn btn-white" to="">View More</q-btn>
        </div>
      </div>
      <div class="col q-px-lg col-md-6 col-sm-6 col-xs-12 text-center">
        <img
          src="https://img.freepik.com/free-photo/full-shot-smiley-woman-holding-tablet_23-2149894712.jpg?size=626&ext=jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      readMore: false,
    };
  },
};
</script>

<style scoped>
.btnn {
  border: none;
  background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%);
  padding: 6px 14px 6px 14px;
  border-radius: 8px;
  font-size: 12px;
  color: #fff;
}
.tran {
  transition: all 0.5s ease-in-out;
}

img {
  height: 350px;
  border-radius: 10px;
  object-fit: cover;
}

.align-c {
  display: flex;
  align-items: center;
}

.btn {
  color: #2b945b;
  border: none;
  padding: 16px 24px 16px 24px;
  margin: 1rem;
  border-radius: 8px;
  margin: 0.55rem 0;
}

.btns {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn-white {
  margin-left: 1rem;
  border: 1px solid #2b945b;
}

.btn-green {
  color: #fff;
  background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%);
}

.btn2::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #000;
  -webkit-transform: scaleY(0.3);
  transform: scaleY(0.3);
  opacity: 0;
  transition: all 0.3s;
}

.btn2 {
  -webkit-transition: all 1s cubic-bezier(0.5, 0.24, 0, 1);
  transition: all 1s cubic-bezier(0.5, 0.24, 0, 1);
}
.btn-green.btn2:hover {
  color: #2b945b;
  background: #fff;
}
.btn-white.btn2:hover {
  background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%);
  color: #fff;
}
.btn2:hover::before {
  opacity: 1;
  background-color: #fff;
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
  transition: -webkit-transform 0.1s cubic-bezier(0.08, 0.35, 0.13, 1.02),
    opacity 0.4s;
  transition: transform 0.1s cubic-bezier(0.08, 0.35, 0.13, 1.02), opacity;
}

@media (max-width: 520px) {
  .text-c {
    text-align: center;
  }

  .btns {
    justify-content: center;
  }
}
</style>
