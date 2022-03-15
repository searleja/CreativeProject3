<template>
<div>
  <h1>Finalize Appointment</h1>
  <br>
  <div v-if="numAppointments === 0" class="no-appointment">No Appointment Selected</div>
  <div v-else>
    <h2>{{appointment.day}}</h2>
    <p>{{appointment.time}}</p>
    <button class="auto" @click="finalize()">Finalize Appointment</button>
  </div>
</div>
</template>


<script>
import {data} from '../main.js'
export default {
  name: 'FinalizeView',
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    numAppointments() {
        return this.$root.$data.appointment.length;
    },
    appointment() {
      return this.$root.$data.appointment[0];
    },
  },
  methods: {
    finalize() {
      data.dates.splice(data.dates.indexOf(data.appointment[0]), 1);
      data.appointment.splice(0);
    }
  }
}
</script>


<style scoped>

.empty-cart {
    font-size: 2em;
    font-weight: bold;
}

</style>