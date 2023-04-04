<template>
  <q-layout view="lHh Lpr lFf">
    <header class="header q-px-sm" data-header>
      <div class="container">
        <router-link to="/" class="logo">
          <!-- <h1 class="h1 text-weight-bold">RO.</h1> -->
          <img class="logo q-pl-md" src="/images/agro.png" />
        </router-link>

        <nav class="navbar" data-navbar>
          <div class="navbar-top">
            <router-link to="/" class="logo">
              <img class="logo q-pl-md" src="/images/agrologo.jpeg" />
            </router-link>

            <button
              class="nav-close-btn"
              aria-label="close menu"
              data-nav-toggler
              @click="untoggleNav"
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <ul class="navbar-list">
            <li>
              <router-link to="/" class="navbar-link" data-nav-link>
                Home
              </router-link>
            </li>

            <li>
              <router-link to="/agrofoods" class="navbar-link" data-nav-link>
                Agrofoods
              </router-link>
            </li>

            <li>
              <router-link to="/livestock" class="navbar-link" data-nav-link>
                Livestock
              </router-link>
            </li>

            <li>
              <router-link to="/agrofarms" class="navbar-link" data-nav-link>
                AgroFarm
              </router-link>
            </li>

            <li>
              <router-link
                to="/CropMonitoring"
                class="navbar-link"
                data-nav-link
              >
                Crop Monitoring
              </router-link>
            </li>

            <li>
              <q-btn color="primary" class="navbar-link" data-nav-link>
                Download App
              </q-btn>
            </li>
          </ul>
        </nav>

        <button
          class="nav-open-btn btn:hover"
          aria-label="open menu"
          data-nav-toggler
          @click="toggleNav"
        >
          <span class="line line-1"></span>
          <span class="line line-2"></span>
          <span class="line line-2"></span>
        </button>

        <div class="overlay" data-overlay data-nav-toggler></div>
      </div>
    </header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  mounted() {
    const header = document.querySelector(".header");
    window.addEventListener("scroll", function () {
      window.scrollY >= 400
        ? header.classList.add("active")
        : header.classList.remove("active");
    });

    this.toggleNav();
    this.untoggleNav();
  },

  methods: {
    addEventOnElements(elements, eventType, callback) {
      for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
      }
    },
    toggleNav() {
      const navbar = document.querySelector(".navbar");
      const navTogglers = document.querySelectorAll(".nav-open-btn");
      const navLinks = document.querySelectorAll(".navbar-link");
      const overlay = document.querySelector(".overlay");

      this.addEventOnElements(navTogglers, "click", function () {
        navbar.classList.add("active");
        overlay.classList.add("active");
        document.body.classList.add("nav-active");
      });

      this.addEventOnElements(navLinks, "click", function () {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("nav-active");
      });
    },
    untoggleNav() {
      const navbar = document.querySelector(".navbar");
      const navTogglers = document.querySelectorAll(".nav-close-btn");
      const navLinks = document.querySelectorAll(".navbar-link");
      const overlay = document.querySelector(".overlay");

      this.addEventOnElements(navTogglers, "click", function () {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("nav-active");
      });
      this.addEventOnElements(navLinks, "click", function () {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("nav-active");
      });
    },
  },
});
</script>

<style scoped>
img {
  width: 100%;
}

li {
  list-style: none;
}
a,
img,
span,
input,
button,
textarea {
  display: block;
}
a.logo {
  height: 90px;
}

button {
  border: none;
}

img {
  width: 160px;
  height: 120px;
  padding-bottom: 1rem;
}

@media (max-width: 600px) {
  a.logo {
    height: auto;
  }
  img {
    padding-bottom: unset;
  }
}

@media (min-width: 1200px) {
  img {
    width: 260px;
  }
}
a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: 90%;
  margin: 0 auto;
}

.btn\:hover {
  position: relative;
  z-index: 1;
}

.btn\:hover::before,
.btn\:hover::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: 0.5 all ease-in-out;
  will-change: transform;
  pointer-events: none;
}

.btn\:hover::after {
  border: 1px solid white;
  transform: scale(1.2);
  opacity: 0;
}

.btn\:hover:is(:hover, :focus-visible)::before {
  transform: scale(0.5);
  opacity: 0;
}

.btn\:hover:is(:hover, :focus-visible)::after {
  transform: scale(1);
  opacity: 1;
}

.text-center {
  text-align: center;
}

.has-before,
.has-after {
  position: relative;
  z-index: 1;
}

.has-before::before,
.has-after::after {
  content: "";
  position: absolute;
}

.header .btn {
  display: none;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  /* padding-block: 20px; */
  z-index: 4;
}

.header.active {
  position: fixed;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  /* padding-block: 20px; */
  animation: slideIn 500ms ease-out forwards;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-open-btn {
  width: 50px;
  height: 50px;
  display: grid;
  place-content: center;
  gap: 6px;
}

.nav-open-btn .line {
  width: 24px;
  height: 2px;
  background-color: black;
  transition: 0.5 all ease-in-out;
}

.nav-open-btn:is(:hover, :focus-visible) .line {
  background-color: #e1e1e1;
}

.nav-open-btn:is(:hover, :focus-visible) .line-1 {
  transform: scaleX(0.7);
}

.nav-open-btn::before {
  background-color: white;
}

.nav-open-btn::after {
  background-color: black;
}

.navbar {
  position: fixed;
  background-color: #fff;
  /* background-color: black; */
  top: 0;
  left: -300px;
  width: 100%;
  max-width: 300px;
  height: 100vh;
  padding: 25px 20px;
  visibility: hidden;
  transition: 250ms cubic-bezier(0.51, 0.03, 0.64, 0.28);
  z-index: 3;
}

.navbar.active {
  transform: translateX(300px);
  visibility: visible;
  transition: 500ms cubic-bezier(0.05, 0.83, 0.52, 0.97);
}

.navbar-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block-end: 20px;
  border-block-end: 1px solid hsla(0, 0%, 6%, 1);
  margin-block-end: 10px;
}

.nav-close-btn {
  width: 30px;
  height: 30px;
  /* background-color: hsla(0, 0%, 6%, 1); */
  color: black;
  font-size: 2rem;
  display: grid;
  place-items: center;
}

.nav-close-btn i {
  --ionicon-stroke-width: 50px;
}

.navbar-link {
  padding: 8px;
  margin-block-start: 4px;
  color: #000;
  /* color: #fff; */
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

.navbar-link :hover {
  color: #2b945b;
}

.navbar-link:is(:hover, :focus-visible) {
  color: #2b945b;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
  transition: 0.25s ease;
}

.overlay.active {
  opacity: 0.5;
  pointer-events: all;
}

.has-before,
.has-after {
  position: relative;
  z-index: 1;
}

.has-before::before,
.has-after::after {
  position: absolute;
  content: "";
}

@media (min-width: 575px) {
  .container {
    /* max-width: 540px; */
    width: 100%;
    margin-inline: auto;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 800px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }

  .header .container {
    padding-inline: 1rem;
    min-width: 100%;
  }

  .nav-open-btn,
  .navbar-top {
    display: none;
  }

  .navbar {
    all: unset;
    display: block;
  }

  .navbar-list {
    display: flex;
    gap: 16px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1100px;
  }

  /* .header {
    padding-block: 20px;
  } */

  .header .container {
    padding-inline: 60px;
  }
}

/**
 * responsive for large than 1400px screen
 */

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }

  .header {
    padding-inline: 90px;
  }
}

@media (max-width: 600px) {
  img {
    width: auto;
    height: 60px;
  }
}
/* @media (max-width: 500px) {
  .header {
    padding-block: 10px;
  }
  .header.active {
    padding-block: 10px;
  }
} */
</style>
