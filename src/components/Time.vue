<template>
    <div>
        <i class="fa fa-clock"></i>
        <div class="Time">
            <p class="time-slot">{{time}}</p>
            <p class="date-slot">{{date}}</p>
        </div>
    </div>
  
</template>

<script>
var moment = require('moment');

export default {
    computed: {
        time : function () {return moment().format("h:mm a"); },
        date : function () {return moment().format("dddd, MMMM Do YYYY"); }
    }
  
}
</script>

<style scoped>
i {
    float: left;
    font-size: 36px
}

.Time {
    float: right;

}

.time-slot {
    font-size: 25px;
    padding-top: 2px;
}

.date-slot {
    font-size: 15px;
    font-weight: lighter
}

p {
    margin: 0;
    padding: 0;
    font-size: 16px;
    margin-left: 10px;
    font-weight: bold
}
</style>
