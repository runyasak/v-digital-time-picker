import { mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'

import VDigitalTimePicker from '@/VDigitalTimePicker.vue'

Vue.use(Vuetify)

const localVue = createLocalVue()

describe('v-digital-time-picker', () => {
  it('is rendered', () => {
    const vuetify = new Vuetify()
    const wrapper = mount(VDigitalTimePicker, {
      localVue,
      vuetify
    })

    expect(wrapper.find('._v-digital-time-picker').isVisible()).toBe(true)
  })
})
