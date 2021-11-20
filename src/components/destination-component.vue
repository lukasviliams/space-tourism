<template>
<div class="destination-container">
  <div class="header">
      <span>01</span>
      <p class="heading5">Pick your destination</p>
  </div>
  <div class="img-container">
    <img src="../assets/img/destination/image-moon.webp" alt="moon">
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.destination-container{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27vw;
    margin: 12vh 0 0 10vw;
}
.header span{
  font-family: 'barlow';
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 4.72px;
  color: var(--shady-color);
  margin-right: auto;
}
.heading5{
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 4.72px;
}
</style>