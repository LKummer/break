---
title: 'Getting Started'
description: 'Quick guide to get you started.'
categories:
  - 'User Guides'
---

This guide goes through installation and a provides a basic example.

## Downloading Break

Break is available on NPM and can be downloaded using NPM and Yarn.

```shell
$ npm add --save-dev @lkummer/break
$ yarn add --dev @lkummer/break
```

Note the library is built for libsass. Node binding is available on NPM as
`node-sass`.

## Importing Break

Break can now be imported in SCSS files in your project.

```scss
@import 'break';
```

## Basic Example

Breakpoints are defined by a map which contains a key for each breakpoint.
Each breakpoint is a map of `upper` and `lower` bounds.

```scss
$breakpoints: (
  'small': (
    'lower': null,
    'upper': 600px
  ),
  'medium': (
    'lower': 601px,
    'upper': 900px
  ),
  'large': (
    'lower': 901px,
    'upper': null
  )
);
```

For the best functionality set the lowest and highest bounds as null. This
ensures no useless media queries are created.

Note the breakpoint map keys must be named exactly `lower` and `upper`.

Now with the breakpoints defined we can do a small example.
Say we want a grid layout that switches from a two columns to a single column on
any screen size smaller than `small`.

The `breakpoint-down($key, $breakpoints)` mixin fits the job. It creates a media
query enabled for screen sizes smaller than the upper bound of the provided
breakpoint key.

```scss
@import 'break';

.grid {
  grid-template-columns: 1fr 1fr;

  @include breakpoint-down('small', $breakpoints) {
    grid-template-columns: 1fr;
  }
}
```

The example creates the following CSS output.

```scss
.grid {
  grid-template-columns: 1fr 1fr;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}
```

Break contains only Sass mixins, meaning no useless code is added to the bundle.

To learn about all the avaiable mixins,
[see the mixins guide]({{< ref "mixins.md" >}}).
