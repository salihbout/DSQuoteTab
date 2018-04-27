<template>
    <div class="list-box">
        <div class="news-header">
            <img src="https://besticon-demo.herokuapp.com/icon?url=https://techcrunch.com&size=70..120..200" alt="">
            <h3>Techcrunch</h3>
        </div>
        <div class="news-list">
            <ul>
                <li><a href="#"> Title goes here</a></li>
                <li><a href="#"> Title goes here</a></li>
                <li><a href="#"> Title goes here</a></li>
                <li><a href="#"> Title goes here</a></li>
                <li><a href="#"> Title goes here</a></li>
                
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

.list-box {
  border-radius: 3px;
  width: 22%;

  background-color: rgb(255, 255, 255);
  float: left;
  margin-right:20px;
}

.news-header{

    display: flex;
    width: 100%;
    border-bottom: rgba(39, 39, 39, 0.198) solid 1px;
    
}

.news-header h3 {
    padding-top: 15px;
    color: #3a3434
}

li {
    padding: 10px;
    
}

.news-header img {
    width: 60px;
    height: 60px;
    margin: 15px;
}

</style>

