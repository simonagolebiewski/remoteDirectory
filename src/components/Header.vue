<template>
<div class="header-container">
  <div class="header-container__border-top"></div>
  <div class="header-container__share-links">
    <div class="header-container__share-links__share">> Share</div>
    <a href="#"><div class="header-container__share-links__icon"></div></a>
    <a href="#"><div class="header-container__share-links__icon"></div></a>
    <a href="#"><div class="header-container__share-links__icon"></div></a>
    <a href="#" class="header-container__share-links__contribute">+ Contribute</a>
  </div>
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
  }
  &__share-links {
    display: inline-block;
    margin-left: 5%;
    display: block;
    text-align: left;
    height: 30px;
    line-height: 30px;
    @media only screen and (max-width: 700px) {
      display: block;
      float: none;
      margin: 0;
      text-align: center;
    }
    &__share {
      margin-right: 8px;
    }
    &__icon {
      height: 22px;
      width: 22px;
      border-radius: 100%;
      background: #FFFFFF;
      box-shadow: 0 2px 3px -2px rgba(24,24,24,0.20), 0 0 0 1px rgba(24,24,24,0.10);
    }
    &__contribute {
      margin-left: 8px;
      font-family: 'Roboto-Bold', sans-serif;
      font-size: 14px;
      color: #24292E;
    }
    div {
      display: inline-block;
      font-family: 'Roboto-Bold', sans-serif;
      font-size: 14px;
      color: #24292E;
      vertical-align: middle;
    }
  }
  &__help-link {
    display: inline-block;
    float: right;
    margin-right: 5%;
    @media only screen and (max-width: 700px) {
      display: block;
      float: none;
      margin: 0;
      text-align: center;
    }
    a {
      color: #1CB8C1;
      font-family: 'Roboto-Bold', sans-serif;
      font-size: 14px;
      text-decoration: none;
    }
  }
}
</style>
