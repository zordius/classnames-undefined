# classnames-undefined
Wrap the classnames package for better behavior for react16

## Install
```
npm install --save classnames-undefined
```

or

```
yarn add classnames-undefined
```

## Usage

Please refer to document of <a href="https://www.npmjs.com/package/classnames">classnames</a> , and we extend it with this behavior: when the return value of classnames is empty string, we turned it into `undefined`. This can help you to output better HTML when there is no classname for the elements.

```
const cn = require('classnames')
console.log(cn()) // will output empty string


const cu = require('classnames-undefined')
console.log(cu()) // will output undefined
```
