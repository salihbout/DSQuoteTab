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
      city: ""
    };
  },
  created: function() {
    console.log('[created]')
    this.findLocation();
  },
  methods: {
    findLocation: () => {
      console.log('[findLocation]')
      let geoData = {
                      long: 0,
                      lat: 0,
                      city: ""
                    }
      if (!navigator.geolocation) {
        
        geoData.city ="Geolocation is not supported by your browser";
        return;
      }

      function success(position) {
        
        
        geoData.lat = position.coords.latitude;
        geoData.long = position.coords.longitude;
        geoData.city = "City coords are here"

        console.log('[success]', geoData)
      }

      function error() {
        this.city = "Unable to retrieve your location";
      }

      navigator.geolocation.getCurrentPosition(success, error);
      this.lat = geoData.lat
      this.long = geoData.long
      this.city = geoData.city
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
