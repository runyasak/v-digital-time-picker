# 🚀 VDigitalTimePicker

Digital Time Picker for [Vuetify](https://vuetifyjs.com/).

<p align="center">
  <img src="https://media.giphy.com/media/Ig9pQIseRoPtQZ9Atb/giphy.gif" />
</p

## Installation

Insall dependencies
```bash
npm install v-digital-time-picker
```
For yarn
```bash
yarn add v-digital-time-picker
```

## Quick Start
Implement `VDigitalTimePicker` as plugin
```javascript
import VDigitalTimePicker from 'v-digital-time-picker'

Vue.use(VDigitalTimePicker)
```

You can import as individual component

```javascript
import { VDigitalTimePicker } from 'v-digital-time-picker'

Vue.component('v-digital-time-picker', VDigitalTimePicker)
```

## Basic Usage
You can implement on Vue template.

```html
<template>
  <v-app>
    <v-container style="max-width: 600px;">
      <v-digital-time-picker
        v-model="timeValue"
        rounded
        filled/>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      timeValue: ''
    }
  }
}
</script>
```

You can use with [vee-validate](https://logaretm.github.io/vee-validate/)

```html
<template>
  <v-app>
    <v-container>
      <validation-provider
        ref="timePicker"
        v-slot="{ errors }"
        rules="required">
        {{ errors }}
        <v-digital-time-picker
          v-model="timeValue"
          rounded
          filled/>
      </validation-provider>
    </v-container>
  </v-app>
</template>
```

> `VDigitalTimePicker` extends from [VTextField](https://vuetifyjs.com/en/components/text-fields/) by transparent wrappers.

## Props

| Name    | Type   | Required | Description                                    |   |
|---------|--------|----------|------------------------------------------------|---|
| `value` | string | No       | Binding value of as time format (e.g. '11:00') |   |

## Events
| Name    | Description                   | Parameters |
|---------|-------------------------------|------------|
| `value` | Trigger when value is changed | string     |



## Contrubutation
If you want to improve or add any feature, you can submit as pull request.
```
npm install

npm run serve
```

### Run unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```
