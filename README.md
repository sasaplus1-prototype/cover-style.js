# cover-style.js

get pseudo style for 'background-size: cover'

## Installation

```sh
$ npm install sasaplus1-prototype/cover-style.js
```

## Usage

### Example

```js
var style = coverStyle({
  elementWidth: image.naturalWidth,
  elementHeight: image.naturalHeight,
  containerWidth: frame.scrollWidth,
  containerHeight: frame.scrollHeight
});

image.style.top = style.top;
image.style.left = style.left;
image.style.width = style.width;
image.style.height = style.height;
image.style.marginTop = style.marginTop;
image.style.marginLeft = style.marginLeft;
```

## Function

### get(params)

- `params`
  - `Object`
- `return`
  - `Object`

get cover styles for target element.

`params` keys are below:

- `elementWidth`
  - `Number`
- `elementHeight`
  - `Number`
- `containerWidth`
  - `Number`
- `containerHeight`
  - `Number`

return object entries are below:

- `top`
 - `Number|String`
- `left`
 - `Number|String`
- `width`
 - `String`
- `height`
 - `String`
- `marginTop`
 - `Number|String`
- `marginLeft`
 - `Number|String`

## License

The MIT license. Please see LICENSE file.
