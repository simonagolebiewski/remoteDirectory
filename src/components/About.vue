<template id="about-component-template" lang="html">
  <div>
    <h1>{{msg}}</h1>
    <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">Go Back Home</a>
  </div>
</template>

<script>
import VueRouter from 'vue-router';
export default {
  name: 'About',
  data () {
    return {
      msg: 'About this company'
    }
  },
  methods: {
    navigate() {
        this.$router.go(-1);
    }
  }
}
</script>

<style lang="css">
</style>
