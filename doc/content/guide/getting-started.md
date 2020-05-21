---
title: 'Getting Started'
description: 'Quick guide to get you started.'
categories:
  - 'User Guides'
---

This guide goes through installation and a provides a basic example.

## Downloading Break

Break is [available on NPM](https://www.npmjs.com/package/@lkummer/break)
and can be downloaded using NPM and Yarn.

```shell
$ npm add --save-dev @lkummer/break
$ yarn add --dev @lkummer/break
```

Note the library is built for libsass. Node binding is available on NPM as
`node-sass`.

## Importing Break

Break can now be imported in SCSS files in your project.

```scss
@import '@lkummer/break';
```

## Basic Example

With everything up and running we can have a look at a quick example.

### Defining Breakpoints

Breakpoints are defined by a map which contains a key for each breakpoint.
Each breakpoint is a map of `upper` and `lower` bounds.

```scss
$breakpoints: (
  'small': (
    'upper': 600px
  ),
  'medium': (
    'lower': 601px,
    'upper': 900px
  ),
  'large': (
    'lower': 901px
  )
);
```

Leave the lowest and highest bounds unset for the best results. This helps break
generate minimal media queries.

Note the breakpoint map keys must be named exactly `lower` and `upper`.

### Creating Media Queries

Now with the breakpoints defined we can do a small example.
Say we want a grid layout that switches from displaying two columns to displaying
a single column on any screen size smaller than `small`.

The `breakpoint-down($key, $breakpoints)` mixin fits the job. It creates a media
query enabled for screen sizes smaller than the upper bound of the provided
breakpoint key.

```scss
@import '@lkummer/break';

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

Break only provides Sass mixins so the output only contains what you use.

To learn about all mixins available in Break
[see the mixins guide]({{< ref "mixins.md" >}}).
