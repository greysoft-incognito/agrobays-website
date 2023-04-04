<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md griid container">
      <div class="cards">
        <div class="one card">
          <i class="fa-solid fa-eye"></i>
          <h4 class="text-weight-bold text-primary q-mb-md">Vision</h4>
          <p>
            Attractive agriculture for everyone which leverages technology and
            mechanization for improved productivity and economic prosperity.
          </p>
        </div>
        <div class="one card">
          <i class="fa-solid fa-arrows-to-circle"></i>
          <h4 class="text-weight-bold text-primary q-mb-md">Mission</h4>
          <p>
            Promote technology driven and mechanized farming to attract young
            farmers, improve accuracy in decision making, mitigate risk and
            improve yield.
          </p>
        </div>
        <div class="one card">
          <i class="fa-solid fa-scale-balanced"></i>
          <h4 class="text-weight-bold text-primary q-mb-md">Vision</h4>
          <p>
            People <br />
            Innovation <br />
            Strategy <br />
            Abundance <br />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("vision"),
    };
  },
};
</script>

<style scoped>
.griid .cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
}

.griid .cards .card {
  text-align: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  min-height: 280px;
  padding: 2rem 1rem 1rem;
}

h4 {
  font-size: 25px;
  line-height: 1.2;
}

i {
  font-size: 3rem;
  color: #2b945b;
  margin-bottom: 1rem;
}

/* .griid img {
  object-fit: contain;
  width: 400px;
}

.griid img {
  animation: spin 4s infinite linearspin 4s infinite linear;
  -webkit-animation: spin 20s infinite linear;
} */

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@media (max-width: 600px) {
  .q-panel > div {
    height: 100%;
    width: 100%;
  }

  .griid {
    grid-template-columns: 1fr;
  }

  .q-card {
    min-height: 200px;
  }

  .griid img {
    object-fit: contain;
    width: 250px;
  }
}
</style>
