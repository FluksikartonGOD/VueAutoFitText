# vue-auto-fit-text

**Fit** or **Truncate** text into container

<!-- [Demo](https://jsfiddle.net/Akryum/ppt7endj/) -->


## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

# Installation

```
npm install --save vue-auto-fit-text
```

**⚠️ This plugin uses the [Intersection Observer API](http://caniuse.com/#feat=intersectionobserver) that is not supported in every browser (currently supported in Edge, Firefox and Chrome). You need to include a [polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) to make it work on incompatible browsers.**

## Import

```javascript
import Vue from 'vue'
import VueAutoFitText from 'vue-auto-fit-text'

Vue.use(VueAutoFitText)
```

# Usage

The plugin registers two different global components

### VueAutoFitText
decreases or increases the font size untill it fits the containing div.

```html
<vue-auto-fit-text
  :value="100$"
></vue-auto-fit-text>
```
Usefull when dealing with progressive ( Bangup ) currencies, amounts, etc...

### VueAutoTruncateText
Auto truncates a string to fit a container

```html
<vue-auto-truncate-text
  :value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi excepturi amet eaque sint sunt quasi assumenda similique esse sed totam."
></vue-auto-truncate-text>
```
Usefull when dealing with long strings (sentences) which vary from language to language and you just want to truncate them untill they fit a container

# VueAutoFitText Configuration
| Property                    | Type    | Default | Description                                                                                                                                                                                                                                                                           |
|:----------------------------|:--------|:--------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| value            | String | null   | value is the actual string you want to be rendered
| minFontSize      | Number  |    6     | minimum font size that the component string can get. Also it starts from this point when increasing to fit the container.
| maxFontSize                    | Number | null   | maximum font size that the component string can get                                                                                                                                                                                                                                                            |
| optimized           | Boolean  | true | If set to true this prop will not recalculate the font size if the string length is the same. For example '100' changes to '200' -> '300' -> '400' probably values before '1000' will occupy the same space thats why we don't want to recalculate the font size again and again. You can always pass false to this prop in order to switch it off                                                                                     |
| observeVisibility          | Object |   { once: true, intersection: { rootMargin: '100px 0px 100px 0px' }}  | same object that is used in vue-observe-visibility you can always overwrite it                                                                                                                                                                                                                                                      |

# Example

```html
<div id="app">
  <button @click="show = !show">Toggle</button>
  <label>
    <input type="checkbox" v-model="isVisible" disabled/> Is visible?
  </label>
  <div ref="test" v-show="show" v-observe-visibility="visibilityChanged">Hello world!</div>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    show: true,
    isVisible: true,
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      this.isVisible = isVisible
      console.log(entry)
    },
  },
})
</script>
```

---

## License

[MIT](http://opensource.org/licenses/MIT)