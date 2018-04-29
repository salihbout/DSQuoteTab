<template>
    <div class="list-box">
        <div class="news-header">
            <img :src="data.icon" alt="">
            <h3>{{data.title}}</h3>
            <a :href="data.url" target="_blank"><i class="fas fa-external-link-alt"></i></a>
        </div>
        <div class="news-list">
            <ul>
                <li v-for="item in news" :key="item.id"><span>{{item.id}}</span><a :href="item.url" target="_blank">{{shrink(item.title, 80)}}</a></li>
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
  }, 
  methods:{
    shrink: function(str, max){
      if(str.length > max){
        return str.substring(0,max) + '...'
      }else{
        return str
      }
      
    }
  }
};
</script>

<style scoped>
.list-box {
  border-radius: 3px;
  width: 30%;
  background-color: rgb(255, 255, 255);
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

.news-header a {
  padding-top: 34px;
  padding-left: 55%;
  color: #122488;
}

ul {
    width: 100%;
    margin: 0;
    padding: 0
}

li {
  padding: 15px;
  font-size: 14px;
  list-style: none;
  border-bottom: rgba(39, 39, 39, 0.198) solid 1px;
}

li a {
      color: rgb(63, 60, 66);
      text-decoration: none;
}

.news-header img {
  width: 60px;
  height: 60px;
  margin: 15px;
}
</style>

