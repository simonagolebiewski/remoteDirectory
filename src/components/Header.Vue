<template>
<div class="header-container">
  <div class="header-container__border-top"></div>
  <div class="header-container__share-links">
    <div class="header-container__share-links__share">> Share</div>
    <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fhiringremote.ly&text=Looking%20for%20a%20remote%20job%3F%20This%20site%20let's%20you%20efficiently%20find%20remote%20companies%20that%20are%20uniquely%20suited%20to%20you%20and%20your%20needs."><div class="header-container__share-links__icon">Tweet about us</div></a>
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
      width: 122px;
      border-radius: 4px;
      background: #F4F6F8;
      text-align: center;
      line-height: 22px;
      box-shadow: 0 2px 3px -2px rgba(24,24,24,0.20), 0 0 0 1px rgba(24,24,24,0.10);
      color: #1DA1F2;
      &:hover {
        background: #fff;
        text-decoration: underline;
      }
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
