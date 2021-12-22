<template>
    <section class="destination-container">
        <div class="header">
            <span>01</span>
            <p class="heading5">Pick your destination</p>
        </div>
        <tab>
            <template v-slot:moon>
                <div class="slot-container" :class="{moon: visibleMoon}">
                    <div class="img-container">
                        <img class="img" src="../assets/img/destination/image-moon.webp" alt="Could not load image, please check src">
                    </div>
                    <div class="text-container">
                        <div class="nav-container">
                            <p class="nav_text-destination" @click="handleMoon">Moon</p>
                            <p class="nav_text-destination" @click="handleMars">Mars</p>
                            <p class="nav_text-destination" @click="handleEuropa">Europa</p>
                            <p class="nav_text-destination" @click="handleTitan">Titan</p>
                        </div>
                        <p class="heading2">Moon</p>
                        <p class="body-text">
                            See our planet as you’ve never seen it before. 
                            A perfect relaxing trip away to help regain perspective and come back refreshed. 
                            While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                        </p>
                        <div class="line"></div>
                        <div class="subheading-parrent">
                            <div class="subheading-container">
                                <p class="subheading2">avg. distance</p>
                                <p class="subheading1">384,400 km</p>
                            </div>
                            <div class="subheading-container">
                                <p class="subheading2">est. travel time</p>
                                <p class="subheading1">3 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:mars>
                <div class="slot-container" :class="{mars: visibleMars}">
                    <div class="img-container">
                        <img class="img" src="../assets/img/destination/image-mars.webp" alt="Could not load image, please check src">
                    </div>
                    <div class="text-container">
                        <div class="nav-container">
                            <p class="nav_text-destination" @click="handleMoon">Moon</p>
                            <p class="nav_text-destination" @click="handleMars">Mars</p>
                            <p class="nav_text-destination" @click="handleEuropa">Europa</p>
                            <p class="nav_text-destination" @click="handleTitan">Titan</p>
                        </div>
                        <p class="heading2">Mars</p>
                        <p class="body-text">
                            Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                            the tallest planetary mountain in our solar system. 
                            It’s two and a half times the size of Everest!
                        </p>
                        <div class="line"></div>
                        <div class="subheading-parrent">
                            <div class="subheading-container">
                                <p class="subheading2">avg. distance</p>
                                <p class="subheading1">225 mil. km</p>
                            </div>
                            <div class="subheading-container">
                                <p class="subheading2">est. travel time</p>
                                <p class="subheading1">9 months</p>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:europa>
                <div class="slot-container" :class="{europa: visibleEuropa}">
                    <div class="img-container">
                        <img class="img" src="../assets/img/destination/image-europa.webp" alt="Could not load image, please check src">
                    </div>
                    <div class="text-container">
                        <div class="nav-container">
                            <p class="nav_text-destination" @click="handleMoon">Moon</p>
                            <p class="nav_text-destination" @click="handleMars">Mars</p>
                            <p class="nav_text-destination" @click="handleEuropa">Europa</p>
                            <p class="nav_text-destination" @click="handleTitan">Titan</p>
                        </div>
                        <p class="heading2">Europa</p>
                        <p class="body-text">
                            The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. 
                            With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, 
                            or simple relaxation in your snug wintery cabin.
                        </p>
                        <div class="line"></div>
                        <div class="subheading-parrent">
                            <div class="subheading-container">
                                <p class="subheading2">avg. distance</p>
                                <p class="subheading1">628 mil. km</p>
                            </div>
                            <div class="subheading-container">
                                <p class="subheading2">est. travel time</p>
                                <p class="subheading1">3 years</p>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:titan>
                <div class="slot-container" :class="{titan: visibleTitan}">
                    <div class="img-container">
                        <img class="img" src="../assets/img/destination/image-titan.webp" alt="Could not load image, please check src">
                    </div>
                    <div class="text-container">
                        <div class="nav-container">
                            <p class="nav_text-destination" @click="handleMoon">Moon</p>
                            <p class="nav_text-destination" @click="handleMars">Mars</p>
                            <p class="nav_text-destination" @click="handleEuropa">Europa</p>
                            <p class="nav_text-destination" @click="handleTitan">Titan</p>
                        </div>
                        <p class="heading2">Titan</p>
                        <p class="body-text">
                            The only moon known to have a dense atmosphere other than Earth, 
                            Titan is a home away from home (just a few hundred degrees colder!). 
                            As a bonus, you get striking views of the Rings of Saturn.
                        </p>
                        <div class="line"></div>
                        <div class="subheading-parrent">
                            <div class="subheading-container">
                                <p class="subheading2">avg. distance</p>
                                <p class="subheading1">1.6 bil. km</p>
                            </div>
                            <div class="subheading-container">
                                <p class="subheading2">est. travel time</p>
                                <p class="subheading1">7 years</p>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </tab>
    <tab>
    </tab>
    </section>
</template>

<script>
import { onMounted, ref } from 'vue';
import tab from './tab.vue';
export default {
    components:{tab},
    name:'destinationComponent',
    setup() {
        // refs
        const destinationTabs = ref(null)
        const visibleMoon = ref(true)
        const visibleMars = ref(false)
        const visibleEuropa = ref(false)
        const visibleTitan = ref(false)

        // store tabs into refs on mount
        onMounted(()=>{
            destinationTabs.value = document.querySelectorAll('.nav_text-destination')
            destinationTabs.value[0].classList.add('active')
            // console.log(destinationTabs.value);
        })

        // Handle tabs 
        const handleMoon = () =>{
            destinationTabs.value.forEach(element => {
                element.classList.remove('active')
            });
            visibleMoon.value = true
            visibleMars.value = false
            visibleEuropa.value = false
            visibleTitan.value = false
            destinationTabs.value[0].classList.add('active')
        }
        const handleMars = () =>{
            destinationTabs.value.forEach(element => {
                element.classList.remove('active')
            });
            visibleMoon.value = false
            visibleMars.value = true
            visibleEuropa.value = false
            visibleTitan.value = false
            destinationTabs.value[5].classList.add('active')
        }
        const handleEuropa = () =>{
            destinationTabs.value.forEach(element => {
                element.classList.remove('active')
            });
            visibleMoon.value = false
            visibleMars.value = false
            visibleEuropa.value = true
            visibleTitan.value = false
            destinationTabs.value[10].classList.add('active')
        }
        const handleTitan = () =>{
            destinationTabs.value.forEach(element => {
                element.classList.remove('active')
            });
            visibleMoon.value = false
            visibleMars.value = false
            visibleEuropa.value = false
            visibleTitan.value = true
            destinationTabs.value[15].classList.add('active')
        }

        return {
            destinationTabs,
            visibleMoon, visibleMars, visibleEuropa, visibleTitan,
            handleMoon, handleMars,handleEuropa,handleTitan
        }
    }
}
</script>

<style scoped>
.destination-container{
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
    width: 50rem;
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
.img-container{
    margin-top: 25vh;
    margin-left: 15vw;
    height: 55vh;
}
.img{
    height: 100%;
    width: auto;
}
.slot-container{
    display: none;
    gap: 20vw;
}
.text-container{
    margin-top: 25vh;
    /* width: 22vw; */
    width: 42rem
}
.nav-container{
    width: 25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
}
.nav_text-destination{
    font-family: 'barlow';
    font-size: 16px;
    letter-spacing: 2,7px;
    text-transform: uppercase;
    color: var(--sec-color);
    cursor: pointer;
    padding-bottom: 1rem;
    transition: all .2s;
    border-bottom: 3px solid transparent;
}
.nav_text-destination:hover{
    color: var(--ter-color);
    border-bottom: 3px solid rgba(255,255,255,.5);
}
.heading2{
    text-transform: uppercase;
    letter-spacing: 0;
    margin-bottom: 3rem;
}
.body-text{
    margin-bottom: 6rem;
}
.line{
    border-bottom: 1px solid #383B4B;
    margin-bottom: 4rem;
}
.subheading-parrent{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.subheading-container:first-child {
    margin-right: 8rem;
}
.subheading2{
    color: var(--sec-color);
    text-transform: uppercase;
    margin-bottom: 1rem;
}
.subheading1{
    text-transform: uppercase;
}
/* *******************Animations*********************** */
.active{
    border-bottom: 3px solid var(--ter-color);
    color: var(--ter-color);
}
.moon{
    display: flex;
}
.mars{
    display: flex;
}
.europa{
    display: flex;
}
.titan{
    display: flex;
}
/* **********************Responsive design**************************** */
@media only screen and (max-width: 1450px) {
    .slot-container{
        gap: 10vw;
    }
}
@media only screen and (max-width: 1300px) {
    .img-container {
        margin-left: 5vw;
    }
}
@media only screen and (max-width:1100px) {
    .img-container{
        height: 40vh;
        margin-top: 30vh;
    }
}

@media only screen and (max-width:950px) {
    .slot-container{
        flex-direction: column;
        gap: 0;
    }
    .header{
        top: 5rem;
        left: 0;
    }
    .heading5, .header span{
        font-size: 20px;
        letter-spacing: 3.38px;
    }
    .header span {
        margin-right: 3rem;
    }
    .img-container{
    height: 25vh;
    margin: 12vh 0 5vh 0;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .text-container{
        margin: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .nav-container{
        width: 30rem;
        margin-bottom: 1.5rem;
    }
    .nav_text-destination{
        font-size: 16px;
        letter-spacing: 2.7px;
    }
    .heading2{
        font-size: 80px;
        letter-spacing: 0;
        margin-bottom: 1.5rem;
    }
    .body-text{
        width: 53rem;
        font-size: 16px;
        line-height: 28px;
        text-align: center;
        margin-bottom: 2rem;
    }
    .line{
        width: 53rem;
    }
    .subheading2{
        font-size: 14px;
        letter-spacing: 2.36px;
    }
    .subheading1{
        font-size: 28px;
    }
}
@media only screen and (max-width:650px) {
    .header{
        position: static;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .heading5, .header span {
        font-size: 16px;
        letter-spacing: 2.7px;
    }
    .img-container{
        margin-top: 3vh;
    }
    .nav_text-destination, .subheading2{
        font-size: 14px;
        letter-spacing: 2.36px;
    }
    .heading2{
        font-size: 56px;
    }
    .body-text{
        font-size: 15px;
    }
    .subheading1{
        font-size: 28px;
    }
    .subheading-parrent{
        width: 28rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .subheading-container:first-child{
        margin:0 0 3rem 0 ;
    }
    .subheading-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
@media only screen and (max-width:555px) {
    .body-text{
        width: 38rem;
    }
    .line{
        width: 38rem;
        margin-bottom: 2rem;
    }
}
@media only screen and (max-width:420px) {
    .body-text, .line{
        width: 90%;
    }
    .subheading-container:first-child{
        margin: 0 0 1.5rem 0;
    }
    .nav-container{
        margin: .5rem;
    }
    .img-container{
        margin: 3vh 0 2vh 0;
    }
}
@media only screen and (max-width:340px) {
    .nav-container{
        width: 90%;
    }
}
@media only screen and (max-width:300px) {
    .img-container{
        height: 15rem;
    }
}

/* *****************Mobile devices********************** */
/* Moto G4 and Galaxy S5*/
@media only screen and (width:360px) and (height: 640px) {
    .destination-container{
        margin-top: 4vh;
        height: 86vh;
    }
    .img-container{
        margin: 1vh 0;
    }
    .subheading-parrent{
        flex-direction: row;
        width: 90%;
    }
    .subheading-container,.subheading-container:first-child{
        margin: 0;
    }
    .heading2{
        margin-bottom: 1vh;
    }
    .subheading-container:first-child{
        margin-right: auto;
    }
}

/* Pixel 2 */
@media only screen and (width: 411px) and (height:731px) {
    .heading2{
        margin-bottom: 1rem;
    }
    .subheading-container:first-child {
        margin-bottom: 1rem;
    }
}
/* Iphone 5SE */
@media only screen and (width: 320px) and (height:568px) {
    .nav-container{
        margin-bottom: 0;
    }
    .heading2{
        font-size: 40px;
        margin-bottom: .5rem;
    }
    .body-text{
        font-size: 13px;
    }
    .subheading-parrent{
        flex-direction: row;
    }
    .subheading-container, .subheading-container:first-child{
        margin: 0;
    }
    .subheading2{
        font-size: 12px;
    }
    .subheading-container:first-child{
        margin-right: auto;
    }
    .subheading1{
        font-size: 24px;
    }
    .body-text{
        margin-bottom: .5rem;
    }
    .img-container{
        margin-bottom: 3vh;
    }
    .header{
        margin-top: 3vh;
    }
}
/* Iphone 6,7,8 */
@media only screen and (width: 375px) and (height:667px) {
    .header{
        margin-top: 2rem;
    }
    .heading2{
        margin-bottom: 1rem;
    }
    .subheading-parrent{
        flex-direction: row;
        width: 90%;
    }
    .text-container, .subheading-container:first-child{
        margin: 0;
    }
    .subheading-container:first-child{
        margin-right: auto;
    }
    .body-text{
        margin-bottom: .5rem;
    }
    .line{
        margin-bottom: 1.5rem;
    }
}
/* Iphone 6 plus */
@media only screen and (width: 414px) and (height: 736px) {
    .header{
        margin-top: 3vh;
    }
    .header span {
        font-size: 18px;
    }
    .heading5{
        font-size: 18px;
    }
    .subheading-parrent{
        flex-direction: row;
        width: 90%;
    }
    .subheading-container, .subheading-container:first-child{
        margin: 0;
    }
    .subheading-container:first-child{
        margin-right: auto;
    }
}
/* Iphone X */ 
@media only screen and (width: 375px) and (height: 812px) {
    .subheading-container:first-child{
        margin-bottom: 1.5rem;
    }
}
/* Ipad pro */
@media only screen and (width: 1024px) and (height: 1366px) {
    .img-container{
        height: 35vh;
    }
}
/* Surface duo */
@media only screen and (width: 540px) and (height: 720px) {
    .subheading-parrent{
        flex-direction: row;
        width: 38rem;
    }
    .subheading-container, .subheading-container:first-child{
        margin: 0;
    }
    .subheading-container:first-child{
        margin-right: auto;
    }
}
/* Galaxy fold */ 
@media only screen and (width: 280px) and (height: 653px) {
    .header{
        margin-top: 3vh;
    }
    .heading5{
        font-size: 14px;
    }
    .header span {
        font-size: 14px;
        margin-right: 1rem;
    }
    .heading2{
        font-size: 40px;
        margin-bottom: 1rem;
    }
    .nav-container{
        margin-bottom: .5rem;
    }
    .body-text{
        font-size: 14px;
        margin-bottom: 1rem;
    }
    .subheading-parrent{
        flex-direction: row;
        width: 90%;
    }
    .subheading-container, .subheading-container:first-child{
        margin: 0;
    }
    .subheading-container:first-child{
        margin-right: auto;
    }
    .subheading2{
        font-size: 10px;
    }
    .subheading1{
        font-size: 20px;
    }
}
/* Nest Hub */
@media only screen and (width: 1024px) and (height: 600px) {
    .header{
        top: 5vh;
        left: 6.5rem;
    }
    .heading2{
        font-size: 68px;
    }
    .header span {
        font-size: 24px;
        margin-right: 3rem;
    }
    .heading5{
        font-size: 24px;
    }
    .img-container{
        margin-top: 25vh;
    }
    .text-container{
        margin-top: 15vh;
    }
    .heading2, .nav-container{
        margin-bottom: 1rem;
    }
    .body-text{
        margin-bottom: 1rem;
    }
    .line{
        margin-bottom: 2rem;
    }
}
/* Nest hub Max  */
@media only screen and (width: 1280px) and (height: 800px) {
    .header{
        top: 5vh;
        left: 6.5rem;
    }
    .heading5{
        font-size: 24px;
    }
    .header span {
        font-size: 24px;
        margin-right: 5rem;
    }
    .img-container{
        margin-top: 20vh;
    }
    .text-container{
        margin-top: 10vh;
    }
}
</style>