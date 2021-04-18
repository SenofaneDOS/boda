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
