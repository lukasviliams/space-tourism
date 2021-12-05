<template>
<div class="technology-container">
  <NavigationComponent/>
  <TechnologyComponent/>  
</div>
</template>

<script>
import NavigationComponent from "../components/navigation-component.vue";
import TechnologyComponent from "../components/technology-component.vue";
export default {
    components: { NavigationComponent, TechnologyComponent }
}
</script>

<style>
.technology-container{
  height: 100vh;
  width: 100vw;
  background-image: url('../assets/img/technology/background-technology-desktop.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>