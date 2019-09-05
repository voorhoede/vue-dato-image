import { shallowMount } from '@vue/test-utils'
import VueDatoImage from './vue-dato-image.vue'

test('Renders', () => {
  const wrapper = shallowMount(VueDatoImage)
  expect(wrapper.exists()).toBe(true)
})