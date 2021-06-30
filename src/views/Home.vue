<template>
  <div class="home">
    <InfoCovidColombia msg="Encuentra toda la información detallada acerca del covid 19" />
    <NewsCovidCol></NewsCovidCol>
  </div>
</template>

<script>
// @ is an alias to /src
import InfoCovidColombia from "@/components/InfoCovidColombia.vue";
import NewsCovidCol from "@/components/NewsCovidCol.vue";

export default {
  name: "Home",
  components: {
    InfoCovidColombia,
    NewsCovidCol
  }
};
</script>
