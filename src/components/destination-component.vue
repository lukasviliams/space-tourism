<template>
<section class="destination-container">
  <div class="header">
      <span>01</span>
      <p class="heading5">Pick your destination</p>
  </div>
  <div class="destination-component">
  <div class="img-container">
    <img class="img" src="../assets/img/destination/image-moon.webp" alt="Sorry could not load the img">
  </div>
  <div class="tab-container">
    <div class="nav-container">
      <p class="tabs-nav-text">Moon</p>
      <p class="tabs-nav-text">Mars</p>
      <p class="tabs-nav-text">Europa</p>
      <p class="tabs-nav-text">Titan</p>
    </div>
    <div class="heading-container">
      <div class="heading2-tabs visible">Moon</div>
      <!-- <div class="heading2-tabs">Mars</div>
      <div class="heading2-tabs">Europa</div>
      <div class="heading2-tabs">Moon</div> -->
    </div>
    <p class="tab-text visible">See our planet as you’ve never seen it before. A perfect relaxing trip
       away to help regain perspective and come back refreshed. While you’re there, 
       take in some history by visiting the Luna 2 and Apollo 11 landing sites.
    </p>
    <!-- <p class="tab-text">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus
       Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size
        of Everest!
    </p>
    <p class="tab-text">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter
       lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey,
        or simple relaxation in your snug wintery cabin.
    </p>
    <p class="tab-text">The only moon known to have a dense atmosphere other than Earth, Titan is a 
      home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of 
      the Rings of Saturn.
    </p> -->
    <div class="line"></div>
    <div class="info-container">
      <div class="subheading-container">
        <p class="subheading2">AVG. Distance</p>
        <p class="subheading1-tabs visible">384,400 km</p>
        <!-- <p class="subheading1-tabs">225 MIL. km</p>
        <p class="subheading1-tabs">628 MIL. km</p>
        <p class="subheading1-tabs">1.6 BIL. km</p> -->
      </div>
      <div class="subheading-container">
        <p class="subheading2">Est. travel time</p>
        <p class="subheading1-tabs visible">3 days</p>
        <!-- <p class="subheading1-tabs">9 months</p>
        <p class="subheading1-tabs">3 years</p>
        <p class="subheading1-tabs">7 years</p> -->
      </div>
    </div>
  </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'destinationComponent', 
  setup() {
    

    const handleTab = () =>{
      console.log('run the job');
    }
    return { handleTab}
  }
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
.nav-container .tabs-nav-text{
  margin-right: 3rem;
}
.tabs-nav-text{
  font-family: 'barlow';
  font-size: 16px;
  letter-spacing: 2,7px;
  text-transform: uppercase;
  color: var(--sec-color);
  border-bottom: 3px solid transparent;
  transition: all .1s ease-in-out;
}
.tabs-nav-text:hover{
  transform: translateY(-3px);
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
}
.heading-container{
  width: 100%;
  display: flex;
  justify-content: flex-start;

}
.heading2-tabs{
  display: none;
  font-family: 'bellefair';
  font-size: 100px;
  text-transform: uppercase;
  margin-bottom: 2vh;
}
.tab-text{
  display:none;
  font-family: 'barlow';
  font-size: 1.8rem;
  line-height: 3.2rem;
  color: var(--sec-color);
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
.subheading1-tabs{
  display: none;
  font-family: 'bellefair';
  font-size: 28px;
  text-transform: uppercase;
}
/*********************** Animations ************************/
.visible{
  display: flex;
}
.active-tab{
    border-bottom: 2px solid var(--ter-color);
}
</style>