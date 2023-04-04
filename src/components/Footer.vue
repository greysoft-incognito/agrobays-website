<template>
  <section>
    <div class="q-pa-xl bg-primary text-white">
      <div class="row footer-row container">
        <div class="col-md-4 col-sm-12 col-xs-12 q-pt-md my-font-nav">
          <div class="">About</div>
          <q-separator class="bg-secondary" style="width: 10%" />
          <div
            class="link q-mt-md cursor-pointer my-font-montserrat-light text-secondary"
          >
            Home
          </div>
          <div
            class="link q-mt-md cursor-pointer my-font-montserrat-light text-secondary"
            @click="$router.push('/agrofoods')"
          >
            AgroFoods
          </div>
          <div
            class="link q-mt-md cursor-pointer my-font-montserrat-light text-secondary"
            @click="$router.push('/agrofarms')"
          >
            AgroFarms
          </div>
          <!-- <div
              class="text-body2 link q-mt-md cursor-pointer my-font-montserrat-light text-primary"
              @click="$router.push('/media')"
            >
              Media
            </div> -->
          <div
            class="link q-mt-md cursor-pointer my-font-montserrat-light text-secondary"
            @click="$router.push('/agrotech')"
          >
            AgroTech
          </div>
        </div>

        <!-- <div class="col-md-3 col-sm-12 col-xs-12 q-pt-md my-font-nav">
          <div class=" my-font-montserrat-light">Resources</div>
          <q-separator class="bg-secondary" style="width: 50%" />
          <div
            class="
              text-body2
              link
              q-mt-md
              cursor-pointer
              my-font-montserrat-light
              text-secondary
            "
            @click="$router.push('/agroinvest')"
          >
            AgroInvest
          </div>
          <div
            class="
              text-body2
              link
              q-mt-md
              cursor-pointer
              my-font-montserrat-light
              text-secondary
            "
            @click="$router.push('/')"
          >
            FAQ
          </div>
        </div> -->
        <div class="col-md-4 col-sm-12 col-xs-12 q-pt-md my-font-nav">
          <div class="my-font-montserrat-light">Social Media</div>
          <q-separator class="bg-secondary" style="width: 10%" />
          <div class="q-mt-md cursor-pointer">
            <a
              class="my-font-montserrat-light text-white text-center"
              href="https://www.facebook.com/agrobaysng/"
              target="_blank"
            >
              <!-- <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-facebook"
                style="font-size: 2em"
              /> -->
              <i class="fab fa-facebook"></i>
              <span class="q-ml-sm my-font-montserrat-light">Facebook</span></a
            >
          </div>
          <div class="q-mt-md cursor-pointer">
            <a
              class="my-font-montserrat-light text-white text-center"
              href="https://www.twitter.com/agrobaysng/"
              target="_blank"
            >
              <!-- <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-twitter"
                style="font-size: 2em"
              /> -->
              <i class="fab fa-twitter"></i>
              <span class="q-ml-sm my-font-montserrat-light">Twitter</span></a
            >
          </div>
          <div class="q-mt-md cursor-pointer">
            <a
              class="my-font-montserrat-light text-white text-center"
              href="https://www.instagram.com/agrobaysng/"
              target="_blank"
            >
              <!-- <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-instagram"
                style="font-size: 2em"
              /> -->
              <i class="fab fa-instagram"></i>
              <span class="q-ml-sm my-font-montserrat-light">Instagram</span></a
            >
          </div>
          <div class="text-body2 q-mt-md cursor-pointer">
            <a
              class="my-font-montserrat-light text-white text-center"
              href="https://www.linkedin.com/agrobaysng/"
              target="_blank"
            >
              <!-- <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-linkedin"
                style="font-size: 2em"
              /> -->
              <i class="fab fa-linkedin"></i>
              <span class="q-ml-sm my-font-montserrat-light">Linkedin</span></a
            >
          </div>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12 q-pt-md my-font-nav">
          <div class="my-font-montserrat-light">Contact Info</div>
          <q-separator class="bg-secondary" style="width: 10%" />
          <div class="my-font-montserrat-light q-mt-md">
            31 Gwari Avenue, Barnawa, Kaduna, Nigeria.
          </div>
          <div class="q-mt-md my-font-montserrat-light">
            <a href="mailto:hi@agrobays.com.com">
              <span class="text-secondary">Email: </span>
              <span class="text-secondary">hi@agrobays.com</span>
            </a>
          </div>
          <div class="q-mt-md my-font-montserrat-light">
            <span>Phone: </span>
            <span class="text-secondary">
              <a class="text-secondary" href="tel:+23480 6566 5759"
                >+23480 6566 5759</a
              > </span
            >,
            <span class="text-secondary">
              <a class="text-secondary" href="tel:+23480 6174 6484"
                >+23480 6174 6484</a
              >
            </span>
          </div>
          <q-btn
            class="q-mt-sm text-amber-5"
            no-caps
            small
            outline
            icon="mail"
            type="a"
            href="https://www.agrobays.com/webmail/"
            target="_blank"
          >
            <span class="q-pl-sm">Check Mail</span>
          </q-btn>
        </div>
      </div>
      <q-separator class="bg-grey-9 q-px-xl q-mt-xl" />
      <div
        class="text-caption text-secondary container my-font-montserrat-light"
      >
        © {{ new Date().getFullYear() }} Agrobays. All rights reserved.
      </div>
      <div
        class="text-caption text-secondary container my-font-montserrat-light"
      >
        By Greysoft© Technologies.
      </div>
      <!-- <div
        class="text-caption text-secondary container my-font-montserrat-light"
      >
        <router-link class="text-grey-3" :to="{ name: 'user.agreement' }">
          User Agreement
        </router-link>
        |
        <router-link class="text-grey-3" :to="{ name: 'privacy.policy' }">
          Privacy Policy
        </router-link>
        |
        <router-link class="text-grey-3" :to="{ name: 'changelog' }">
          Changelog
        </router-link>
        |
        <router-link class="text-grey-3" :to="{ name: 'faq' }">
          FAQ
        </router-link>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.rower {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  place-items: center;
}
</style>
