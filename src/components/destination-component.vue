<template>
<section class="destination-container">
  <div class="header">
      <span>01</span>
      <p class="heading5">Pick your destination</p>
  </div>
  <div class="destination-component">
  <div class="img-container">
    <img class="img" :src="moonImg" alt="Sorry could not load the img">
  </div>
  <div class="tab-container">
    <div class="nav-container">
      <p class="tabs-nav-text active-tab" ref="tab1" @click="handleMoon">Moon</p>
      <p class="tabs-nav-text" ref="tab2" @click="handleMars">Mars</p>
      <p class="tabs-nav-text" ref="tab3" @click="handleEuropa">Europa</p>
      <p class="tabs-nav-text" ref="tab4" @click="handleTitan">Titan</p>
    </div>
    <div class="heading-container">
      <div class="heading2-tabs visible" ref="heading1">Moon</div>
      <div class="heading2-tabs" ref="heading2">Mars</div>
      <div class="heading2-tabs" ref="heading3">Europa</div>
      <div class="heading2-tabs" ref="heading4">Moon</div>
    </div>
    <p class="tab-text visible" ref="tabText1">See our planet as you’ve never seen it before. A perfect relaxing trip
       away to help regain perspective and come back refreshed. While you’re there, 
       take in some history by visiting the Luna 2 and Apollo 11 landing sites.
    </p>
    <p class="tab-text" ref="tabText2">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus
       Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size
        of Everest!
    </p>
    <p class="tab-text" ref="tabText3">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter
       lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey,
        or simple relaxation in your snug wintery cabin.
    </p>
    <p class="tab-text" ref="tabText4">The only moon known to have a dense atmosphere other than Earth, Titan is a 
      home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of 
      the Rings of Saturn.
    </p>
    <div class="line"></div>
    <div class="info-container">
      <div class="subheading-container">
        <p class="subheading2">AVG. Distance</p>
        <p class="subheading1-tabs visible" ref="distance1">384,400 km</p>
        <p class="subheading1-tabs" ref="distance2">225 MIL. km</p>
        <p class="subheading1-tabs" ref="distance3">628 MIL. km</p>
        <p class="subheading1-tabs" ref="distance4">1.6 BIL. km</p>
      </div>
      <div class="subheading-container">
        <p class="subheading2">Est. travel time</p>
        <p class="subheading1-tabs visible" ref="travelTime1">3 days</p>
        <p class="subheading1-tabs" ref="travelTime2">9 months</p>
        <p class="subheading1-tabs" ref="travelTime3">3 years</p>
        <p class="subheading1-tabs" ref="travelTime4">7 years</p>
      </div>
    </div>
  </div>
  </div>
</section>
</template>

<script>
import {  ref } from 'vue';
import { onMounted } from '@vue/runtime-core';
export default {
  name: 'destinationComponent', 
  setup() {
    // Variables 
    const tabs = ref(null)
    const headings = ref(null)
    const tabsText = ref(null)
    const subheadings = ref(null)
    const tab1 = ref(null)
    const tab2 = ref(null)
    const tab3 = ref(null)
    const tab4 = ref(null)
    const heading1 = ref(null)
    const heading2 = ref(null)
    const heading3 = ref(null)
    const heading4 = ref(null)
    const tabText1 = ref(null)
    const tabText2 = ref(null)
    const tabText3 = ref(null)
    const tabText4 = ref(null)
    const distance1 = ref(null)
    const distance2 = ref(null)
    const distance3 = ref(null)
    const distance4 = ref(null)
    const travelTime1 = ref(null)
    const travelTime2 = ref(null)
    const travelTime3 = ref(null)
    const travelTime4 = ref(null)
    const moonImg = 'src/assets/img/destination/image-mars.webp'

    // Query selectorAll on Mounted 
    onMounted(()=>{
      tabs.value = document.querySelectorAll('.tabs-nav-text')
      headings.value = document.querySelectorAll('.heading2-tabs')
      tabsText.value = document.querySelectorAll('.tab-text')
      subheadings.value = document.querySelectorAll('.subheading1-tabs')
    })
    
    ///////////////////////// DOM manipulation for Moon content //////////////////////////////
    const handleMoon = () =>{
      //Remove active class from tabs and activate tab for moon
      tabs.value.forEach(element => {
        element.classList.remove('active-tab')
        tab1.value.classList.add('active-tab')
      });
      // Remove visible class from headings and activate heading moon
      headings.value.forEach(element =>{
        element.classList.remove ('visible')
        heading1.value.classList.add('visible')
      }) 
      // Remove visible class from tabs text and active tab text moon
      tabsText.value.forEach(element => element.classList.remove('visible'))
      tabText1.value.classList.add('visible')
      // Remove visible class from subheading class (distance and traveltime)
      subheadings.value.forEach(element => element.classList.remove('visible'))
      distance1.value.classList.add('visible')
      travelTime1.value.classList.add('visible')
    }

       ///////////////////////// DOM manipulation for Mars content //////////////////////////////
    const handleMars = () =>{
      //Remove active class from tabs and activate tab for moon
      tabs.value.forEach(element => {
        element.classList.remove('active-tab')
        tab2.value.classList.add('active-tab')
      });
      // Remove visible class from headings and activate heading moon
      headings.value.forEach(element =>{
        element.classList.remove ('visible')
        heading2.value.classList.add('visible')
      }) 
      // Remove visible class from tabs text and active tab text moon
      tabsText.value.forEach(element => element.classList.remove('visible'))
      tabText2.value.classList.add('visible')
      // Remove visible class from subheading class (distance and traveltime)
      subheadings.value.forEach(element => element.classList.remove('visible'))
      distance2.value.classList.add('visible')
      travelTime2.value.classList.add('visible')
    }

           ///////////////////////// DOM manipulation for Europa content //////////////////////////////
    const handleEuropa = () =>{
      //Remove active class from tabs and activate tab for moon
      tabs.value.forEach(element => {
        element.classList.remove('active-tab')
        tab3.value.classList.add('active-tab')
      });
      // Remove visible class from headings and activate heading moon
      headings.value.forEach(element =>{
        element.classList.remove ('visible')
        heading3.value.classList.add('visible')
      }) 
      // Remove visible class from tabs text and active tab text moon
      tabsText.value.forEach(element => element.classList.remove('visible'))
      tabText3.value.classList.add('visible')
      // Remove visible class from subheading class (distance and traveltime)new-branch
      subheadings.value.forEach(element => element.classList.remove('visible'))
      distance3.value.classList.add('visible')
      travelTime3.value.classList.add('visible')
    }

               ///////////////////////// DOM manipulation for Titan content //////////////////////////////
    const handleTitan = () =>{
      //Remove active class from tabs and activate tab for moon
      tabs.value.forEach(element => {
        element.classList.remove('active-tab')
        tab4.value.classList.add('active-tab')
      });
      // Remove visible class from headings and activate heading moon
      headings.value.forEach(element =>{
        element.classList.remove ('visible')
        heading4.value.classList.add('visible')
      }) 
      // Remove visible class from tabs text and active tab text moon
      tabsText.value.forEach(element => element.classList.remove('visible'))
      tabText4.value.classList.add('visible')
      // Remove visible class from subheading class (distance and traveltime)
      subheadings.value.forEach(element => element.classList.remove('visible'))
      distance4.value.classList.add('visible')
      travelTime4.value.classList.add('visible')
    }
    
    return { 
      tabs,headings,tabsText,subheadings,
      tab1, tab2, tab3, tab4,
      heading1, heading2, heading3, heading4, 
      tabText1, tabText2, tabText3, tabText4,
      distance1, distance2, distance3, distance4,
      travelTime1, travelTime2, travelTime3, travelTime4,
      moonImg, 
      handleMoon, handleMars, handleEuropa, handleTitan}
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
  transition: all .5s;
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
  opacity: 1;
}
.active-tab{
    transform: translateY(-3px);
    border-bottom: 3px solid var(--ter-color);
}
.active-tab:hover{
    transform: translateY(-3px);
    border-bottom: 3px solid var(--ter-color);
}
</style>