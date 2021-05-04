<template>
  <div class="w-full flex flex-col items-center h-auto mx-auto">
    <image-component
      class="w-screen relative -left-2 -top-40"
      lantern
      color="text-white"
    />
    <div class="flex flex-row w-full justify-between px-10">
      <image-component
        class=""
        maria
        size="w-56"
        color="text-white"
      />
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

export default {
  components: { ImageComponent }
}
</script>
