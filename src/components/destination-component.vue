<template>
<section class="destination-container">
  <div class="header">
      <span>01</span>
      <p class="heading5">Pick your destination</p>
  </div>
  <div class="destination-component">
  <div class="img-container">
    <img class="img" src="../assets/img/destination/image-moon.webp" alt="moon">
  </div>
  <div class="tab-container">
    <div class="nav-container">
      <p class="nav-text">Moon</p>
      <p class="nav-text">Mars</p>
      <p class="nav-text">Europa</p>
      <p class="nav-text">Titan</p>
    </div>
    <div class="heading-container">
      <div class="heading2">Moon</div>
    </div>
    <p class="body-text">See our planet as you’ve never seen it before. A perfect relaxing trip
       away to help regain perspective and come back refreshed. While you’re there, 
       take in some history by visiting the Luna 2 and Apollo 11 landing sites.
    </p>
    <div class="line"></div>
    <div class="info-container">
      <div class="subheading-container">
        <p class="subheading2">AVG. Distance</p>
        <p class="subheading1">384,400 km</p>
      </div>
      <div class="subheading-container">
        <p class="subheading2">Est. travel time</p>
        <p class="subheading1">3 days</p>
      </div>
    </div>
  </div>
  </div>
</section>
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
.destination-component{
  display: flex;
  align-items: flex-end;
}
.img-container{
  height: 44.5rem;
  width: 44.5rem;
  margin: 10vh 18vw 0 18vw;
}
.img{
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.tab-container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 47.5rem;
  width: 44.5rem;
}
.nav-container{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5vh;
}
.nav-container .nav-text{
  margin-right: 3rem;
}
.nav-text{
  color: var(--sec-color);
}
.heading-container{
  width: 100%;
  display: flex;
  justify-content: flex-start;

}
.heading2{
  text-transform: uppercase;
  margin-bottom: 2vh;
}
.body-text{
  margin-bottom: 5rem;
}
.line{
  width: 100%;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 3vh;
}
.info-container{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.subheading-container{
  margin-right: 2vw;
}
.subheading2{
  text-transform: uppercase;
  color: var(--sec-color);
  margin-bottom: 1vh;
}
.subheading1{
  text-transform: uppercase;
}
</style>