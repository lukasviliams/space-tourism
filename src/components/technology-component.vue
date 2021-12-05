<template>
  <div class="technology-component">
    <div class="header">
      <span>03</span>
      <p class="heading5">Space Launch 101</p>
    </div>
    <div class="tab-container">
      <div class="numbers-container">
        <div class="number">1</div>
        <div class="number">2</div>
        <div class="number">3</div>
      </div>
      <Tab>
        <template v-slot:launch>
          <div class="slot_parrent-technology">
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
              <img class="img" src="../assets/img/technology/image-launch-vehicle-portrait.jpg" alt="">
            </div>
          </div>
        </template>
      </Tab>
    </div>
  </div>
</template>

<script>
import Tab from "./tab.vue";
export default {
    name: "technologyComponent",
    components: { Tab }
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

  font-family: 'bellefair';
  font-size: 32px;
  letter-spacing: 2px;
}
.slot_parrent-technology{
  width: 100%;
  display: flex ;
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
</style>