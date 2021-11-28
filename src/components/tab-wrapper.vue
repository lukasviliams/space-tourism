<template>
  <div class="tabs">
    <div class="nav-container" >
      <div v-for="title in tabTitle" :key="title" @click="selectedTitle = title" class="tabs-nav-text">
        {{title}}
      </div>
    </div>
      <slot/>
  </div>
</template>

<script>
import { ref, provide } from 'vue'
export default {
  name:"tabWrapper",
  setup(props, {slots}){
      const tabTitle = ref(slots.default().map((tab) => tab.props.title))
      const selectedTitle = ref(tabTitle.value[0])

      provide('selectedTitle', selectedTitle)

      return{tabTitle, selectedTitle}
  }
}
</script>

<style>
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
</style>