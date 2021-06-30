<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <iframe
      src="https://www.datos.gov.co/dataset/Estado-de-Casos-de-Coronavirus-COVID-19-en-Colombi/6c4c-msrp/embed?width=800&height=600"
      style="border:0; padding: 0; margin: 0;"
    ></iframe>

    <h4>
      La siguiente información corresponde a los casos registrados
      <br />en las diferentes ciudades
    </h4>
    <br />
    <iframe
      src="https://www.datos.gov.co/dataset/Datos-Abiertos-del-Coronavirus-COVID-19-por-ciudad/hvyw-6ti5/embed?width=800&heigth=600"
      style="border:0; padding: 0; margin: 0;"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "ColombiaInfo",
  data: function() {
    return {
      cityData: null,
      cities: []
    };
  },
  props: {
    msg: String
  }
};
</script>

<style scoped>
h4,
h3 {
  margin: 100px;
}
iframe {
  width: 800px;
  height: 600px;
  margin-top: 30px;
}

@media (max-width: 760px) {
  iframe {
    width: 90%;
  }
}
</style>
