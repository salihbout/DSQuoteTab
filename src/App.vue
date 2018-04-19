<template>
  <div id="app" class="wrapper">
   <header>
     <weather class="weather"></weather>
     <Time class="time"></Time>
   </header>
   <div class="quote">
     <QuoteCard  />
   </div>
   
   <footer class="footer">
     <p>Made with <i class="fa fa-heart"></i> from Morocco</p>
   </footer>
  </div>
</template>

<script>
import QuoteCard from "./components/QuoteCard";
import Time from "./components/Time";
import Weather from "./components/Weather";

export default {
  name: "App",
  components: {
    QuoteCard: QuoteCard,
    Weather: Weather,
    Time: Time
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Raleway:400,500);

html {
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  /* The image used */
  background:linear-gradient(0deg,rgba(25, 0, 255, 0.3),rgba(50, 6, 246, 0.452)),url(https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?cs=srgb&dl=chart-close-up-data-590022.jpg);

  /* Full height */
  height: 100%;
  max-width: 100%;
  overflow-x: hidden;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  margin-top: 60px;
  font-weight: 400;
}



.weather {
  float: right;
  margin: 0;
  padding: 20px;
}

.time {
  float: left;
  margin: 0;
  padding: 20px;
}

.quote {
  padding-top: 30px;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  text-align: center;
}
</style>
