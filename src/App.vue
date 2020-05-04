<template>
  <v-app>
    <v-container>
      <vuetify-digital-time-picker v-model="timeValue"/>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VuetifyDigitalTimePicker from './VuetifyDigitalTimePicker.vue'

@Component({
  components: {
    VuetifyDigitalTimePicker
  }
})
export default class App extends Vue {
  private timeValue = ''
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
