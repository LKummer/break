Modern Sass mixins to make life ez.

1. [Core Concepts](#core-concepts)
2. [What Makes it Special](#what-makes-it-special)
3. [Development Guide](#development-guide)

# Core Concepts

The design of EZSS follows a few core concepts.

## Style Agnostic

Designed not as a design system, but as a utility to create custom designs.

## Systemized Design

Eazes theme systemization to make decision making a breeze.

Built around CSS custom properties to enable runtime theme customization.

## Enhance not Replace

Here not to replace stylesheets, but to aid in creating well structured,
systemized stylesheets.

Hence why no element selectors are included in the library.

## Zero Bloat

You should not pay for what you do not use.

Using Sass mixins, no unused styles find their way to the bundle.

# What Makes it Special

## Compared to Bootstrap

While Bootsrap does offer Sass mixins, it is mostly a component library.

EZSS does not include any components, encouraging completely custom design.

## Compared to Tailwind

EZSS shares much of it's philosophy with Tailwind.
The key difference is that Tailwind replaces custom stylesheets and mixes the
style into the HTML by using classes named directly after CSS directives.

EZSS does not intend to replace stylesheets and strongly believes in the
separation of concerns stylesheets provide.

# Development Guide

Before running the development scripts, make sure to download the dependenceis.

```
$ yarn install
```

## Testing

Sass functionality is tested using True. [More information
can be found on it's documentation](https://www.oddbird.net/true/docs/index.html).

Mocha is used for test running, and can be accessed through the `test` script.

```
$ yarn run test
```

## Linting

Linting is done using Stylelint. It can be accessed through the `lint` script.

```
$ yarn run lint
```

## Formatting

Style enforcement is done using Prettier.
Files can be formatted using the `format` script.

```
$ yarn run format
```
