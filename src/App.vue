<template>
  <v-app>
    <v-container>
      <ValidationProvider
        ref="timePicker"
        v-slot="{ errors }"
        rules="required">
        {{ errors }}
        <v-digital-time-picker
          v-model="timeValue"
          rounded
          filled/>
      </ValidationProvider>
      <v-btn @click="check">Check</v-btn>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ValidationProvider } from 'vee-validate'

import VDigitalTimePicker from './VDigitalTimePicker.vue'

@Component({
  components: { VDigitalTimePicker }
})
export default class App extends Vue {
  private timeValue = ''

  $refs!: {
    timePicker: InstanceType<typeof ValidationProvider>;
  }

  check (): void {
    this.$refs.timePicker.validate()
  }
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
