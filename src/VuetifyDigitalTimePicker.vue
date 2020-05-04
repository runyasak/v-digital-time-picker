<template>
  <v-menu
    v-model="active"
    :close-on-content-click="false"
    offset-y>
    <template v-slot:activator="{ on }">
      <v-text-field
        readonly
        :value="value"
        v-on="on"
      />
    </template>
    <v-card class="d-flex align-center">
      <v-select
        append-icon=""
        :items="hours"
        rounded
        :value="hourValue"
        @change="onChangeValue($event, 'hour')"/>
      :
      <v-select
        append-icon=""
        :items="minutes"
        rounded
        :value="minuteValue"
        @change="onChangeValue($event, 'minute')"/>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

enum OnChangeValueType {
  Hour = 'hour',
  Minute = 'minute'
}

@Component
export default class VuetifyDigitalTimePicker extends Vue {
  private defaultZeroValue = '00'
  private hours: string[] = this.generateNumbStringArray(24)
  private minutes: string[] = this.generateNumbStringArray(60)
  private active = false

  @Prop(String) readonly value!: string

  get splitValue (): string[] {
    return this.value.split(':')
  }

  get hourValue (): string {
    return this.splitValue[0] || this.defaultZeroValue
  }

  get minuteValue (): string {
    return this.splitValue[1] || this.defaultZeroValue
  }

  generateNumbStringArray (length: number): string[] {
    return Array.from({ length }, (value, index) => index.toString().padStart(2, '0'))
  }

  valueTemplate (hour: string, minute: string): string {
    return `${hour}:${minute}`
  }

  onChangeValue (value: string, type: OnChangeValueType): void {
    if (type === OnChangeValueType.Hour) {
      this.$emit('input', this.valueTemplate(value, this.minuteValue))
    } else if (type === OnChangeValueType.Minute) {
      this.$emit('input', this.valueTemplate(this.hourValue, value))
      this.active = false
    }
  }
}
</script>
