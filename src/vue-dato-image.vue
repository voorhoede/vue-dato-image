<template>
  <figure class="vue-dato-image">
    <template v-if="isVector">
      <lazy-load v-if="isVector">
        <img :alt="alt" :src="image.url" class="vue-dato-image__img" v-if="isVector">
      </lazy-load>
      <no-script>
        <img class="vue-dato-image__img" :alt="alt" :src="imageUrl({ w: 500 })" />
      </no-script>
    </template>
    <div v-if="isBitmap" class="vue-dato-image__sizer" :style="`max-width:${image.width}px;`">
      <fixed-ratio
        :class="{ 'vue-dato-image__canvas--transparent': transparent }"
        :width="image.width"
        :height="image.height"
      >
        <lazy-load>
          <picture class="vue-dato-image__picture" v-if="width">
            <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source type="image/webp" :srcset="imageUrl({ fm: 'webp', w: width })">
            <source :type="`image/${image.format}`" :srcset="imageUrl({ w: width })">
            <!--[if IE 9]></video><![endif]-->
            <transition name="fade">
              <img class="vue-dato-image__img" v-show="isLoaded" :alt="alt" :src="imageUrl({ w: width })" @load="onLoad"/>
            </transition>
          </picture>
        </lazy-load>
        <no-script>
          <picture class="vue-dato-image__picture">
            <img class="vue-dato-image__img" :alt="alt" :src="imageUrl({ w: 500 })" />
          </picture>
        </no-script>
      </fixed-ratio>
    </div>
    <figcaption v-if="image.title">
      {{ image.title }}
    </figcaption>
  </figure>
</template>

<script>
import FixedRatio from './fixed-ratio'
import LazyLoad from './lazy-load'
import NoScript from './no-script'
import imageUrl from './lib/image-url'

export default {
  components: { FixedRatio, LazyLoad, NoScript },
  props: {
    image: {
      type: Object,
      required: true,
    },
    widthStep: {
      type: Number,
      default: 100,
    },
    transparent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      width: undefined,
      isLoaded: false,
    }
  },
  mounted() {
    console.log(this.image)
    const pixelRatio = window.devicePixelRatio || 1
    const cssWidth = this.$el.getBoundingClientRect().width
    const width = Math.ceil(cssWidth * pixelRatio / this.widthStep) * this.widthStep
    this.width = Math.min(width, this.image.width)
  },
  computed: {
    isVector() {
      return this.image.format === 'svg'
    },
    isBitmap() {
      return !this.isVector
    },
    alt() {
      return this.image.alt || ''
    }
  },
  methods: {
    imageUrl(options) {
      return imageUrl(this.image.url, options)
    },
    onLoad() {
      this.isLoaded = true
    }
  }
}
</script>

<style>
.vue-dato-image__sizer {
  margin-left: auto;
  margin-right: auto;
}

.vue-dato-image__canvas--transparent {
  background-color: transparent;
}

.vue-dato-image__img {
  width: 100%;
  display: inline-block;
  vertical-align: middle;
}

.vue-dato-image__img:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.vue-dato-image__img:after {
  content: attr(alt);
  display: block;
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
}
</style>
