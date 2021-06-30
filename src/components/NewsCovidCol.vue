<template>
  <div class="news">
    <h2>Ultimas noticias</h2>
    <div v-for="updateNews in news" v-bind:key="updateNews.id">
      <div class="card-news">
        <div class="cards-header">
          <h5 class="cards-title">{{ updateNews.title }}</h5>
        </div>
        <div class="news-headline">
          <p class="card-text">{{ updateNews.description }}</p>
          <span>Fuente: {{ updateNews.author }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "news",
  data: function() {
    return { news: null, errored: false };
  },
  mounted() {
    // const urlNews =
    // "http://newsapi.org/v2/top-headlines?country=co&category=health&apiKey=";
    // const apiKey = "a874c559807c4187834fc8d9549464b6";
    // const realUrl = `${urlNews}${apiKey}`;
    const Url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=co&" +
      "apiKey=a874c559807c4187834fc8d9549464b6";
    Axios.get(Url)
      .then(response => {
        return (this.news = response.data.articles);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      });
  }
};
</script>
<style scoped>
.card-news {
  border: 1px solid #2c3e50;
  width: 50%;
  margin-top: 50px;
}
.cards-header {
  background: #2c3e50;
  color: white;
}
h2 {
  background: #2c3e50;
  color: white;
}
@media (max-width: 700px) {
  .card-news {
    width: 100%;
  }
}
@media (min-width: 760px) {
  .card-news {
    width: 100%;
  }
}
@media (min-width: 1080px) {
  .card-news {
    width: 70%;
    margin-left: 200px;
  }
}
@media (min-width: 1920px) {
  .card-news {
    width: 70%;
    margin-left: 400px;
  }
}
</style>
