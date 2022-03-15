

<template>
<div>
  <h1>Browse</h1>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Monday')" href="#" class="pure-menu-link">Monday</a></li>
      <li class="pure-menu-item"><a @click="select('Tuesday')" href="#" class="pure-menu-link">Tuesday</a></li>
      <li class="pure-menu-item"><a @click="select('Wednesday')" href="#" class="pure-menu-link">Wednesday</a></li>
      <li class="pure-menu-item"><a @click="select('Thursday')" href="#" class="pure-menu-link">Thursday</a></li>
      <li class="pure-menu-item"><a @click="select('Friday')" href="#" class="pure-menu-link">Friday</a></li>
      <li class="pure-menu-item"><a @click="select('Saturday')" href="#" class="pure-menu-link">Saturday</a></li>
      <li class="pure-menu-item"><a @click="select('Sunday')" href="#" class="pure-menu-link">Sunday</a></li>
    </ul>
  </div>
  <DatesList :dates="dates" />
</div>
</template>


<script>

import DatesList from "../components/DatesList.vue"
export default {
  name: 'BrowseView',
  components: {
    DatesList,
  },
  data() {
    return {
      day: '',
    }
  },
  computed: {
    dates() {
      return this.$root.$data.dates.filter(date => date.day === this.day);
    }
  },
  methods: {
    select(day) {
      this.day = day;
      console.log(this.day);
    }
  }
}
</script>


<!--<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Monday')" href="#" class="pure-menu-link">Monday</a></li>
      <li class="pure-menu-item"><a @click="select('Tuesday')" href="#" class="pure-menu-link">Tuesday</a></li>
      <li class="pure-menu-item"><a @click="select('Wednesday')" href="#" class="pure-menu-link">Wednesday</a></li>
      <li class="pure-menu-item"><a @click="select('Thursday')" href="#" class="pure-menu-link">Thursday</a></li>
      <li class="pure-menu-item"><a @click="select('Friday')" href="#" class="pure-menu-link">Friday</a></li>
      <li class="pure-menu-item"><a @click="select('Saturday')" href="#" class="pure-menu-link">Saturday</a></li>
      <li class="pure-menu-item"><a @click="select('Sunday')" href="#" class="pure-menu-link">Sunday</a></li>
    </ul>
  </div>
  <DatesList :dates="dates" />
</div>
</template>

<script>
import DatesList from "../components/DatesList.vue"
export default {
  name: 'BrowseView',
  components: {
    DatesList
  },
  data() {
    return {
      date: '',
    }
  },
  computed: {
    dates() {
      return this.$root.$data.dates.filter(dates => dates.day === this.day);
    }
  },
  methods: {
    select(date) {
      this.date = date;
    }
  }
}
</script> -->