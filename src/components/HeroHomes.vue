<template>
  <div :style="`background: url(${background})`" class="q-pa-md home">
    <div class="row align-c text-c show">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <h2
          style="font-size: 50px"
          class="text-h3 q-my-lg text-weight-bold text-center text-secondary"
        >
          {{ title }}
        </h2>

        <p class="text-center text-secondary q-mt-lg">
          {{ desc }}
        </p>

        <!-- <div class="input-email q-mt-lg">
          <div class="input q-px-lg">
            <input placeholder="Enter your email" type="text" />
            <button class="text-secondary">Register</button>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "desc", "background"],
};
</script>

<style scoped>
.home {
  position: relative;
  height: 80vh;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
  z-index: 1;
}

.show {
  position: relative;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.home::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  mix-blend-mode: multiply;
  opacity: 0.95;
  z-index: 1;
}

.align-c {
  display: flex;
  align-items: center;
}

p {
  max-width: 700px;
  margin: 0 auto;
}

h5 {
  line-height: 1.3;
}

.input-email {
  display: flex;
  justify-content: center;
}

.input-email .input {
  border-radius: 10px;
  border: 1px solid rgba(229, 229, 229, 0.4);
  background: #fff;
  padding: 0.65rem;
  width: 50%;
  display: flex;
  justify-content: space-between;
}

.input-email input {
  border: none;
  /* background: rgba(229, 229, 229, 0.4); */
  background: none;
}

.input-email button {
  border: none;
  background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%);
  padding: 0.75rem;
  font-size: 14px;
  border-radius: 8px;
}

.img {
  width: 90%;
}

@media (max-width: 400px) {
  .input-email .input {
    padding: 0.75rem;
  }

  .input-email button {
    padding: 0.45rem;
    border-radius: 8px;
  }
}

@media (max-width: 630px) {
  .text-c {
    text-align: center;
  }

  .input-email {
    margin: 0 auto;
  }

  .input-email .input {
    padding: 0.5rem;
    width: 100%;
    justify-content: space-around;
  }
  .input-email button {
    padding: 0.45rem;
    border-radius: 8px;
    font-size: 14px;
    min-width: 40%;
  }

  .input-email input {
    width: 50%;
  }
}
</style>
