<template>
    <div>
      <p class="news-section-title">What's up Internet ?</p>
        <loader v-if="loading"/>
        
        <div v-show="!loading" class="news-section">
            <news-list v-for="list in sources" v-bind:key="list.id" :data="list" />
        </div>
    </div>

</template>


<script>
import NewsList from "./NewsList";
import loader from "./loader"
import axios from "axios";
export default {
  components: {
    NewsList,loader
  },
  data() {
    return {
      loading: false,
      sources: [
        {
          icon:
            "https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=180",
          source: "techcrunch",
          title: "TechCrunch",
          url: "https://techcrunch.com/"
        },
        {
          icon:
            "https://besticon-demo.herokuapp.com/icon?url=news.ycombinator.com&size=80..120..200",
          source: "hacker-news",
          title: "Hacker News",
          url: "https://news.ycombinator.com/"
        },
        {
          icon:
            "https://cdn0.tnwcdn.com/wp-content/themes/cyberdelia/assets/icons/apple-touch-icon-120x120.png?v=1524750009",
          source: "the-next-web",
          title: "The Next Web",
          url: "https://thenextweb.com/"
        }
      ]
    };
  },
  created(){
    this.loading = true,
    this.showNews()
  },
  methods:{
    showNews() {
      setTimeout(() => { this.loading = false; }, 2000);
    }
  }

};
</script>

<style scoped>
.news-section {
  display: flex;
  flex-wrap: wrap; /* Optional. only if you want the items to wrap */
  justify-content: center; /* For horizontal alignment */
  align-items: center; /* For vertical alignment */
  margin-top: 5px;
}

.news-section-title {
    text-align: center;
    margin-top: 20px;
    padding: 0
}


</style>
