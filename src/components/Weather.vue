<template>
  <div>
  <i class="fa fa-snowflake"></i>
  <div class="templocation">
      <p class="temperature">25 <span>°C</span></p>
      <p class="location">{{long}} | {{lat}}</p>
      <p class="location">{{city}}</p>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      long: 0,
      lat: 0,
      city: "undefined"
    };
  },
  created: function() {
    this.findLocation();
  },
  methods: {
    findLocation: () => {

      if (!navigator.geolocation) {
        this.city ="Geolocation is not supported by your browser";
        return;
      }

      function success(position) {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        this.city = "City coords are here"
      }

      function error() {
       this.city = "Unable to retrieve your location";
      }

      navigator.geolocation.getCurrentPosition(success, error);
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

p {
  margin: 0;
  padding: 0;
  font-size: 16px;
  margin-left: 10px;
  font-weight: bold;
}
</style>
