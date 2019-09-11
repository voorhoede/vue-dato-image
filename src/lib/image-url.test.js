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
