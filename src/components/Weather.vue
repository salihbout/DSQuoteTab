<template>
  <div>
  <i class="fa fa-snowflake"></i>
  <div class="templocation">
      <p class="temperature">25 <span>°C</span></p>
      <p>Location</p>
  </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
i {
    float: left;
    font-size: 36px
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


p {
    margin: 0;
    padding: 0;
    font-size: 16px;
    margin-left: 10px;
    font-weight: bold
}
</style>
