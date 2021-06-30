<template>
  <div class="WorldCovidInfo">
    <h2>{{ title }}</h2>
    <DataCovid></DataCovid>
    <CountryInfo></CountryInfo>
  </div>
</template>
<script>
import DataCovid from "@/components/DataCovid.vue";
import CountryInfo from "@/components/CountryInfo.vue";
export default {
  name: "Hello",
  components: {
    DataCovid,
    CountryInfo,
  },
  data: function() {
    return { title: "Get fast information about Covid 19 " };
  },
};
</script>
