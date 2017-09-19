# AR - Async require

Async loading external JS files in 1.2 kB.

## Usages

### Javascript

Import the ar.js file in your HTML page and use the library in this way:

```javascript
ar(['script.js', 'jquery.js'], function() {
    console.log('Write your code here');
});
```

### Typescript

The library is write in TypeScript, so it can be used in a TS Project.

```typescript
ar(['script.js', 'jquery.js'], () => {
    console.log('Write your code here');
});
```

## Notes

Could it be an alternative to requirejs?
I don't think so... or... yes, it is! ;P