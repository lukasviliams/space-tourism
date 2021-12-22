<template>
<div class="notfound-container">
<navigation-component/>
<not-found/>
</div>
</template>

<script>
import navigationComponent from '../components/navigation-component.vue'
import notFound from '../components/not-found.vue'
export default {
  components: { navigationComponent, notFound },

}
</script>

<style>
.notfound-container{
    height:100vh;
    background-image: url('../assets/img/home/background-home-desktop.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>