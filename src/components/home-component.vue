<template>
<div class="home-container">
<div class="text-container">
  <p class="heading5">So, you want to travel to</p>
  <p class="heading1">Space</p>
  <p class="body-text">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. 
     Well sit back, and relax because we’ll give you a truly out of this world experience!
  </p>
</div>
<div class="cta-circle">
  <p class="heading4">Explore</p>
</div>
</div>
</template>

<script>
export default {
  name: 'homeComponent', 

}
</script>

<style scoped>
.home-container{
  margin-top: 30vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
.text-container{
  width: 54rem;
  height: 34rem;
}
.heading5{
  text-transform: uppercase;
}
.heading1{
  text-transform: uppercase;
}
.body-text{
  font-size: 22px;
}
.cta-circle{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 27.4rem;
  width: 27.4rem;
  background-color: var(--ter-color);
  border-radius: 50%;
  transition: all .2s;
  cursor: pointer;
}
.cta-circle:hover{
  box-shadow: 0px 0px 0px 80px var(--hover-color);
}
.heading4{
  color: var(--main-color);
  text-transform: uppercase;
}
/*************** Responsive design ***********************/

@media only screen and (max-width: 950px) {
  .home-container{
    height: 80vh;
    margin-top: 10vh;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .text-container{
    width: 42rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.heading5{
  font-size: 16px;
  line-height: auto;
  letter-spacing: 3.38px;
  margin-bottom: 2rem;
}
.body-text{
  text-align: center;
  font-size: 16px;
  line-height: 28px;
}
.cta-circle{
  height: 20rem;
  width: 20rem;
}
.cta-circle:hover{
  box-shadow: 0px 0px 0px 30px var(--hover-color);
}
}
/*************** Mobile devices  ******************/
@media only screen and (max-width: 480px) {
  .home-container{
    justify-content: flex-start;
    margin: 0;
  }
  .text-container{
    width: 90%;
  }
  .heading1{
    font-size: 80px;
    line-height: 100px;
    letter-spacing: 0;
  }
  .body-text{
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 0;
  }
}
</style>