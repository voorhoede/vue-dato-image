# vue-dato-image

## Installation

```
npm install vue-dato-image
```

## Examples

### Bitmap image

::: demo
<vue-dato-image :image="{
  url: 'https://www.datocms-assets.com/6524/1559739750-quantum-inspire-editor.jpg',
  width: 1496,
  height: 932,
  format: 'jpg'
}"></vue-dato-image>
:::

### Vector image

::: demo
<vue-dato-image :image="{
   width: null,
   height: null,
   format: 'svg',
   url: 'https://www.datocms-assets.com/6524/1543322842-heroes.svg',
   alt: null
}"></vue-dato-image>
:::

<!-- The API section is auto generated, don't touch please -->

## API

### vue-dato-image 

#### props 

- `image` ***Object*** (*required*) 

- `width-step` ***Number*** (*optional*) `default: 100` 

- `transparent` ***Boolean*** (*optional*) `default: false` 

#### data 

- `width` 

**initial value:** `undefined` 

- `isLoaded` 

**initial value:** `false` 

#### computed properties 

- `isVector` 

   **dependencies:** `image` 

- `isBitmap` 

   **dependencies:** `isVector` 

- `alt` 

   **dependencies:** `image` 

#### methods 

- `imageUrl(options)` 

- `onLoad()` 
