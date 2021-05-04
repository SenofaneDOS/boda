<template>
  <div class="home-head w-full items-center h-auto mx-auto">
    <image-component
      class="transform h-96 scale-110 -translate-y-80"
      lantern
      color="text-white"
    />
    <div class="home-body w-full flex flex-row justify-between items-center">
      <image-component
        class=""
        maria
        size="w-56"
        color="text-white"
      />
      <div class="text-container grid gap-10 text-center text-7xl text-white">
        <span> Maria & Stefano</span>
        <count-down-component deadline="08/09/2021" />
      </div>
      <image-component
        class=""
        stefano
        size="w-56"
        color="text-white"
      />
    </div>
  </div>
</template>

<script>

import ImageComponent from '../components/global/ImageComponent'
import CountDownComponent from '../components/global/CountDownComponent.vue'
export default {
  components: { ImageComponent,CountDownComponent }
}
</script>
