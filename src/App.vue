<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Plus Jakarta Sans", sans-serif !important;
}
button {
  cursor: pointer;
}

.holdier h4 {
  font-size: 2rem;
}
.wrap_sub .q-item__section--side,
.trans__val .q-item__section--side {
  padding-right: 9px !important;
}

.wrap_sub .q-item__section--avatar,
.trans__val .q-item__section--side {
  min-width: 20px !important;
}

/* .hold {
  margin: 1rem 0 1rem;
} */

.profile-imgg .uppy-container {
  margin: 0 !important;
}

.cartholddiv {
  overflow: visible !important;
}

.acc-btn {
  display: flex;
  width: 80px !important;
  align-items: center;
}
.q-tab__label {
  font-size: 13px;
  line-height: 1.715em;
  font-weight: 500;
}
.q-tab__indicator {
  display: none;
}
.glossy {
  background-image: none !important;
}

.bg-teal {
  background: none !important;
}

.q-btn .q-icon,
.q-btn .q-spinner {
  font-size: 2.715em !important;
}

img {
  width: 100%;
  text-align: enter;
  object-fit: contain;
}

a {
  text-decoration: none;
}
.q-btn:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: inherit;
  box-shadow: none;
}

.q-tab-panels {
  background: transparent;
}

.flexx {
  display: flex;
  align-items: center;
}

.about__img {
  flex: 1;
}
.about__data {
  flex: 1;
}

li {
  list-style: none;
}
.container {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
}

.q-router-link--exact-active .wrapp i {
  color: #fff !important;
  /* background: red; */
}

.loader__width {
  width: 100% !important;
}

.price-sm {
  /* text-align: center; */
  padding-left: 3rem;
}

.q-card {
  width: 100%;
}
.accnt .q-item__section--avatar {
  color: inherit;
  min-width: 26px;
}
/*
.q-page-container {
  padding: 0 !important;
} */
.q-drawer {
  position: fixed !important;
}

.drawer__basestyles {
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  height: 100% !important;
}

.padd {
  padding: 2rem 0rem !important;
}

.q-btn-dropdown__arrow {
  transition: transform 0.28s;
  display: none;
}
.q-drawer--left.q-drawer--bordered {
  border-right: none;
}
.reset__height {
  height: auto !important;
}

input:focus {
  outline: none;
}
/* button {
  filter: blur(1px);
} */
@media (max-width: 580px) {
  .search__dropdown__responsive {
    flex-direction: column !important;
    gap: 1rem;
    align-items: flex-start;
    padding: 0 0rem 1rem 0rem !important;
    margin: 0.3rem 1rem 1rem 1rem;
  }
  .q-toolbar {
    padding: 0 !important;
  }
  .flexx {
    flex-direction: column !important;
    flex-direction: column-reverse !important;
  }
  .cart.q-menu {
    min-width: 62.2969px;
    top: 15% !important;
    left: 50% !important;
    width: 90%;
    transform: translate(-50%, -10%);
    max-width: 90% !important;
    overflow: visible;
  }
  .acc-btn {
    display: flex;
    width: 50px !important;
    font-size: 9px !important;
  }
  .q-tab__label {
    font-size: 8px;
  }

  .padd {
    padding: 2rem important;
  }
  .price-sm {
    text-align: center;
    padding-left: 0rem;
  }
}

@media (max-width: 500px) {
  .flez {
    flex-direction: column;
  }
  .flez .q-avatar__content {
    width: 50px !important;
    padding: 0.4rem;
  }

  .addborder .fruit-img {
    margin-right: 0.55rem !important;
  }

  .addborder .q-avatar {
    width: 50px !important;
    margin: 0 0.2rem !important;
  }
  .resetpadding {
    padding: 0 !important;
  }
}

@media (max-width: 400px) {
  .q-drawer {
    width: 250px !important;
  }
  .cart.q-menu {
    width: 95%;
    transform: translate(-50%, -10%);
    max-width: 95% !important;
  }
  .carter {
    font-size: 7px !important;
  }

  .q-drawer--left.q-drawer--bordered {
    border-right: none;
  }
  /* .q-item {
    padding: 0 !important;
  } */
  .q-item__section--main ~ .q-item__section--side {
    align-items: flex-end;
    padding-right: 0.4rem;
    padding-left: 0px !important;
  }

  .q-item__section--side:first-child {
    color: #757575;
    align-items: flex-start;
    padding-right: 8px !important;
  }
  .carter .q-item__section--avatar {
    color: inherit;
    min-width: 50px !important;
  }

  .trans__val .q-item__label {
    font-size: 11px;
  }

  .none {
    display: none !important;
  }
  .right__pad {
    padding: 0 0.2rem;
  }
  .text__size {
    font-size: 1rem;
  }
  .trans__val small {
    font-size: 60%;
  }
  .type__font {
    font-size: 11px !important;
  }

  .der .q-btn .q-icon {
    font-size: 1.715em !important;
  }

  .der p {
    font-size: 0.715em !important;
  }

  .holdier h4 {
    font-size: 1.1rem;
  }
  .holdier p {
    font-size: 0.9rem;
  }

  .btns .on-left {
    margin-right: 6px !important;
  }
}
</style>
