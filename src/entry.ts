import { VueConstructor } from 'vue'

import VDigitalTimePicker from './VDigitalTimePicker.vue'

const VDigitalTimePickerComponent = {
  install (Vue: VueConstructor) {
    Vue.component('v-digital-time-picker', VDigitalTimePicker)
  }
}

export { VDigitalTimePicker }
export default VDigitalTimePickerComponent

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VDigitalTimePickerComponent)
}
