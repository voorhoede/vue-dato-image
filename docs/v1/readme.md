# @voorhoede/vue-dato-image

**Fully optimized image component for images from Dato CMS**.

```<vue-dato-image :image={ image } />```

View source code on [github](https://github.com/voorhoede/vue-dato-image).

[[toc]]

## Features

- Works out-of-the-box with [**DatoCMS image file field**](https://www.datocms.com/docs/other/fields/#file-fields).
- Uses a **responsive image strategy**, that only loads the optimal sized file. For example, high-resolution images will be replaced with a smaller version on mobile devices.
- Has a **fixed ratio**, so space is reserved before the image is loaded. This prevents annoying layout jumps.
- Supports an optional **image caption**.
- Uses **lowest acceptable quality**, so images load as quickly as possible while preventing quality loss.
- **Supports WebP**, a new, modern, image file type with the lowest possible file size.
- **Lazy loads** images, meaning files will only be downloaded when necessary, resulting in much faster page loads.
- Has [**broken image styling**](https://bitsofco.de/styling-broken-images/), used in case an image can not be loaded or does not exist.

## Installation

```
npm install vue-dato-image
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueDatoImage from '@voorhoede/vue-dato-image'

Vue.use(VueDatoImage)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="vue-dato-image/dist/vue-dato-image.js"></script>

<!-- From CDN -->
<script src="https://unpkg.com/@voorhoede/vue-dato-image"></script>
```

## Examples

### Bitmap image

::: demo
<vue-dato-image
  :image="{
    url: 'https://www.datocms-assets.com/6524/1559739750-quantum-inspire-editor.jpg',
    width: 1496,
    height: 932,
    format: 'jpg'
  }"

></vue-dato-image>
:::

### Vector image

::: demo
<vue-dato-image
  :image="{
    width: null,
    height: null,
    format: 'svg',
    url: 'https://www.datocms-assets.com/6524/1543322842-heroes.svg',
    alt: null
  }"
></vue-dato-image>
:::

### Placeholder color

::: demo
<vue-dato-image
  placeholderColor="#3eaf7c"
  :image="{
    url: 'https://www.datocms-assets.com/6524/1559739750-quantum-inspire-editor.jpg',
    width: 1496,
    height: 932,
    format: 'jpg'
  }"
></vue-dato-image>
:::

### With caption

::: demo
<vue-dato-image 
  :image="{
    url: 'https://www.datocms-assets.com/6524/1559739750-quantum-inspire-editor.jpg',
    width: 1496,
    height: 932,
    format: 'jpg'
  }"
>Interface for Quantum Inspire</vue-dato-image>
:::

### Additional parameters

::: demo
<vue-dato-image
  :parameters="{
    hue: 100
  }"
  :image="{
    url: 'https://www.datocms-assets.com/6524/1559739750-quantum-inspire-editor.jpg',
    width: 1496,
    height: 932,
    format: 'jpg'
  }"
></vue-dato-image>
:::

<!-- The API section is auto generated, don't touch please -->

## API

### vue-dato-image 

#### slots 

- `default` Will be rendered as the *figcaption* tag 

#### props 

- `image` ***Object*** (*required*) 

  Object retreived from Dato image field.
  It should contain the *url*, *width*, *height* and *format* properties. 

- `width-step` ***Number*** (*optional*) `default: 100` 

- `placeholder-color` ***String*** (*optional*) `default: 'transparent'` 

  Color filling up the space when the image is loading. 

- `parameters` ***Object*** (*optional*) `default: [object Object]` 

  Additional parameters for image manipulation. ([more info](https://www.datocms.com/docs/static-generators/other-ssg/image-manipulation)) 
