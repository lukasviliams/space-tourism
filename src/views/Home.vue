<template>
  <div class="home">
    <navigation class="navigation"/>
    <home-component class="home-component"/>
  </div>
</template>

<script>
import HomeComponent from '../components/home-component.vue'
import navigation from '../components/navigation-component.vue'
// @ is an alias to /src


export default {
  components: { navigation, HomeComponent },
  name: 'Home',

}
</script>
<style scoped>
.home{
  height: 100vh;
  width: 100vw;
  background-image: url('../assets/img/home/background-home-desktop.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/*************** Responsive design ***********************/
@media only screen and (max-width: 950px) {
  .home{
  background-image: url('../assets/img/home/background-home-tablet.jpg');
}
}
</style>
