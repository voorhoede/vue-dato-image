import imageUrl from './image-url'

test('Returns image URL with default parameters', () => {
  const url = 'https://www.datocms-assets.com/6524/1559739750-quantum-inspire-editor.jpg'
  const constructedURl = imageUrl(url)

  expect(constructedURl).toEqual(`${url}?auto=compress&auto=quality`)
})

test('Adds parameter object as query string', () => {
  const url = 'https://www.datocms-assets.com/6524/1559739750-quantum-inspire-editor.jpg'
  const params = { width: 200, height: 100 }
  const constructedURl = imageUrl(url, params)

  expect(constructedURl).toEqual(`${url}?auto=compress&auto=quality&height=100&width=200`)
})

// test introduced for https://github.com/voorhoede/vue-dato-image/issues/72
test('Uses clean defaults on every invocation', () => {
  const url = 'https://www.datocms-assets.com/6524/1559739750-quantum-inspire-editor.jpg'
  const url1 = imageUrl(url, { width: 200, height: 100, fm: 'webp' })
  const url2 = imageUrl(url, { width: 200, height: 100 })

  expect(url1).toEqual(`${url}?auto=compress&auto=quality&fm=webp&height=100&width=200`)
  expect(url2).toEqual(`${url}?auto=compress&auto=quality&height=100&width=200`)
})
