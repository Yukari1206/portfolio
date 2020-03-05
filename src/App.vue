<template>
  <v-app>
    <v-card>
      <HeaderItem/>
        <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/works">Works</router-link> |
      <router-link to ="/contact">Contact</router-link>
        </div>
        <transition>
          <router-view />
        </transition>
    </v-card>
  </v-app>
</template>

<script>
import HeaderItem from './components/HeaderItem'
export default {
  name: 'App',
  components: {
    HeaderItem
  }
}
</script>

<style>
#nav{
   text-align: center;
   font-size: 40px;
}
HeaderItem{
  position: absolute;
}
.v-enter {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(100px, 0);
  opacity: 0;
}
.v-leave-active {
  transition: all .5s 0s ease;
}
</style>
