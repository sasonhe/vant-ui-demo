<template>
<div id="app">
  <router-view />
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body,
html {
  height: 100%;
  width: 100%;
}

#app {
  max-width: 720px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  background: #fff;
}

.login .van-field,
.login .van-field__control {
  background: transparent;
  font-size: 16px;
  color: #FFF !important;
}
.login .van-field__control::-webkit-input-placeholder {
  color: #ddd;
}

.login .van-field__control::-moz-placeholder {
  color: #ddd;
}

.login .van-field__control:-ms-input-placeholder {
  color: #ddd;
}
.login .van-field__left-icon .van-icon, .van-field__right-icon .van-icon{
  font-size: 24px;
}
.login .van-cell::after {
  position: absolute;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  content: ' ';
  pointer-events: none;
  right: 0;
  bottom: 0;
  left: 15px;
  border-bottom: 1px solid #ccc;
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
}
.login .van-cell{
  padding-left: 0;
  padding-right: 0;
}
</style>
