<template>
  <section class="crew-container">
    <div class="header">
      <span>02</span>
      <p class="heading5">Meet your crew</p>
    </div>
    <tab>
    <template v-slot:douglas >
      <div class="slot_container" :class="{douglas: visibleDouglas == true}">
        <div class="slot_container-text">
          <p class="heading4">
            Commander
          </p>
          <p class="heading3">
            Douglas Hurley
          </p>
          <p class="body-text">
            Douglas Gerald Hurley is an American engineer, 
            former Marine Corps pilot and former NASA astronaut. 
            He launched into space for the third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
        <div class="slot_container-img">
            <img class="img" src="../assets/img/crew/image-douglas-hurley.webp" alt="Could not fetch img check src">
            <div class="img-line"></div>
        </div>
      </div>
    </template>
    <template v-slot:mark >
    <div class="slot_container" :class="{mark: visibleMark == true}">
      <div class="slot_container-text">
        <p class="heading4">
          Mission specialist
        </p>
        <p class="heading3">
           MARK SHUTTLEWORTH
        </p>
        <p class="body-text">
          Mark Richard Shuttleworth is the founder and CEO of Canonical, 
          the company behind the Linux-based Ubuntu operating system. 
          Shuttleworth became the first South African to travel to space as a space tourist.
        </p>
      </div>
      <div class="slot_container-img">
          <img class="img" src="../assets/img/crew/image-mark-shuttleworth.webp" alt="Could not fetch img check src">
          <div class="img-line"></div>
      </div>
    </div>
  </template>
  <template v-slot:victor >
      <div class="slot_container" :class="{victor: visibleVictor == true}">
      <div class="slot_container-text">
        <p class="heading4">
          Pilot
        </p>
        <p class="heading3">
           Viktor Glover
        </p>
        <p class="body-text">
          Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. 
          Glover is a commander in the U.S. Navy where he pilots an F/A-18.
          He was a crew member of Expedition 64, and served as a station systems flight engineer. 
        </p>
      </div>
      <div class="slot_container-img">
          <img class="img" src="../assets/img/crew/image-victor-glover.webp" alt="Could not fetch img check src">
          <div class="img-line"></div>
      </div>
    </div>
  </template>
  <template v-slot:anousheh >
      <div class="slot_container" :class="{anousheh: visibleAnousheh == true}">
      <div class="slot_container-text">
        <p class="heading4">
          Flight Engineer
        </p>
        <p class="heading3">
           Anousheh Ansari
        </p>
        <p class="body-text">
          Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
          Ansari was the fourth self-funded space tourist, 
          the first self-funded woman to fly to the ISS, and the first Iranian in space. 
        </p>
      </div>
      <div class="slot_container-img">
          <img class="img" src="../assets/img/crew/image-anousheh-ansari.webp" alt="Could not fetch img check src">
          <div class="img-line"></div>
      </div>
    </div>
  </template>
  </tab>
  <div class="dots-container">
    <div class="dot" @click="douglasTab" ref="douglasDot"></div>
    <div class="dot" @click="markTab" ref="markDot"></div>
    <div class="dot" @click="victorTab" ref="victorDot"></div>
    <div class="dot" @click="anoushehTab" ref="anoushehDot"></div>
  </div>
  </section>
</template>

<script>
import {onMounted, ref} from 'vue'
import tab from './tab.vue'
export default {
  components: { tab },
  setup() {
    ///////////////////// Variables//////////////////////////////////
    // Containers refs 
    const visibleDouglas = ref(true)
    const visibleMark = ref(false)
    const visibleVictor = ref(false)
    const visibleAnousheh = ref(false)
    // Dots refs
    const dots = ref()
    const douglasDot = ref()
    const markDot = ref()
    const victorDot = ref()
    const anoushehDot = ref()

    // All Dots stored on mounted 
    onMounted(()=>{
      dots.value =  document.querySelectorAll('.dot')
      douglasDot.value.classList.add('white')
    })


// Toggle tabs 
    const douglasTab = () =>{
      // Tabs
      visibleMark.value = false
      visibleVictor.value = false
      visibleAnousheh.value = false
      visibleDouglas.value = true
      // Remove dots color and assign to proper one 
      dots.value.forEach(element => {
        element.classList.remove('white')
      });
      douglasDot.value.classList.add('white')
    }
    const markTab = () =>{
      visibleDouglas.value = false
      visibleVictor.value = false
      visibleAnousheh.value = false
      visibleMark.value = true
      // Remove dots color and assign to proper one 
      dots.value.forEach(element => {
        element.classList.remove('white')
      });
      markDot.value.classList.add('white')
    }
    const victorTab = () =>{
      visibleDouglas.value = false
      visibleMark.value = false
      visibleAnousheh.value = false
      visibleVictor.value = true
      // Remove dots color and assign to proper one 
      dots.value.forEach(element => {
        element.classList.remove('white')
      });
      victorDot.value.classList.add('white')
      console.log(victorDot.value);
    }
    const anoushehTab = () =>{
      visibleDouglas.value = false
      visibleMark.value = false
      visibleVictor.value = false
      visibleAnousheh.value = true
      console.log(visibleAnousheh.value);
      // Remove dots color and assign to proper one 
      dots.value.forEach(element => {
        element.classList.remove('white')
      });
      anoushehDot.value.classList.add('white')
    }
    return {visibleDouglas,visibleMark,visibleVictor,visibleAnousheh,
    dots, douglasDot, markDot, victorDot, anoushehDot,
    douglasTab, markTab, victorTab, anoushehTab}
  }
}
</script>

<style scoped>
.crew-container{
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: calc(100vh - 12.8rem);
}
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40rem;
    position: absolute;
    top: 10rem;
    left: 10vw;
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
.slot_container{
  display: none;
  height: 100%;
}
.slot_container-text{
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 10vw;
}
.heading4{
  text-transform: uppercase;
  color: rgba(255, 255, 255, .5);
  margin-bottom: 1rem;
}
.heading3{
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
.body-text{
  line-height: 32px;
  letter-spacing: 0;
  width: 44rem;
}
.slot_container-img{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  margin-left: 15rem;
}
.img{
  height: 100%;
  width: auto;
}
.dots-container{
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 13.2rem;
  top: 75vh;
  left: 10vw;
}
.dot{
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, .17);
  transition: all .2s;
}
.dot:hover{
  background-color:rgba(255, 255, 255, .5);
  cursor: pointer;
}

/* Animation */
/* Toggle visibility of single tab */
.douglas{
  display: flex;
}
.mark{
  display: flex;
}
.victor{
  display: flex;
}
.anousheh{
  display: flex;
}
.white{
  background-color: var(--ter-color);
}
/*************************** Responsive design ****************************************/
@media only screen and (max-width:1700px) {
  .slot_container-img{
    margin-left: 5rem;
  }
}
@media only screen and (max-width:1475px) {
  .slot_container-img{
    margin-left: 0;
  }
}

@media only screen and (max-width: 1400px) {
  .slot_container-text{
    margin-left: 5vw;
  }
  .header {
    left: 5vw;
  }
  .dots-container{
    left: 5vw;
  }
}
@media only screen and (max-width:1300px) {
  .slot_container{
    justify-content: space-between;
  }
  .img{
    height: 80%;
  }
}
@media only screen and (max-width:1050px) {
  .img{
    height: 70%;
  }
}
@media only screen and (max-width:1000px) {
.crew-container{
  height: calc(100vh - 9rem);
}
}
@media only screen and (max-width:945px) {
  .img{
    height: 60%;
  }
}
@media only screen and (max-width:850px) {
.slot_container {
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
.slot_container-text, .slot_container-img{
  margin: 0;
}
.slot_container-text{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55%;
  width: 50vw;
}
.body-text{
  width: 53rem;
}
.slot_container-img{
  height: 45%;
}
.img{
  height: 100%;
}
.heading4{
  font-size: 24px;
  }
.heading3{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  width: 53rem;
}
.body-text{
  font-size: 16px;
  line-height: 28px;
  text-align: center;
}
.heading5{
  font-size: 20px;
}
.header span {
  font-size: 20px;
}
.header{
  width: 30rem;
  top: 5vh;
}
.dots-container{
  top: 45%;
  left: 40%;
}
}
@media only screen and (max-width:650px) {
  .header {
    width: 100vw;
    position: static;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  .header span {
    margin-right: 2rem;
  }
  .header span, .heading5 {
    font-size: 16px;
    letter-spacing: 2.7px;
  }
  .slot_container-img {
    display: flex;
    justify-content: center;
    align-items: center;
    order: -1;
    height: 50%;
  }
  .img{
    height: 22.3rem;
  }
  .img-line{
    width: 90vw;
    border-bottom: 3px solid #383B4B;
  }
  .slot_container-text, .body-text, .heading3 {
    width: 90vw;
  }
  .heading4 {
    font-size: 16px;
  }
  .heading3 {
    font-size: 24px;
  }
  .body-text {
    line-height: 25px;
    font-size: 15px;
  }
  .dots-container {
    top: 48vh;
    left: calc(50% - 7rem)
  }
}


</style>