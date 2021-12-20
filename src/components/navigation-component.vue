<template>
<div class="navigation">
<div id="nav">
  <div class="circle">
    <div class="element1"></div>
    <div class="element2"></div>
    <div class="element3"></div>
    <div class="element4"></div>
  </div>
  <div class="line"></div>
  <div class="router-container" ref="routerContainer">
      <div class="router-link-content">
        <router-link class="nav-text" :to="{name: 'Home'}"><span>00</span> Home</router-link>
        <router-link class="nav-text" :to="{name: 'Destination'}"><span>01</span>Destination</router-link>
        <router-link class="nav-text" :to="{name: 'Crew'}"><span>02</span>Crew</router-link>
        <router-link class="nav-text" :to="{name: 'Technology'}"><span>03</span>Technology</router-link>
      </div>
  </div>
      <div class="btn-container" @click="handleBtnClick">
        <div class="btn">
          <div class="btn-line1" ref="btn1"></div>
          <div class="btn-line2" ref="btn2"></div>
          <div class="btn-line3" ref="btn3"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  name:'navigationComponent',
  setup() {
    const btn1 = ref(null)
    const btn2 = ref(null)
    const btn3 = ref(null)
    const routerContainer = ref(null)

    const handleBtnClick = () =>{
      btn1.value.classList.toggle('rotate1')
      btn2.value.classList.toggle('move')
      btn3.value.classList.toggle('rotate2')
      routerContainer.value.classList.toggle('translate')
    }

    return {handleBtnClick, btn1, btn2, btn3, routerContainer}
  }
}
</script>

<style scoped>
.btn-container{
  display: none;
  width: 4rem;
  height: 4rem;
}
.btn{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-line1, .btn-line2, .btn-line3{
  background-color: var(--sec-color);
  height: .3rem;
  width: 2.5rem;
  transition: all .3s;
}
.btn-line1{
  position: absolute;
  top: 8px;
}
.btn-line2{
  position: absolute;
  top: 16px;
}
.btn-line3{
  position: absolute;
  top: 24px;
}
span{
  color: var(--ter-color);
  margin-right: .5rem;
}
.line{
  position: absolute;
  width: 35%;
  left: 10%;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  z-index: 1;
}
.move{
  margin-top: .8rem;
  margin-bottom: .8rem;
}
.router-link-content{
    height: 100%;
    margin: 0 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.router-container {
    width: 60%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    transition: all .3s ease-in-out;
}
.router-container {
    width: 60%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
}
.router-container {
    width: 60%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
}
.router-container {
    width: 60%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
}
.navigation {
    width: 100vw;
    height: 12.8rem;
}
/* Basic router style */
#nav {
  position: relative;
  height: 100%;
  padding: 40px 0 0 80px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
#nav a {
color: rgba(255, 255, 255, 0.7);
line-height: 8rem;
text-decoration: none;
border-bottom: 3px solid transparent;
transition: all .1s ease-in-out;
}
#nav a.router-link-exact-active {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  line-height: 8rem;
  border-bottom: 3px solid var(--ter-color);
}
#nav a:hover{
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
}
/*************************** navigation CSS element cirle *****************************/
.circle{
  overflow: hidden;
  position: relative;
  height: 48px;
  width: 48px;
  background-color: var(--main-color);
  border-radius: 50%;
}
.element1{
  position: absolute;
  top: -24px;
  left: -24px;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: var(--ter-color);
}
.element2{
  position: absolute;
  top: -24px;
  right: -24px;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: var(--ter-color);
}
.element3{
  position: absolute;
  top: 24px;
  left: -24px;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: var(--ter-color);
}
.element4{
  position: absolute;
  top: 24px;
  right: -24px;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: var(--ter-color);
}
/************************* Responsive design **************************************/
@media only screen and (max-width: 1500px) {
  .line{
    width: 30%;
    left: 15%;
  }
}
@media only screen and (max-width: 1300px) {
  .line{
    left: 17%;
  }
}
@media only screen and (max-width:1150px) {
  .line{
    display: none;
  }
  .router-link-content{
    margin: 0;
  }
}
@media only screen and (max-width:1000px) {
#nav {
  padding: 0 0 0 4rem;
}
#nav a {
line-height: 7.5rem;
}
#nav a.router-link-exact-active {
  line-height: 7.5rem;
}
.navigation {
  height: 10vh;
}
span{
  display: none;
}
}
/******************** Screens < 650px ***********************/
@media only screen and (max-width:650px) {
  #nav {
  position: relative;
  padding: 0;
  height: 100vh;
}
#nav a{
  display: flex;
}
.circle{
  position: absolute;
  top: 2rem;
  left: 5%;
}
.router-container {
  transform: translateX(500px);
  position: absolute;
  left:30%;
  width: 70%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  overflow: hidden;
  z-index: 100;
}
span {
  display: block;
}
  .router-link-content{
    margin-top: 13vh;
    margin-left: 15%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.btn-container{
  display: block;
  position: absolute;
  top: 3.5rem;
  left: 90%;
}
}
/* screens < 350 */ 
@media only screen and (max-width: 350px) {
  .circle{
    top: 0;
  }
  .btn-container{
    top: 1rem;
  }
}
/*********************** animations ************************/
.move{
  transform: translateX(-50rem);
  opacity: 0;
}
.rotate1{
  top: 17px;
  transform: rotate(1215deg);
}
.rotate2{
  top: 17px;
  transform: rotate(-1215deg);
}
.translate{
  transform: translateX(0);
}
</style>