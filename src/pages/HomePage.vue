<template>
  <div v-if="show" class="home_page">
    hey is a home
  </div>
</template>

<script>
export default {
  computed: {
    show() {
      return this.$route.name === "home";
    },
  },
};
</script>

