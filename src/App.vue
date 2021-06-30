<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">COLOMBIA</router-link>
      <router-link to="/worldCovidInfo">WORLD REPORT</router-link>
    </div>
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

#nav {
  width: 100%;
  height: 40px;
  background-color: #2c3e50;
  color: white;
  text-align: left;
  padding-top: 7px;
  padding-left: 5px;
  margin-bottom: 50px;
  font-family: "Roboto", sans-serif;
}

#nav a {
  font-weight: bold;
  color: white;
  margin-right: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
