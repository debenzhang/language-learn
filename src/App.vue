<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  position:fixed;
  left:3px;
  top:3px;
  width: 45%;
  height: 100%;
  overflow-x: auto;

  border-right:1px solid #aaa;

  padding: 20px 10px;
  text-align: left;
  font-size: 20px;
  line-height:1.8em;
}

.page {
    padding-bottom: 30px;
    display: inline-block;
    line-height: 1.8em;
    vertical-align: middle;
}

.info {
  padding-left: 50%;
  text-align: left;
  font-size: 16px;
  line-height:1.8em;
}
</style>
