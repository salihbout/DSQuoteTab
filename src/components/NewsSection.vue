<template>
       <div class="news-section">
            <news-list :data="sources[0]" />
        </div>
</template>


<script>
import NewsList from "./NewsList";
import axios from "axios";
export default {
  components: {
    NewsList
  },
  data() {
    return {
      sources: [
        {
          icon:
            "https://besticon-demo.herokuapp.com/icon?url=https://techcrunch.com&size=70..120..200",
            source: "techcrunch",
            title: "TechCrunch"
        },
        {
          icon:
            "https://besticon-demo.herokuapp.com/icon?url=https://techcrunch.com&size=70..120..200",
            source: "techcrunch",
            title: "TechCrunch"
        },
        {
          icon:
            "https://besticon-demo.herokuapp.com/icon?url=https://techcrunch.com&size=70..120..200",
            source: "techcrunch",
            title: "TechCrunch"
        }
      ]
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
  margin-top: 45px;
}
</style>
