---
title: 'Mixins'
description: 'Documentation of all the mixins available in the library.'
categories:
  - 'User Guides'
---

Documentation of all the mixins available in Break.

## Media Query Mixins

All breakpoint media query mixins use a `$breakpoints` map.
The structure of the map is described
[in the Getting Started guide]({{< ref "getting-started.md#basic-example" >}}).

The following breakpoint map is used in all of the examples on this page.

```scss
$breakpoints: (
  'small': (
    'lower': null,
    'upper': 400px
  ),
  'medium': (
    'lower': 401px,
    'upper': 800px
  ),
  'large': (
    'lower': 801px,
    'upper': 1200px
  ),
  'huge': (
    'lower': 1201px,
    'upper': null
  )
);
```

### `breakpoint($lower-key, $upper-key, $breakpoints)`

Places a `@content` block inside a media query enabled beteen the selected
breakpoints.

If one of the bounds is `null`, no condition is created for that bound. If both
bounds are null, the `@content` block is placed directly with no media query at
all.

#### Arguments

- `$lower-key (string)`: The `min-width` of the media query will be the lower
  value of this key in the `$breakpoints` map.
- `$upper-key (string)`: The `max-width` of the media query will be the upper
  value of this key in the `$breakpoints` map.
- `$breakpoints (map)`: Map of screen breakpoints.

#### Example

```scss
.element {
  @include breakpoint('medium', 'large', $breakpoints) {
    background: red;
  }
}
```

Yields the following output.

```scss
.element {
  @media (min-width: 401px) and (max-width: 1200px) {
    background: red;
  }
}
```

### `breakpoint-down($key, $breakpoints)`

Places a `@content` block inside a media query enabled for screens of the
selected breakpoint size and smaller.

#### Arguments

- `$key (string)`: The `max-width` of the media query will be the upper value of
  this key in the `$breakpoints` map.
- `$breakpoints (map)`: Map of screen breakpoints.

#### Example

```scss
.element {
  @include breakpoint-down('medium', $breakpoints) {
    background: red;
  }
}
```

Yields the following output.

```scss
.element {
  @media (max-width: 800px) {
    background: red;
  }
}
```

### `breakpoint-up($key, $breakpoints)`

Places a `@content` block inside a media query enabled for screens of the
selected breakpoint size and larger.

#### Arguments

- `$key (string)`: The `min-width` of the media query will be the lower value of
  this key in the `$breakpoints` map.
- `$breakpoints (map)`: Map of screen breakpoints.

#### Example

```scss
.element {
  @include breakpoint-up('medium', $breakpoints) {
    background: red;
  }
}
```

Yields the following output.

```scss
.element {
  @media (min-width: 401px) {
    background: red;
  }
}
```

### `breakpoint-only($key, $breakpoints)`

Places a `@content` block inside a media query enabled for screens sized within
the selected breakpoint.

#### Arguments

- `$key (string)`: The lower and upper bounds of the media query will be the
  values of this key in the `$breakpoints` map.
- `$breakpoints (map)`: Map of screen breakpoints.

#### Example

```scss
.element {
  @include breakpoint-only('medium', $test-breakpoints) {
    background: red;
  }
}
```

Yields the following output.

```scss
.element {
  @media (min-width: 401px) and (max-width: 800px) {
    background: red;
  }
}
```
