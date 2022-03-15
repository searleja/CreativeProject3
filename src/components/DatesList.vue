<template>
<div class="wrapper">
  <div class="dates">
    <div class="date" v-for="date in dates" :key="date.id">
      <div class="info">
        <h1>{{date.day}}</h1>
        <p>{{date.time}}</p>
      </div>
      <div class="add">
        <button class="auto" @click="addDate(date)">Add date</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {data} from '../main.js'
export default {
  name: 'DatesList',
  props: {
    dates: Array,
  },
  methods: {
      addDate(date) {
          console.log("adding" + date);
          console.log(data.appointment.length);
          data.appointment.splice(0);
          data.appointment.push(date)
      }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dates {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.date {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
  border: 2px solid;
  border-color: #000;
}

.info {
  
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.add {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>