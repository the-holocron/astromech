# Miscellaneous

Various functions that deal with breakpoints and deeply nested maps and lists.

<!-- toc -->

* [`@function next`](#function-next)
* [`@function min`](#function-min)
* [`@function max`](#function-max)
* [`@function map-deep-get`](#function-map-deep-get)

<!-- tocstop -->

## `@function next`

Name of the next breakpoint, or null for the last breakpoint.  Breakpoints are defined as a map of (name: minimum width), order from small to large: (xs: 0, sm: 34rem, md: 45rem)

The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.

* **Group:** General
* **Access:** public

### Parameters

| Name                | Type                                                             | Description                                                      | Default                  |
| :------------------ | :--------------------------------------------------------------- | :--------------------------------------------------------------- | :----------------------- |
| `$name`             | **[String](https://sass-lang.com/documentation/values/strings)** | the name for the breakpoint                                      | -                        |
| `$breakpoints`      | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                                        | -                        |
| `$breakpoint-names` | **[List](https://sass-lang.com/documentation/values/lists)**     | a list of names for breakpoints when passed a map of breakpoints | `map-keys($breakpoints)` |

### Returns

**[String](https://sass-lang.com/documentation/values/strings)** - the name of next breakpoint when passed a map of breakpoints

### Examples

```scss
@include breakpoint-next(sm)
// md
@include breakpoint-next(sm, $breakpoints: (xs: 0, sm: 34rem, md: 45rem))
// md
@include breakpoint-next(sm, $breakpoint-names: (xs sm md))
// md
```

### Dependents

* **`@function max`** Maximum breakpoint width.

### Since

* **0.1.0**

### Authors

* Mark Otto

## `@function min`

Minimum breakpoint width

* **Group:** General
* **Access:** public

### Parameters

| Name           | Type                                                             | Description                 | Default |
| :------------- | :--------------------------------------------------------------- | :-------------------------- | :------ |
| `$name`        | **[String](https://sass-lang.com/documentation/values/strings)** | the name for the breakpoint | -       |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints   | -       |

### Returns

CSS Unit, **[Null](https://sass-lang.com/documentation/values/null)** - the minimum value is calculated as the minimum of the next one or `null` for the smallest (first) breakpoint

### Examples

```scss
@include breakpoint-min(sm, (xs: 0, sm: 34rem, md: 45rem))
// 34rem
```

### Dependents

* **`@function max`** Maximum breakpoint width.

### Since

* **0.1.0**

### Authors

* Mark Otto

## `@function max`

Maximum breakpoint width.

* **Group:** General
* **Access:** public

### Parameters

| Name           | Type                                                             | Description                 | Default |
| :------------- | :--------------------------------------------------------------- | :-------------------------- | :------ |
| `$name`        | **[String](https://sass-lang.com/documentation/values/strings)** | the name for the breakpoint | -       |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints   | -       |

### Returns

CSS Unit, **[Null](https://sass-lang.com/documentation/values/null)** - the maximum value is calculated as the minimum of the next one less 0.1 or `null` for the largest (last) breakpoint.

### Examples

```scss
@include breakpoint-max(sm, (xs: 0, sm: 34rem, md: 45rem))
// 44.9rem
```

### Dependencies

* **[`@function next`](#general-function-next)**
* **[`@function min`](#general-function-min)**

### Since

* **0.1.0**

### Authors

* Mark Otto

## `@function map-deep-get`

Searches through maps and grabs the key when it finds the map specified

* **Group:** General
* **Access:** public

### Parameters

| Name    | Type                                                       | Description           | Default |
| :------ | :--------------------------------------------------------- | :-------------------- | :------ |
| `$map`  | **[Map](https://sass-lang.com/documentation/values/maps)** | a structured map      | -       |
| `$keys` | Arglist                                                    | the key value to grab | -       |

### Returns

Desired value from the map(s)

### Since

* **0.1.0**

### Authors

* Hugo Giraudel
