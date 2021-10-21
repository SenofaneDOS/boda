<template>
  <div class="home-head w-full items-center h-auto mx-auto">
    <img
      class="bulb w-full transform scale-125 md:scale-110 lg:scale-105 -translate-y-20 sm:-translate-y-24 md:-translate-y-28 lg:-translate-y-32 filter invert pointer-events-none select-none"
      src="../assets/images/bulb.png"
    >
    <div class="home-body w-full grid lg:grid-flow-col gap-5 justify-around items-center px-10">
      <transition
        appear
        name="maria"
      >
        <image-component
          v-if="show"
          class="row-start-2 row-end-2 col-start-1 col-end-1 lg:row-start-1 lg:row-end-1 lg:col-start-1 lg:col-end-1"
          maria
          size="w-28 sm:w-40 md:w-56 my-0 mx-auto"
          color="text-white"
        />
      </transition>
      <div class="text-container row-start-1 row-end-1 col-start-1 col-end-3 lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-1 grid gap-10 px-10 text-center text-8xl md:text-9xl text-white">
        <span class="write"> Maria & Stefano</span>
        <span class="font-body text-4xl break-words">8 settembre 2021</span>
      </div>
      <transition
        appear
        name="stefano"
      >
        <image-component
          v-if="show"
          class="row-start-2 row-end-2 col-start-2 col-end-2 lg:row-start-1 lg:row-end-1 lg:col-start-3 lg:col-end-3"
          stefano
          size="w-28 sm:w-40 md:w-56 my-0 mx-auto"
          color="text-white"
        />
      </transition>
    </div>
    <div id="countdown">
      <count-down-component deadline="09/08/2021" />
    </div>
    <CardComponent />
    <PlaylistComponent />
    <RSVPComponent />

    <div class="container my-40 mx-auto px-5">
      <div class="text-container grid gap-10 text-center text-8xl text-white">
        <span>Lista di nozze</span>
      </div>
      <div class="font-body text-center">
        <span class="text-3xl text-white">Per chi volesse contribuire al nostro viaggio di nozze</span>
      </div>
      <br>
      <br>
      <div class="font-body text-center">
        <span class="text-3xl text-white break-all">IT77P0100503295000000003015</span>
        <br>
        <span class="text-3xl text-white">Beneficiario: Stefano Pepi</span>
      </div>
      <br>
      <br>
      <div class="font-body text-center">
        <span class="text-3xl text-white break-all">per favore no oggetti della thun</span>
      </div>
    </div>

    <div class="container my-40 mx-auto px-5">
      <div class="text-container grid gap-10 text-center text-8xl text-white">
        <span>Contatti</span>
      </div>
      <div class="flex flex-row flex-wrap justify-center font-body">
        <div class="text-center text-white mt-8  mr-5">
          <image-component
            class=""
            maria
            size="w-20 h-auto mt-10 mb-8 mx-auto"
            color="text-white"
          />
          <span class="text-4xl">Maria<br></span>
          <span>Telefono: 3392816262<br></span>
          <span>Email: maria.alvaro95@gmail.com<br></span>
        </div>
        <div class="text-center text-white mt-8">
          <image-component
            class=""
            stefano
            size="w-20 h-auto my-10 mx-auto"
            color="text-white"
          />
          <span class="text-4xl">Stefano<br></span>
          <span>Telefono: 3341278094<br></span>
          <span>Email: pepistefano9@gmail.com<br></span>
        </div>
      </div>
    </div>

    <div id="gallery">
      <img src="https://i.imgur.com/vPsvV9z.jpg">
      <img src="https://i.imgur.com/inobIzW.jpg">
      <img src="https://i.imgur.com/sERmoFT.jpg">
      <img src="https://i.imgur.com/T1nPKU1.jpg">
      <img src="https://i.imgur.com/wQ4EMlE.jpg">
      <img src="https://i.imgur.com/tHxVUZp.jpg">
      <img src="https://i.imgur.com/b7PVup4.jpg">
      <img src="https://i.imgur.com/S5Wcudo.jpg">
      <img src="https://i.imgur.com/tJdXwML.jpg">
      <img src="https://i.imgur.com/9NDQF2x.jpg">
    </div>
  </div>
</template>

<script>

import ImageComponent from '../components/global/ImageComponent'
import CountDownComponent from '../components/global/CountDownComponent.vue'
import CardComponent from '../components/global/CardComponent.vue'
import PlaylistComponent from '../components/global/PlaylistComponent.vue'
import RSVPComponent from '../components/global/RSVPComponent.vue'

export default {
  components: { ImageComponent, CountDownComponent, CardComponent, PlaylistComponent, RSVPComponent },
  data(){
    return{
      show: false
    }
  },
  mounted(){
    this.show = true
  },
}
</script>
<style scoped>
#gallery {
   line-height:0;
   -webkit-column-count:5; /* split it into 5 columns */
   -webkit-column-gap:5px; /* give it a 5px gap between columns */
   -moz-column-count:5;
   -moz-column-gap:5px;
   column-count:5;
   column-gap:5px;
}

#gallery img {
   width: 100% !important;
   height: auto !important;
   margin-bottom:5px; /* to match column gap */
   transition: filter 2s;
}
#gallery img:hover {
   filter:none;
}
@media (max-width: 1200px) {
   #gallery {
    -moz-column-count:    4;
    -webkit-column-count: 4;
    column-count:         4;
   }
}
@media (max-width: 1000px) {
   #gallery {
    -moz-column-count:    3;
    -webkit-column-count: 3;
    column-count:         3;
   }
}
@media (max-width: 800px) {
   #gallery {
    -moz-column-count:    2;
    -webkit-column-count: 2;
    column-count:         2;
   }
}
@media (max-width: 400px) {
   #gallery {
    -moz-column-count:    1;
    -webkit-column-count: 1;
    column-count:         1;
   }
}

.maria-enter-active,
.maria-leave-active,
.stefano-enter-active,
.stefano-leave-active {
  transition: all 0.5s ease;
}

.maria-enter-from,
.maria-leave-to,
.stefano-enter-from,
.stefano-leave-to {
  opacity: 0;
}
.maria-enter-from,
.maria-leave-to{
    transform: translateX(-100%);
}
.stefano-enter-from,
.stefano-leave-to {
  transform: translateX(100%);
}
</style>