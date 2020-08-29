Break is a library of Sass mixins that ease the creation of systemized media query
breakpoints.

For more information [see the documentation](https://lkummer.github.io/break/).

To get started quickly
[read the Getting Started guide](https://lkummer.github.io/break/guide/getting-started/).

# Quick Start Guide

[Break is available on NPM](https://www.npmjs.com/package/@lkummer/break).

```
$ npm add -D @lkummer/break
$ yarn add --dev @lkummer/break
```

With the module installed, systemized breakpoints can be defined and media queries
can be created with mixins.

```scss
@import '@lkummer/break' as break;

$breakpoints: (
  'small': (
    'upper': 780px
  ),
  'large': (
    'lower': 781px
  )
);

.element {
  // Media query enabled on small screens and under.
  @include break.media-under('small', $breakpoints) {
    // @content is placed in the media query.
    background: blue;
  }
}
```

Yielding the following output once processed.

```css
.element {
  @media (max-width: 780px) {
    background: blue;
  }
}
```

[Read the Getting Started guide](https://lkummer.github.io/break/guide/getting-started/).

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

Linting can be run using the `lint` script.

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

The `doc` script builds the documentation in the `dist/doc` directory.

```
$ yarn run doc
```
