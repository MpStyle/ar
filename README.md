# AR - Async require

Async loading external JS files in 1.2 kB.

[![Build Status](https://travis-ci.org/MpStyle/ar.svg?branch=master)](https://travis-ci.org/MpStyle/ar)

## Install

Use npm to install the library:

```
npm i -S mp-ar
```

## Usages

### Javascript

Import the ar.js file in your HTML page and use the library in this way:

```javascript
ar(['script.js', 'jquery.js'], function() {
    console.log('Write your code here');
});
```

You can also load css file:
```javascript
ar_css(['script.css', 'jquery.css'], function() {
    console.log('Write your code here');
});
```

## Notes

Could it be an alternative to requirejs?

I don't think so... or... yes, it is! ;P

## Contribute

The project is open to your contributions, clone it!

Type `npm install` to download the dependencies.

Type `npm test` to run the tests.

Type `grunt` to compile the typescript code and to generate the ar.js file.
