# At-Rules

At-rules are [CSS statements](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#CSS_statements) that instructs CSS how to behave. They begin with an at sign, `'@'` (`U*0040 COMMERCIAL AT`), followed by an identifier and includes everything up to the next semicolon, `';'` (`U*003B SEMICOLON`), or the next CSS block, whichever comes first.

## Table of Contents

<!-- toc -->

* [`@mixin media-breakpoint-up`](#mixin-media-breakpoint-up)
* [`@mixin media-breakpoint-down`](#mixin-media-breakpoint-down)
* [`@mixin media-breakpoint-only`](#mixin-media-breakpoint-only)

<!-- tocstop -->

## `@mixin media-breakpoint-up`

Media of at least the minimum breakpoint width. No query for the smallest breakpoint.

* **Group:** General
* **Access:** public

### Parameters

| Name           | Type                                                             | Description                 | Default |
| :------------- | :--------------------------------------------------------------- | :-------------------------- | :------ |
| `$name`        | **[String](https://sass-lang.com/documentation/values/strings)** | the name for the breakpoint | -       |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints   | -       |

### Contents

applies to the given breakpoint and wider.

### Examples

```scss
.test {
  @include media-breakpoint-up('md') {
    width: 25%;
  }
}
```

### Dependents

* **`@mixin media-breakpoint-only** Media between the breakpoint's minimum and maximum widths.
  No minimum for the smallest breakpoint, and no maximum for the largest one.

### Since

* **0.1.0**

### Authors

* Mark Otto

## `@mixin media-breakpoint-down`

Media of at most the maximum breakpoint width. No query for the largest breakpoint.

* **Group:** General
* **Access:** public

### Parameters

| Name           | Type                                                             | Description                 | Default |
| :------------- | :--------------------------------------------------------------- | :-------------------------- | :------ |
| `$name`        | **[String](https://sass-lang.com/documentation/values/strings)** | the name for the breakpoint | -       |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints   | -       |

### Contents

applies to the given breakpoint and narrower.

### Examples

```scss
.test {
  @include media-breakpoint-down('md') {
    width: 100%;
  }
}
```

### Dependents

* **`@mixin media-breakpoint-only** Media between the breakpoint's minimum and maximum widths.
  No minimum for the smallest breakpoint, and no maximum for the largest one.

### Since

* **0.1.0**

### Authors

* Mark Otto

## `@mixin media-breakpoint-only`

Media between the breakpoint's minimum and maximum widths.
No minimum for the smallest breakpoint, and no maximum for the largest one.

* **Group:** General
* **Access:** public

### Parameters

| Name           | Type                                                             | Description                 | Default |
| :------------- | :--------------------------------------------------------------- | :-------------------------- | :------ |
| `$name`        | **[String](https://sass-lang.com/documentation/values/strings)** | the name for the breakpoint | -       |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints   | -       |

### Contents

applies only to the given breakpoint, not viewports any wider or narrower.

### Examples

```scss
.test {
  @include media-breakpoint-only('md') {
    width: 50%;
  }
}
```

### Dependencies

* **[`@mixin media-breakpoint-up](##general-mixin-media-breakpoint-up)**
* **[`@mixin media-breakpoint-down](##general-mixin-media-breakpoint-down)**

### Since

* **0.1.0**

### Authors

* Mark Otto
