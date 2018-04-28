import axios from 'axios'

const fetch = {
    data(){
        return{
            news : []  
        }
        
    },   
     methods: {
        fetchNews(source) {
            let url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=c0d833f56cd14a1a87ae92917947250b&pageSize=5`;
            axios
              .get(url)
              .then(response => {
                console.log("[url]",  url);
                console.log("[NEWS]",  response.data);
               this.news = response.data.articles
              })
              .catch(error => {
                console.log("[NEWS]", error);
              });
          }
    }
  }

  export default fetch