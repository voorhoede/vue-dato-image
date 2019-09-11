import { shallowMount } from '@vue/test-utils'
import VueDatoImage from './vue-dato-image.vue'

test('Renders', () => {
  const wrapper = shallowMount(VueDatoImage, {
    propsData: {
      image: {
        url: 'https://www.datocms-assets.com/6524/1559739750-quantum-inspire-editor.jpg',
        width: 1496,
        height: 932,
        format: 'jpg',
      },
    },
  })

  expect(wrapper.exists()).toBe(true)
})

test('Renders picture element when image is bitmap', () => {
  const wrapper = shallowMount(VueDatoImage, {
    propsData: {
      image: {
        url: 'https://www.datocms-assets.com/6524/1559739750-quantum-inspire-editor.jpg',
        width: 1496,
        height: 932,
        format: 'jpg',
      },
    },
  })

  expect(wrapper.find('picture').isVisible()).toBe(true)
})

test('Renders img element when image is vector', () => {
  const wrapper = shallowMount(VueDatoImage, {
    propsData: {
      image: {
        width: null,
        height: null,
        format: 'svg',
        url: 'https://www.datocms-assets.com/6524/1543322842-heroes.svg',
        alt: null,
      },
    },
  })

  expect(wrapper.find('img').isVisible()).toBe(true)
})
