<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Home from '@/components/Home';
import ItemCard from '@/components/ItemCard';
import About from '@/components/About';
import VueRouter from 'vue-router';


export default {
  name: 'App',
  components: {
    Header,
    Home,
    ItemCard,
    About
  }
}
</script>

<style>
* {
    -webkit-overflow-scrolling: touch;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #F4F6F8;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
