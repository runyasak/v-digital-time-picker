<template>
  <v-menu
    offset-y
    :close-on-content-click="false">
    <template v-slot:activator="{ on }">
      <v-text-field
        readonly
        v-on="on"
      />
    </template>
    <v-card class="d-flex align-center">
      <v-select rounded :items="hours" append-icon="" />
      :
      <v-select rounded :items="minutes" append-icon="" />
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class VuetifyDigitalTimePicker extends Vue {
  private hours: string[] = this.generateNumbStringArray(24)
  private minutes: string[] = this.generateNumbStringArray(60)

  generateNumbStringArray (length: number): string[] {
    return Array.from({ length }, (value, index) => index.toString().padStart(2, '0'))
  }
}
</script>
