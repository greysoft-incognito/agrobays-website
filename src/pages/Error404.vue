<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center">
    <div class="error">
      <!-- <h1 class="code">{{ code }}</h1> -->
      <img
        src="/images/404.svg"
        width="300"
      />
      <h2 class="desc">{{ message }}</h2>
      <q-btn
        class="home"
        color="white"
        text-color="primary"
        unelevated
        to="/dashboard"
        label="Go Home"
        no-caps
      />
    </div>

    <!-- <div>
      <div style="font-size: 30vh">
        {{code}}
      </div>

      <div
        class="text-h2"
        style="opacity:.4"
      >
        {{message}}
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/dashboard"
        label="Go Home"
        no-caps
      />
    </div> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Error404",
  data () {
    return {
      message: "Oops. Nothing here...",
      code: 404,
      current: "",
    };
  },
  created () {
    const get404 = this.$store.getters.get404;
    if (get404.isset) {
      this.message = get404.message;
      this.current = get404.current;
    }
  },
});
</script>
<style scoped>
body {
  font-family: "Arvo", serif;
  background: #abcdef;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  transition: 1s;
}

.home {
  padding: 1rem;
  margin: 1.5rem 0;
}
.error {
  color: #20293f;
  box-shadow: 0 5px 0px -2px #20293f;
  text-align: center;
  animation: fadein 1.2s ease-in;
}
.error > .code {
  font-size: 10.5em;
  text-shadow: 0 6px 1px rgba(0, 0, 0, 0.0980392),
    0 0 5px rgba(0, 0, 0, 0.0980392), 0 1px 3px rgba(0, 0, 0, 0.298039),
    0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.247059),
    0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.14902);
  margin: 0;
}
.error > .desc {
  text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5), 0px 6px 20px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  margin: 3rem 0 1rem;
}
@keyframes fadein {
  0% {
    margin-top: -50px;
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
footer {
  position: absolute;
  bottom: 0px;
}
</style>
