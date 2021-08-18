<template>
  <div id="app">
    <headmenu></headmenu>
  </div>
</template>

<script>
import Headmenu from "./components/headmenu";

export default {
  name: 'App',
  components: {
    Headmenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
