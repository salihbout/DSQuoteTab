<template>
    <div class="quote-box">
        <div class="quote-text">
            <i class="fa fa-quote-left"> </i><span id="text">{{quoteText}}</span>
        </div>
        <div class="quote-author">
            - <span id="author"> {{quoteAuthor}}</span>
        </div>
        <div class="buttons">
            <a class="button applaud"  title="applaud !" target="_blank">
              {{quoteLikes}}
            <i class="fa fa-heart"></i>
            </a>
            <a class="button social"  title="Post this quote on twitter!" target="_blank">
            <i class="fa fa-facebook"></i>
            </a>
            <a class="button  social"  title="Tweet this quote!" target="_blank">
            <i class="fa fa-twitter"></i>
            </a>
            <button class="button" id="new-quote">Get New Quote</button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      quoteText:
        "In the business people with expertise, experience and evidence will make more profitable decisions than people with instinct, intuition and imagination.",
      quoteAuthor: "Amit Kalantri",
      quoteLikes: 50
    };
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:400,500);

.quote-box {
  border-radius: 3px;
  position: relative;
  margin: 8% auto auto auto;
  width: 550px;
  padding: 40px 50px;
  display: table;
  background-color: rgb(255, 255, 255);
}

.quote-text {
  text-align: center;
  height: auto;
  clear: both;
  color: #333;
  font-weight: 500;
  font-size: 1.75em;
}

.quote-text i {
  font-size: 1em;
  margin-right: 0.4em;
  color: rgb(42, 34, 165);
}

.quote-author {
  width: 450px;
  height: auto;
  clear: both;
  padding-top: 20px;
  font-size: 1em;
  color: #333;
  text-align: right;
}

.buttons {
  margin: auto;
  display: block;
}

.button {
  height: 38px;
  border: none;
  border-radius: 3px;
  color: #fff;
  background-color: rgb(42, 34, 165);
  outline: none;
  font-size: 0.85em;
  padding: 8px 18px 6px 18px;
  margin-top: 30px;
  opacity: 1;
  cursor: pointer;
}

.social {
  float: left;
  padding: 0px;
  padding-top: 8px;
  text-align: center;
  background-color: rgb(22, 161, 216);
  font-size: 1.2em;
  margin-right: 5px;
  height: 30px;
  width: 40px;
}

.applaud {
  float: left;
  padding: 0px;
  padding-top: 8px;
  text-align: center;
  font-size: 1.2em;
  margin-right: 25px;
  height: 30px;
  width: 80px;
   background-color: rgb(42, 34, 165);
}

.button:hover {
  opacity: 0.9;
}

#new-quote {
  float: right;
}
</style>
