<template>
    <div class="list-box">
        <div class="news-header">
            <img :src="data.icon" alt="">
            <h3>{{data.title}}</h3>
        </div>
        <div class="news-list">
            <ul>
                <li v-for="item in news" :key="item.id"><a :href="item.url">{{item.title}}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import mixin from "./../mixin";
export default {
  props: ["data"],
  mixins: [mixin],
  data() {
    return {};
  },
  created() {
    this.fetchNews(this.data.source);
  }
};
</script>

<style scoped>
.list-box {
  border-radius: 3px;
  width: 30%;

  background-color: rgb(255, 255, 255);
  float: left;
  margin-right: 20px;
}

.news-header {
  display: flex;
  width: 100%;
  border-bottom: rgba(39, 39, 39, 0.198) solid 1px;
}

.news-header h3 {
  padding-top: 15px;
  color: #3a3434;
}

li {
  padding: 10px;
  font-size: 16px;
  list-style: none;
}

li a {
      color: rebeccapurple;
      text-decoration: none;
      font-weight: medium
}

.news-header img {
  width: 60px;
  height: 60px;
  margin: 15px;
}
</style>

