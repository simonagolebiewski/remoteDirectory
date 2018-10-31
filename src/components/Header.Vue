<template>
<div class="header-container">
  <div class="header-container__border-top"></div>
  <div class="header-container__share-links">
    <div>> Share</div>
    <div></div>
    <div></div>
    <div></div>
    <div>+ Contribute</div>
  </div>
  <div class="header-container__help-link"><a href="#">Care to help? Tell us why you’re interested in remote work.</a></div>
</div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.header-container {
  &__border-top {
    border-top: 4px solid #F84F78;
    margin-bottom: 10px;
  }
  &__share-links {
    display: inline-block;
    float: left;
    margin-left: 5%;
    div {
      display: inline-block;
      font-family: 'Roboto-Bold', sans-serif;
      font-size: 14px;
      color: #24292E;
    }
  }
  &__help-link {
    display: inline-block;
    float: right;
    margin-right: 5%;
    a {
      color: #1CB8C1;
      font-family: 'Roboto-Bold', sans-serif;
      font-size: 14px;
      text-decoration: none;
    }
  }
}
</style>
