<template>
  <v-menu
    v-model="active"
    :close-on-content-click="false"
    offset-y>
    <template v-slot:activator="{ on }">
      <v-text-field
        class="_v-digital-time-picker"
        readonly
        :value="value"
        v-bind="$attrs"
        v-on="{ ...$listeners, ...on }"
      />
    </template>
    <v-card class="d-flex align-center">
      <v-select
        append-icon=""
        class="_v-digital-time-picker__select pt-0 mt-0 align-center"
        hide-details
        :items="hours"
        rounded
        :value="hourValue"
        @change="onChangeValue($event, 'hour')"/>
      <span class="_v-digital-time-picker__comma">
        :
      </span>
      <v-select
        append-icon=""
        class="_v-digital-time-picker__select pt-0 mt-0 align-center"
        hide-details
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
export default class VDigitalTimePicker extends Vue {
  private defaultZeroValue = '00'
  private hours: string[] = this.generateNumbStringArray(24)
  private minutes: string[] = this.generateNumbStringArray(60)
  private active = false

  @Prop({ type: String, default: '' }) readonly value!: string

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

<style lang="scss" scoped>
$font-size: 20px !default;

._v-digital-time-picker {
  &__select {
    height: 80px;
  }

  &__comma {
    font-size: $font-size;
  }
}

.v-menu__content {
  min-width: unset !important;
  max-width: 300px;
}

.v-menu__content ::v-deep {
  .v-select__selections {
    width: 100px;
    font-size: $font-size;
    line-height: $font-size;

    & > .v-select__selection.v-select__selection--comma {
      margin: 0 auto;
    }

    & > input {
      display: none;
    }
  }
}
</style>
