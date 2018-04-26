<template>
  <div>
  <i v-bind:class="{icon} " ></i>{{icon}}
  <div class="templocation">
      <p class="temperature">{{temp}} <span>°C</span></p>
      <p class="location"> {{weather}} in <span> {{city}}</span></p>
  </div>
  </div>
</template>

<script>
var axios = require("axios");
export default {
  data() {
    return {
      coordinates: {},
      city: "",
      temp:0,
      weather : "",
      icon: ""

    };
  },
  created() {
    console.log("[created]");
    //this.findLocation();

    this.$getLocation().then(coordinates => {
      this.coordinates = coordinates;
      let lat = this.coordinates.lat;
      let lng = this.coordinates.lng;
      let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=0eb7b7f0ab97f47f9b8249c7e0d127c7&units=metric`;
      console.log(url);
      axios
        .get(url)
        .then((response) =>{
          console.log(response);
          this.city = response.data.name
          this.temp = response.data.main.temp
          this.weather = response.data.weather[0].main
          this.icon = `owf owf-${response.data.cod}`
          console.log(this.icon);
        })
        .catch((error) =>{
          console.log(error);
        });
    });
  },

  methods: {
    findLocation() {
      console.log("[findLocation]");
      let geoData = {
        long: 0,
        lat: 0,
        city: ""
      };
      if (!navigator.geolocation) {
        geoData.city = "Geolocation is not supported by your browser";
        return;
      }

      function success(position) {
        console.log("[success]", geoData);
        geoData.lat = 1;
        geoData.long = position.coords.longitude;
        geoData.city = "City coords are here";
      }

      function error() {
        this.city = "Unable to retrieve your location";
      }

      navigator.geolocation.getCurrentPosition(success, error);
      console.log("[out]", geoData);
    }
  }
};
</script>

<style scoped>
i {
  float: left;
  font-size: 36px;
}

.templocation {
  float: right;
}

.temperature {
  font-size: 26px;
}
.temperature span {
  font-size: 16px;
  position: relative;
  top: -10px;
}

.location {
  font-weight: lighter;
}

.location span {
  font-weight: bold
}

p {
  margin: 0;
  padding: 0;
  font-size: 16px;
  margin-left: 10px;
  font-weight: bold;
}
</style>
