<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {},

};
</script>

<style lang="scss">
html,
body, * {
  margin: 0;
  padding: 0;
}

body {
  background-color: rgba(0, 0, 0, 0.5);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
