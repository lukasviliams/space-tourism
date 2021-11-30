<template>
  <div class="destination">
    <NavigationComponent/>
    <DestinationComponent/>
  </div>
</template>

<script>
import NavigationComponent from "../components/navigation-component.vue";
import DestinationComponent from "../components/destination-component.vue";
export default {
  components: { NavigationComponent, DestinationComponent }, 
}
</script>

<style scoped>
.destination{
  height: 100vh;
  width: 100vw;
  background-image: url('../assets/img/destination/background-destination-desktop.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>