<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-secondary text-white">
      <div class="row items-center">
        <q-toolbar-title>
          <img class="logo q-pl-md" src="/images/logo1.svg" /> <br />
        </q-toolbar-title>
        <q-tabs narrow-indicator dense active-color="primary">
          <q-route-tab
            label="Home"
            sm
            ripple
            no-caps
            class="gt-sm text-dark"
            to="/"
            exact
          />
          <q-route-tab
            label="AgroFoods"
            ripple
            no-caps
            class="gt-sm text-dark"
            to="/agrofoods"
            exact
          />
          <q-route-tab
            label="Livestock"
            ripple
            no-caps
            class="gt-sm text-dark"
            to="/livestock"
            exact
          />

          <q-route-tab
            label="AgroFarm"
            ripple
            no-caps
            class="gt-sm text-dark"
            to="/agrofarms"
            exact
          />
          <q-route-tab
            label="Crop Monitoring"
            ripple
            no-caps
            class="gt-sm text-dark"
            to="/CropMonitoring"
            exact
          />
          <!-- <q-route-tab
            label="AgroInvest"
            ripple
            no-caps
            class="gt-sm text-dark "
            to="/agroinvest"
            exact
          /> -->
        </q-tabs>
        <q-tabs class="login bg-primary" dense>
          <div class="log">
            <q-route-tab
              label="Download App"
              ripple
              no-caps
              class="gt-sm row nowrap items-center text-secondary"
              to="https://www.google.com"
              href="https://www.google.com"
              exact
              ><i class="fa-solid fa-mobile"></i
            ></q-route-tab>
          </div>
        </q-tabs>

        <div class="q-pa-sm lt-md">
          <q-btn
            flat
            round
            dense
            icon="menu"
            style="color: black"
            class="q-mr-sm"
          >
            <q-menu>
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>
                      <q-btn
                        stretch
                        flat
                        label="Home"
                        to="/"
                        no-caps
                        size="md"
                        class=""
                      />
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>
                      <q-btn
                        stretch
                        flat
                        label="Livestock"
                        to="/livestock"
                        no-caps
                        size="md"
                        class=""
                      />
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>
                      <q-btn
                        stretch
                        flat
                        label="Livestock"
                        to="/agrofarms"
                        no-caps
                        size="md"
                        class=""
                      />
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>
                      <q-btn
                        stretch
                        flat
                        label="AgroFarms"
                        to="/agrofarms"
                        no-caps
                        size="md"
                        class=""
                      />
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="Crop Monitoring"
                        to="/agroinvest"
                        no-caps
                        size="md"
                        class=""
                    /></q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="Download App"
                        to="/agroinvest"
                        no-caps
                        size="md"
                        class=""
                    /></q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      class="bg-secondary"
      side="right"
      overlay
      bordered
    >
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const rightDrawerOpen = ref(false);
    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  watch: {
    "$store.getters.isLoggedIn": {
      handler(e) {
        this.isLoggedIn = e;
      },
      immediate: true,
    },
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
};
</script>

<style scoped>
.logo {
  width: 170px;
  height: 68px;
  object-fit: contain;
}

a {
  font-size: 2rem;
}

.login {
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 26% 100%);
  padding: 1rem;
}

@media (max-width: 400px) {
  .login {
    display: none;
  }
}

.log .q-tab__indicator {
  display: none !important;
}

.register {
  background-color: #c0e5b72b;
  padding: 0.45rem;
  border-radius: 10px;
}
</style>
