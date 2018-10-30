<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home';
import ItemCard from './components/ItemCard';

export default {
  name: 'App',
  components: {
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
}
</style>
