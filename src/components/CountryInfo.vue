<template>
  <div>
    <div class="country-info">
      <SearchBar></SearchBar>
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";

export default {
  name: "CountryInfo",

  components: {
    SearchBar,
  },
};
</script>

<style scoped>
.country-info {
  width: 100%;
  height: auto;
  background-color: #2c3e50;
  padding-top: 20px;
  margin-top: 20px;
  color: white;
}
p {
  margin-top: 50px;
  display: inline-block;
}
</style>
