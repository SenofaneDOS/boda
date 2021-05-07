<template>
  <div class="home-head w-full items-center h-auto mx-auto">
    <image-component
      class="transform h-96 scale-110 -translate-y-80"
      lantern
      color="text-white"
    />
    <div class="home-body w-full flex flex-row justify-around items-center">
      <image-component
        class=""
        maria
        size="w-56"
        color="text-white"
      />
      <div class="text-container grid gap-10 text-center text-9xl text-white">
        <span> Maria & Stefano</span>
        <span class="font-body text-4xl">8 settembre 2021</span>
      </div>
      <image-component
        class=""
        stefano
        size="w-56"
        color="text-white"
      />
    </div>
    <div id="countdown">
      <count-down-component deadline="09/08/2021" />
    </div>
    <CardComponent />
  </div>
</template>

<script>

import ImageComponent from '../components/global/ImageComponent'
import CountDownComponent from '../components/global/CountDownComponent.vue'
import CardComponent from '../components/global/CardComponent.vue'
export default {
  components: { ImageComponent, CountDownComponent, CardComponent }
}
</script>
