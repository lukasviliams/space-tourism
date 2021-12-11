<template>
<div class="crew">
  <NavigationComponent/>
  <crew-component/>
</div>
</template>

<script>
import CrewComponent from '../components/crew-component.vue';
import NavigationComponent from "../components/navigation-component.vue";
export default {
    components: { NavigationComponent, CrewComponent }
}
</script>

<style scoped>
.crew{
  height: 100vh;
  width: 100vw;
  background-image: url(../assets/img/crew/background-crew-desktop.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
/*************** Responsive design ***********************/
@media only screen and (max-width: 768px) {
  .crew{
    background-image: url(../assets/img/crew/background-crew-tablet.jpg);
  }
}
@media only screen and (max-width: 375px) {
  .crew {
    background-image: url(../assets/img/crew/background-crew-mobile.jpg);
  }
}
</style>>
