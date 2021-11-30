<template>
<transition name="fade">
  <router-view/>
</transition>
</template>

<style>
.fade-enter-active, 
.fade-leave-active{
  transition: all .3s;
}

.fade-enter-to, 
.fade-leave-to{
  opacity: 0.2;
}
#app{
  background-color: var(--main-color)
}
</style>
