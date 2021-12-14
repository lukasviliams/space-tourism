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
            console.log(destinationTabs.value);
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
    width: 22vw;
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
</style>