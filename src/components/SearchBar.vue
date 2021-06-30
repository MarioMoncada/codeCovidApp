<template>
  <div>
    <div class="form-inline">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Type Country name"
        aria-label="Search"
        v-model="newCountry"
        @keyup.enter="getDataCountry"
      />
      <button
        class="btn btn-outline-success my-2 my-sm-0"
        type="button"
        @click="getDataCountry"
      >Search</button>
      <span>{{ alertMsj }}</span>
    </div>
    <p class="how-to-use">
      Type in English
      <br />Country with Double names (united-states)
    </p>

    <h3>{{ newCountry }}</h3>
    <div class="wrapper-country-info">
      <div class="name-country">
        <p>Confirmed</p>

        <div
          class="div-data"
          v-for="country of searchingCountry"
          v-bind:key="country.Slog"
        >{{ country.TotalConfirmed }}</div>
      </div>

      <div class="cases-in-country">
        <p>Recovered</p>
        <div
          class="div-data"
          v-for="country in searchingCountry"
          v-bind:key="country.country"
        >{{ country.TotalRecovered }}</div>
      </div>
      <div class="deaths-in-country">
        <p>Deaths</p>
        <div
          class="div-data"
          v-for="country in searchingCountry"
          v-bind:key="country.id"
        >{{ country.TotalDeaths }}</div>
      </div>
      <div class="deaths-in-country">
        <p>New confirmed</p>
        <div
          class="div-data"
          v-for="country in searchingCountry"
          v-bind:key="country.id"
        >{{ country.NewConfirmed }}</div>
      </div>
      <div class="deaths-in-country">
        <p>New recovered</p>
        <div
          class="div-data"
          v-for="country in searchingCountry"
          v-bind:key="country.id"
        >{{ country.NewRecovered }}</div>
      </div>
      <div class="deaths-in-country">
        <p>
          New
          <br />deaths
        </p>
        <div
          class="div-data"
          v-for="country in searchingCountry"
          v-bind:key="country.id"
        >{{ country.NewDeaths }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchBar",
  data: function() {
    return {
      countryData: null,
      searchingCountry: [],
      newCountry: "",
      alertMsj: ""
    };
  },
  methods: {
    getDataCountry() {
      if (this.newCountry == "") {
        this.alertMsj = "Text field can't be empty!";
      } else {
        this.alertMsj = "";
      }
      this.inputUser = this.newCountry.toLowerCase();
      this.searchingCountry = this.countryData.filter(
        Slug => Slug.Slug === this.inputUser
      );
    }
  },
  mounted() {
    const url = "https://api.covid19api.com/summary";
    axios
      .get(url)
      .then(response => {
        return (this.countryData = response.data.Countries);
      })

      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.form-inline {
  margin-left: 500px;
  margin-top: 20px;
}
.opcional {
  color: red;
  border: 1px solid wheat;
  width: 200px;
  height: 200px;
  background-color: thistle;
}
.wrapper-country-info {
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.name-country,
.cases-in-country,
.deaths-in-country {
  width: 100px;
  height: 100px;
  color: white;
  margin-top: 70px;
  border: 1px solid white;
}
.div-data {
  background-color: white;
  color: black;
}
span {
  color: red;
  margin-left: 10px;
}
.how-to-use {
  margin-top: 10px;
  color: rgb(177, 176, 176);
  font-size: 12px;
}
.extraInfo {
  background-color: white;
  color: black;
}
.dif-info {
  border: 1px solid red;
}

@media (max-width: 600px) {
  .form-inline {
    width: 200px;
    margin-left: 80px;
  }
  .wrapper-country-info {
    width: 100%;
  }
  .name-country,
  .cases-in-country,
  .deaths-in-country {
    margin: 5px;
  }
}
@media (min-width: 760px) {
  .form-inline {
    margin-left: 250px;
  }
  .wrapper-country-info {
    width: 50%;
    margin-left: 200px;
  }
  .name-country,
  .cases-in-country,
  .deaths-in-country {
    margin: 10px;
  }
}
@media (min-width: 1020px) {
  .form-inline {
    margin-left: 370px;
  }
  .wrapper-country-info {
    width: 50%;
    margin-left: 250px;
  }
  .name-country,
  .cases-in-country,
  .deaths-in-country {
    margin: 30px;
  }
}
@media (min-width: 1200px) {
  .form-inline {
    margin-left: 500px;
  }
  .wrapper-country-info {
    width: 50%;
    margin-left: 320px;
  }
  .name-country,
  .cases-in-country,
  .deaths-in-country {
    margin: 50px;
  }
}
@media (min-width: 2200px) {
  .form-inline {
    margin-left: 1100px;
  }
  .wrapper-country-info {
    width: 30%;
    margin-left: 900px;
  }
  .name-country,
  .cases-in-country,
  .deaths-in-country {
    margin: 70px;
  }
}
</style>
