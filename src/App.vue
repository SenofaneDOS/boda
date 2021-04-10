<template>
    <HeaderComponent />
     <MainComponent />
    <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/layout/HeaderComponent";
import MainComponent from "./components/layout/MainComponent";
import FooterComponent from "./components/layout/FooterComponent";

export default {
  components: {HeaderComponent, MainComponent, FooterComponent}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
