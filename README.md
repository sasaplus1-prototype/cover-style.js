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
- `params.elementWidth`
  - `Number`
- `params.elementHeight`
  - `Number`
- `params.containerWidth`
  - `Number`
- `params.containerHeight`
  - `Number`

- `return`
  - `Object`
- `return.top`
  - `Number|String`
- `return.left`
  - `Number|String`
- `return.width`
  - `String`
- `return.height`
  - `String`
- `return.marginTop`
  - `Number|String`
- `return.marginLeft`
  - `Number|String`

get cover styles for target element.

## License

The MIT license. Please see LICENSE file.
