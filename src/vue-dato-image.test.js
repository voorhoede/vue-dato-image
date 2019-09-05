import { shallowMount } from '@vue/test-utils'
import VueDatoImage from './vue-dato-image.vue'

test('Renders', () => {
  const wrapper = shallowMount(VueDatoImage, {
    propsData: { 
      image: {
      url: 'https://www.datocms-assets.com/6524/1559739750-quantum-inspire-editor.jpg',
      width: 1496,
      height: 932,
      format: 'jpg'
      }
    }
  })

  expect(wrapper.exists()).toBe(true)
})