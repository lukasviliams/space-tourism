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
              <img class="img" src="../assets/img/technology/image-launch-vehicle-portrait.jpg" alt="Could not fetched img, check src">
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
              <img class="img" src="../assets/img/technology/image-spaceport-portrait.jpg" alt="Could not fetched img, check src">
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
              <img class="img" src="../assets/img/technology/image-space-capsule-portrait.jpg" alt="Could not fetched img, check src">
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
/* .technology-component{
  height: 74vh;
  width:100vw;
} */
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
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
</style>