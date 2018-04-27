<template>
  <div id="app" class="wrapper">
   <header>
     <weather class="weather"></weather>
     <Time class="time"></Time>
   </header>
   <div class="quote">
     <QuoteCard />
   </div>
   <div class="news-section">
     <news-list/>
     <news-list/>
     <news-list/>
   </div>
   
   <footer class="footer">
     <p>Made with <i class="fa fa-heart"></i> by <a href="https://www.linkedin.com/in/salihbout/">Salih B</a> from Morocco</p>
   </footer>
  </div>
</template>

<script>
import QuoteCard from "./components/QuoteCard";
import Time from "./components/Time";
import Weather from "./components/Weather";
import NewsList from "./components/NewsList";

export default {
  name: "App",
  components: {
    QuoteCard,
    Weather,
    Time,
    NewsList,
  },


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
  padding-top: 2%;
}

.news-section{
    display: flex;
    flex-wrap: wrap; /* Optional. only if you want the items to wrap */
    justify-content: center; /* For horizontal alignment */
    align-items: center; /* For vertical alignment */
    margin-top: 45px;
  
  
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  text-align: center;
}
</style>
