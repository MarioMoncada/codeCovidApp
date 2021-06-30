<template>
  <div>
    <div class="general-info">
      <div class="first">
        <h4>Infected</h4>
        <div v-for="datos of info" v-bind:key="datos.country">{{datos.TotalConfirmed}}</div>
      </div>
      <div class="second">
        <h4>Recovered</h4>
        <div v-for="datos of info" v-bind:key="datos.country">{{datos.TotalRecovered}}</div>
      </div>
      <div class="third">
        <h4>Deaths</h4>
        <div v-for="datos of info" v-bind:key="datos.country">{{datos.TotalDeaths}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "DataCovid",
  data: function() {
    return {
      info: null
    };
  },
  mounted() {
    const url = "https://api.covid19api.com/summary";
    axios.get(url).then(response => {
      return (this.info = response.data);
    });
  }
};
</script>
<style scoped>
.general-info {
  margin-top: 100px;
  display: flex;

  justify-content: space-around;
}
.first,
.second,
.third {
  color: #2c3e50;
}
</style>>