<p align="center">
  <img width="186" height="90" src="https://user-images.githubusercontent.com/218949/44782765-377e7c80-ab80-11e8-9dd8-fce0e37c235b.png" alt="Beyonk" />
</p>

## Svelte Slim Select

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![CircleCI](https://circleci.com/gh/beyonk-adventures/svelte-slim-select.svg?style=shield)](https://circleci.com/gh/beyonk-adventures/svelte-slim-select)

Svelte ready Select component which is built upon [Slim Select](http://slimselectjs.com)

### Demo

To run a demo, check this project out and run `npm run dev`

## Usage

### To use within a Svelte application:

```bash
npm i -D @beyonk/svelte-slim-select
```

```js
import SlimSelect from '@beyonk/svelte-slim-select'
import 'slim-select/dist/slimselect.css' // or from a cdn as per slim-select docs.

export default {
	components: {
		Carousel,
		Slide
	}
}
```

## Usage

```jsx
<SlimSelect {data} {searchingText} {allowDeselect} />

<script>
  export default {
    data () {
      return {
        searchingText: 'Searching...',
        allowDeselect: true,
        data: {
          label: 'Animals',
          options: [
            {text: 'Cat'},
            {text: 'Dog'},
            {text: 'Bird'}
          ]
        }
      }
    }
  }
</script>
```

To make your life easy, all component options are those directly from [http://slimselectjs.com/options](The original 
documentation).

### Events

You have two events:

* `on:change` relates to SlimSelect's `onChange` event
* `on:beforeChange` relates to SlimSelect's `beforeOnChange` event

```jsx
<SlimSelect on:change="doSomething()" on:beforeChange="doOtherThing()" />
```

## Thanks

Huge thanks to [Nick A Walsh](https://codepen.io/nickawalsh/) for his original carousel, [Rich Harris](https://github.com/Rich-Harris) for his immense work on [Svelte](https://svelte.technology), and [Stu Plumbley](https://github.com/stuplum) for his limitless flexbox expertise.