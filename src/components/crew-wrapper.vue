<template>
  <div class="crew-wrapper">
      <div v-for="title in tabsTitle" :key="title" @click="selectedTitle = title" >
          <div>{{title}}</div>
      </div>
  </div>
  <slot/>
</template>

<script>
import { ref } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'
export default {
    name:"crewWrapper", 
    setup(props, {slots}) {
        const tabsTitle = ref(slots.default().map((tab) => tab.props.title))
        const selectedTitle = ref(tabsTitle.value[0])

        provide('selectedTitle',selectedTitle)

        return{
            tabsTitle, 
            selectedTitle
        }
    }

}
</script>

<style>

</style>