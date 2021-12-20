<template>
  <div class="technology-component">
    <div class="header">
      <span>03</span>
      <p class="heading5">Space Launch 101</p>
    </div>
    <div class="tab-container">
      <div class="numbers-container">
        <div class="number" ref="number1" @click="handleTabLaunch">1</div>
        <div class="number" ref="number2" @click="handleTabSpaceport">2</div>
        <div class="number" ref="number3" @click="handleTabSpaceCapsule">3</div>
      </div>
      <Tab>
        <template v-slot:launch>
          <div class="slot_parrent-technology" :class="{launch:isLaunch}">
            <div class="slot_container-technology">
              <div class="text-container">
                <p class="nav-text">
                  The terminology...
                </p>
                <p class="heading3">
                  Launch Vehicle
                </p>
                <p class="body-text">
                  A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload 
                  from Earth's surface to space, usually to Earth orbit or beyond. 
                  Our WEB-X carrier rocket is the most powerful in operation. 
                  Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
                </p>
              </div>
            </div>
            <div class="img_container-technology">
              <picture>
                <source media="(max-width: 1000px)" srcset="../assets/img/technology/image-launch-vehicle-landscape.jpg">
              <img class="img" src="../assets/img/technology/image-launch-vehicle-portrait.jpg" alt="Could not fetched img, check src">
              </picture>
            </div>
          </div>
        </template>
        <template v-slot:spaceport>
          <div class="slot_parrent-technology" :class="{spaceport:isSpaceport}">
            <div class="slot_container-technology">
              <div class="text-container">
                <p class="nav-text">
                  The terminology...
                </p>
                <p class="heading3">
                  SPACEPORT
                </p>
                <p class="body-text">
                  A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                  by analogy to the seaport for ships or airport for aircraft. 
                  Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
                </p>
              </div>
            </div>
            <div class="img_container-technology">
              <picture>
                <source media="(max-width:1000px)" srcset="../assets/img/technology/image-spaceport-landscape.jpg">
              <img class="img" src="../assets/img/technology/image-spaceport-portrait.jpg" alt="Could not fetched img, check src">
              </picture>
            </div>
          </div>
        </template>
        <template v-slot:spacecapsule>
          <div class="slot_parrent-technology" :class="{spacecapsule:isSpacecapsule}">
            <div class="slot_container-technology">
              <div class="text-container">
                <p class="nav-text">
                  The terminology...
                </p>
                <p class="heading3">
                  SPACE CAPSULE
                </p>
                <p class="body-text">
                  A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings.
                  Our capsule is where you'll spend your time during the flight. 
                  It includes a space gym, cinema, and plenty of other activities to keep you entertained.
                </p>
              </div>
            </div>
            <div class="img_container-technology">
              <picture>
                <source media="(max-width:1000px)" srcset="../assets/img/technology/image-space-capsule-landscape.jpg">
              <img class="img" src="../assets/img/technology/image-space-capsule-portrait.jpg" alt="Could not fetched img, check src">
              </picture>
            </div>
          </div>
        </template>
      </Tab>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import Tab from "./tab.vue";
import { onMounted } from '@vue/runtime-core';
export default {
    name: "technologyComponent",
    components: { Tab }, 
    setup() {
      // variables
      const numbers = ref(null)
      const number1 = ref(null)
      const number2 = ref(null)
      const number3 = ref(null)
      const isLaunch = ref(true)
      const isSpaceport = ref(false)
      const isSpacecapsule = ref(false)

      // Store number css into ref number
      onMounted(()=>{
        numbers.value = document.querySelectorAll('.number')
        number1.value.classList.add('active')
        // console.log(numbers.value);
      })

      // Handle Tabs 
      const handleTabLaunch = () =>{
        numbers.value.forEach(element => {
          element.classList.remove('active')
          number1.value.classList.add('active')
          isSpaceport.value = false
          isSpacecapsule.value = false
          isLaunch.value = true
        });
      }
      const handleTabSpaceport = () =>{
        numbers.value.forEach(element => {
          element.classList.remove('active')
          number2.value.classList.add('active')
          isSpaceport.value = true
          isSpacecapsule.value = false
          isLaunch.value = false
        });
      }
      const handleTabSpaceCapsule = () =>{
        numbers.value.forEach(element => {
          element.classList.remove('active')
          number3.value.classList.add('active')
          isSpaceport.value = false
          isSpacecapsule.value = true
          isLaunch.value = false
        });
      }

      return{
        numbers,number1, number2, number3,
        isLaunch,isSpaceport,isSpacecapsule,
        handleTabLaunch,handleTabSpaceport,handleTabSpaceCapsule,
        }
    }
}
</script>

<style scoped>
.technology-component{
  position: relative;
}
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42rem;
    margin: 10.5vh 0 0 10vw;
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
.tab-container{
  display: flex;
}
.numbers-container{
  margin: 15vh 9rem 0 10vw;
  height: 30.3rem;
  width: 8.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.number{
  height: 8rem;
  width: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--shady-color);
  border-radius: 50%;
  cursor: pointer;
  transition: all .2s;

  font-family: 'bellefair';
  font-size: 32px;
  letter-spacing: 2px;
}
.number:hover{
  border: 1px solid var(--ter-color);
}
.slot_parrent-technology{
  width: 100%;
  display: none ;
  justify-content: space-between;
}
.slot_container-technology{
  height: 30.3rem;
  width: 47rem;
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.nav-text{
  margin-bottom: 1rem;
  color: var(--sec-color);
}
.heading3{
  margin-bottom: 3rem;
  text-transform: uppercase;
}
img{
  width: 100%;
  max-height: 60rem;
  height: auto;
}
/************************************* Animations **********************************/
.active{
  background-color: var(--ter-color);
  color: var(--main-color);
}
.launch{
  display: flex;
}
.spaceport{
  display: flex;
}
.spacecapsule{
  display: flex;
}
/************************************* Responsive design **********************************/
@media only screen and (max-width:1100px) {
  .numbers-container, .header {
    margin-left: 1vw;
  }
  .numbers-container{
    margin-right: 3vw;
  }
  .slot_container-technology{
    width: 40rem;
  }
}
@media only screen and (max-width:1000px) {
  .header{
    margin: 3rem 0 3rem 5rem;
    width: 32rem;
  }
  .header span {
    font-size: 20px;
  }
  .heading5{
    font-size: 20px;
    letter-spacing: 3.38px;
  }
  .tab-container{
    flex-direction: column;
  }
  .numbers-container{ 
    flex-direction: row;
    width: 22vw;
    margin: 0;
    height: fit-content;
    position: absolute; 
    top: 53%;
    left: 35%;
  }
  .number{
    height: 58px;
    width: 58px;
    font-size: 24px;
    letter-spacing: 1.5px;
  }
  .slot_parrent-technology{
    flex-direction: column;
  }
  .slot_container-technology{
    width: 100vw;
    margin:0;
    height: 40vh;
  }
  .text-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .nav-text{
    font-size: 16px;
    letter-spacing: 2.7px;
  }
  .heading3{
    font-size: 40px;
  }
  .body-text{
    width: 41rem;
    font-size: 16px;
    line-height: 28px;
  }
  .img_container-technology{
    order: -1;
  }
  .img{
    max-height: 31rem;
  }
}
@media only screen and (max-width: 900px) {
  .numbers-container{
    width: 24vw;
  }
}
@media only screen and (max-width: 768px) {
  .numbers-container{
    width: 26vw;
  }
}
@media only screen and (width: 768px) and (height: 1024px) {
    .header{
    margin: 6rem 0 6rem 5rem;
    width: 32rem;
  }
}
@media only screen and (max-width: 768px) {
  .numbers-container{
    width: 32vw;
  }
}
@media only screen and (max-width: 670px) {
  .numbers-container{
    top: 49%;
    left: 33%;
    width: 35vw;
  }
}
@media only screen and (max-width: 545px) {
  .numbers-container{
    top: 47%;
    left: 31%;
    width: 39vw;
  }
}
@media only screen and (max-width: 500px) {
  .numbers-container{
    top: 45%;
    left: 28%;
    width: 45vw;
  }
}
@media only screen and (max-width: 444px) {
  .header {
    width: 25rem;
  }
  .header span {
    font-size: 16px;
    letter-spacing: 2.7px;
  }
  .heading5{
    font-size: 16px;
    letter-spacing: 2.7px;
  }
  .number{
    height: 40px;
    width: 40px;
    font-size: 16px;
    letter-spacing: 1px;
  }
  .nav-text{
    font-size: 14px;
    letter-spacing: 2.36px;
  }
  .heading3{
    font-size: 24px;
    letter-spacing: 0;
    margin-bottom: 1.5rem;
  }
  .text-container{
    margin-top: 12rem;
  }
  .body-text{
    text-align: center;
    line-height: 25px;
    font-size: 15px;
    letter-spacing: 0;
    width: 85%;
  }
}
/* Iphone 5 */
@media only screen and (width: 320px) and (height: 568px) {
  .number{
    height: 35px;
    width: 35px;
  }
  .header{
    margin: 2rem 0 2rem 5rem;
  }
  .text-container{
    margin-top: 16rem;
  }
}
/* Surface duo */
@media only screen and (width: 540px) and (height: 720px) {
  .text-container {
    margin-top: 10rem;
  }
  .number{
    height: 45px;
    width: 45px;
  }
  .numbers-container {
    top: 50%;
  }
}
/* Galaxy fold */
@media only screen and (width: 280px) and (height: 653px) {
  .header {
    margin: 1rem 0 1rem 1rem;
  }
  .text-container{
    margin-top: 15rem;
  }
  .numbers-container{
    top: 38%;
  }
}
/* Nest hub */
@media only screen and (width: 1024px) and (height: 600px) {
  .img{
    height: 30rem;
  }
  .heading3{
    font-size: 40px;
  }
  .slot_container-technology, .numbers-container{
    margin-top: 3rem;
  }
}
</style>