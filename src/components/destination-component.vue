<template>
<section class="destination-container">
  <div class="header">
      <span>01</span>
      <p class="heading5">Pick your destination</p>
  </div>
  <tab-wrapper>
  <tabs-component title="moon">
    <div class="destination-component">
       <div class="img-container">
      <img class="img" src='../assets/img/destination/image-moon.webp'  alt="Sorry could not load the img">
    </div>  
      <div class="tab-container">
        <div class="heading2-container">
        <p class="heading2-tabs">Moon</p>
        </div>
        <p class="tab-text">See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re there, 
        take in some history by visiting the Luna 2 and Apollo 11 landing sites.
        </p>
        <div class="line"></div>
        <div class="info-container">
          <div class="subheading-container">
            <p class="subheading2">AVG. Distance</p>
            <p class="subheading1-tabs">384,400 km</p>
          </div>
          <div class="subheading-container">
            <p class="subheading2">Est. travel time</p>
            <p class="subheading1-tabs">3 days</p>
          </div>
        </div>
      </div>
    </div>
  </tabs-component>
  <tabs-component title="mars">
    <div class="destination-component">
    <div class="img-container">
      <img class="img" src='../assets/img/destination/image-mars.webp'  alt="Sorry could not load the img">
    </div>  
      <div class="tab-container">
        <div class="heading2-container">
          <p class="heading2-tabs">Mars</p>
        </div>
        <p class="tab-text">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus
       Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size
        of Everest!
        </p>
        <div class="line"></div>
        <div class="info-container">
          <div class="subheading-container">
            <p class="subheading2">AVG. Distance</p>
            <p class="subheading1-tabs">225 MIL. km</p>
          </div>
          <div class="subheading-container">
            <p class="subheading2">Est. travel time</p>
            <p class="subheading1-tabs">9 months</p>
          </div>
        </div>
      </div>
    </div>
  </tabs-component>
  <tabs-component title="europa">
    <div class="destination-component">
      <div class="img-container">
        <img class="img" src='../assets/img/destination/image-europa.webp'  alt="Sorry could not load the img">
      </div>  
      <div class="tab-container">
        <div class="heading2-container">
          <p class="heading2-tabs">Europa</p>
        </div>
        <p class="tab-text">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter
       lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey,
        or simple relaxation in your snug wintery cabin.
        </p>
        <div class="line"></div>
        <div class="info-container">
          <div class="subheading-container">
            <p class="subheading2">AVG. Distance</p>
            <p class="subheading1-tabs">628 MIL. km</p>
          </div>
          <div class="subheading-container">
            <p class="subheading2">Est. travel time</p>
            <p class="subheading1-tabs">3 years</p>
          </div>
        </div>
      </div>
    </div>
  </tabs-component>
  <tabs-component title="titan">
    <div class="destination-component">
      <div class="img-container">
        <img class="img" src='../assets/img/destination/image-titan.webp'  alt="Sorry could not load the img">
      </div>  
      <div class="tab-container">
        <div class="heading2-container">
          <p class="heading2-tabs">Titan</p>
      </div>
        <p class="tab-text">The only moon known to have a dense atmosphere other than Earth, Titan is a 
      home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of 
      the Rings of Saturn.
        </p>
        <div class="line"></div>
        <div class="info-container">
          <div class="subheading-container">
            <p class="subheading2">AVG. Distance</p>
            <p class="subheading1-tabs">1.6 BIL. km</p>
          </div>
          <div class="subheading-container">
            <p class="subheading2">Est. travel time</p>
            <p class="subheading1-tabs">7 years</p>
          </div>
        </div>
      </div>
    </div>
  </tabs-component>
</tab-wrapper>
  <!-- </div> -->
</section>
</template>

<script>
import tabWrapper from './tab-wrapper.vue'
import TabsComponent from './tabs-component.vue'
export default {
  components: { tabWrapper, TabsComponent },
  name: 'destinationComponent', 
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
  width: 100%;
  display: flex;
  align-items: flex-end;
}
.img-container{
  height: 44.5rem;
  width: 44.5rem;
  margin: 10vh 22vw 0 18vw;
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
  width: 40.5rem;
  padding-top: 3rem;
}
.heading2-container{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.heading2-tabs{
  font-family: 'bellefair';
  font-size: 100px;
  text-transform: uppercase;
  margin-top: 2rem;
}
.tab-text{
  font-family: 'barlow';
  font-size: 1.8rem;
  line-height: 3.2rem;
  color: var(--sec-color);
  margin: 3rem 0 5rem 0 ;
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
  font-family: 'bellefair';
  font-size: 28px;
  text-transform: uppercase;
}
</style>