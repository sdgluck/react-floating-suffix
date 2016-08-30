# react-floating-suffix

> :cloud: Don't let that suffix outta sight!

Made with ❤ at [@outlandish](http://www.twitter.com/outlandish)

<a href="http://badge.fury.io/js/react-floating-suffix"><img alt="npm version" src="https://badge.fury.io/js/react-floating-suffix.svg"></a>
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Float an extension/suffix/whatevs so that it displays to the right of the content even if the content overflows. 

> Dude no. 1: "Hey man, you should totally float the suffix so that it never goes out of sight." 

> Dude no. 2: ["Outta sight, dude!"](https://www.urbandictionary.com/define.php?term=Out%20of%20sight&defid=7866179)

<img alt="react-floating-suffix demo" src="https://github.com/sdgluck/react-floating-suffix/blob/master/demo.gif">

## Install

```sh
npm install react-floating-suffix --save
```

## Import

```js
// ES2015
import FloatingSuffix from 'react-floating-suffix'
```

```js
// CommonJS
var FloatingSuffix = require('react-floating-suffix')
```

## Usage

```js
<FloatingSuffix
  content"New Text Document"
  suffix=".txt"
  
  // all optional
  style={{ backgroundColor: 'white', color: 'black' }}
  width="100px"
  textOverflow="ellipsis"
/>
```

## Props

### `content <String|Element>`

Required.

The content to append a floating suffix on to.

### `suffix <String>`

Required.

The floating suffix text.

### `style <Object>`

Optional, default: none.

Customise the container with your own CSS styles.

Overrides the `textOverflow` and `width` properties.

### `width <String|Number>`

Optional, default: `'100%'`

The width of the container. 

When the content is larger than this value minus the width of the suffix, the suffix will stick.

```js
// Awesome pseudo-code
const willSuffixFloat = container.width - suffix.width > width 
```

### `textOverflow <String>`

Optional, default: `ellipsis`.

Value of the `text-overflow` CSS property for the `content`.

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out Kent C. Dodds'
[great video tutorials on egghead.io](https://egghead.io/lessons/javascript-identifying-how-to-contribute-to-an-open-source-project-on-github)!

## Author & License

`react-floating-suffix` was created by [Sam Gluck](https://twitter.com/sdgluck) and is released under the MIT license.
