---
title: 'Getting Started'
description: 'Quick guide to get you started'
categories:
  - 'User Guides'
---

This guide goes through installation and a basic example.

It is assumed you are already familiar with
[CSS media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries).
If not, check out
[the beginner's guide on MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries).

Thanks to the advent of modern CSS, it has become very easy to systemize _almost_ anything.
Almost anything, that is.
Systemizing media queries is still challenging, as CSS custom properties can not be used within them.

This challenge motivated the creation of Break.
Enabling consistent responsive experiences across an entire website.

## Downloading Break

Break is [available on NPM](https://www.npmjs.com/package/@lkummer/break).
It can be installed via NPM or Yarn:

```s
# For NPM users:
$ npm add --save-dev @lkummer/break
# Or if using Yarn:
$ yarn add --dev @lkummer/break
```

Note the library is built for Dart Sass and uses the module system.

## Importing Break

Once isntalled, Break can be imported in your project.

```scss
@use '@lkummer/break';
```

Note importing this way is only possible when using a bundler that looks up Node
modules, such as Webpack.

## Basic Example

With everything up and running we can try a quick example.

### Defining Breakpoints

Breakpoints are defined by a map containing a key for each breakpoint.
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

Note the breakpoint map keys must be named _exactly_ `lower` and `upper`.

### Creating Media Queries

With the breakpoints defined we can try out a mixin.
Say we want a grid layout that switches from displaying two columns to displaying
a single column on any screen size smaller than `small`.

The `media-under($key, $breakpoints)` mixin fits the job. It creates a media
query **enabled** for screen sizes **smaller** than the upper bound of the provided
breakpoint key.

```scss
@use '@lkummer/break' as break;

.grid {
  grid-template-columns: 1fr 1fr;

  @include break.media-under('small', $breakpoints) {
    grid-template-columns: 1fr;
  }
}
```

Once processed, the media query is created:

```scss
.grid {
  grid-template-columns: 1fr 1fr;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}
```

Break only provides Sass mixins to keep the output as minimal as possible.

To learn about all mixins available in Break
[see the mixins guide]({{< ref "mixins.md" >}}).
