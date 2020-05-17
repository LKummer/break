Break is a library of Sass mixins that ease creation of systemized media query
breakpoints.

For more information [see the documentation](https://lkummer.github.io/break/).

To get started quickly
[see the Getting Started guide](https://lkummer.github.io/break/guide/getting-started/).

# Quick Start Guide

[Break is available on NPM](https://www.npmjs.com/package/@lkummer/break).

```
$ npm add -D @lkummer/break
$ yarn add --dev @lkummer/break
```

With the module installed, systemized breakpoints can be created and used.

```scss
@import '@lkummer/break';

$breakpoints: (
  'small': (
    'lower': null,
    'upper': 780px
  ),
  'large': (
    'lower': 781px,
    'upper': null
  )
);

.element {
  // Media query enabled only on small screens.
  @include breakpoint-only('small', $breakpoints) {
    // @content is placed in the media query.
    background: blue;
  }
}
```

Once compiled the example will output:

```css
.element {
  @media (max-width: 780px) {
    background: blue;
  }
}
```

Read [the detailed Getting Started guide](https://lkummer.github.io/break/guide/getting-started/).

# Development Guide

Before running the development scripts, make sure to download the dependencies.

```
$ yarn install
```

## Testing

Sass functionality is tested using True. [More information
can be found here](https://www.oddbird.net/true/docs/index.html).

Tests can be run using the `test` script.

```
$ yarn run test
```

## Linting

Linting can be done using the `lint` script.

```
$ yarn run lint
```

## Formatting

Style enforcement is done using Prettier.
Files can be formatted using the `format` script.

```
$ yarn run format
```

## Documentation

The `doc` script builds the documentation to `dist/doc`.

```
$ yarn run doc
```
