<template>
  <div id="app">
    <Header/>
    <Home/>
  </div>
</template>

<script>
import Header from './components/Header';
import Home from './components/Home';
import ItemCard from './components/ItemCard';

export default {
  name: 'App',
  components: {
    Header,
    Home,
    ItemCard
  }
}
</script>

<style>
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
}
</style>
