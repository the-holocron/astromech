# Utilities

These are miscellaneous utilities that affect hover, focus or active states, responsiveness and `nth-child` selectors.

## Table of Contents

<!-- toc -->

* [`@mixin media-breakpoint-up`](#mixin-media-breakpoint-up)
* [`@mixin media-breakpoint-down`](#mixin-media-breakpoint-down)
* [`@mixin media-breakpoint-only`](#mixin-media-breakpoint-only)
* [`@mixin hover`](#mixin-hover)
* [`@mixin hover-focus`](#mixin-hover-focus)
* [`@mixin plain-hover-focus`](#mixin-plain-hover-focus)
* [`@mixin hover-focus-active`](#mixin-hover-focus-active)
* [`@mixin has-nth`](#mixin-has-nth)
* [`@mixin at-least`](#mixin-at-least)
* [`@mixin at-most`](#mixin-at-most)
* [`@mixin divisible-by`](#mixin-divisible-by)
* [`@mixin has-exactly`](#mixin-has-exactly)
* [`@mixin has-odd`](#mixin-has-odd)
* [`@mixin has-even`](#mixin-has-even)

<!-- tocstop -->

## `@mixin media-breakpoint-up`

Media of at least the minimum breakpoint width. No query for the smallest breakpoint.

+ **Group:** General
+ **Access:** public

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

+ **`@mixin media-breakpoint-only** Media between the breakpoint's minimum and maximum widths.
  No minimum for the smallest breakpoint, and no maximum for the largest one.

### Since

+ **0.1.0**

### Authors

+ Mark Otto

## `@mixin media-breakpoint-down`

Media of at most the maximum breakpoint width. No query for the largest breakpoint.

+ **Group:** General
+ **Access:** public

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

+ **`@mixin media-breakpoint-only** Media between the breakpoint's minimum and maximum widths.
  No minimum for the smallest breakpoint, and no maximum for the largest one.

### Since

+ **0.1.0**

### Authors

+ Mark Otto

## `@mixin media-breakpoint-only`

Media between the breakpoint's minimum and maximum widths.
No minimum for the smallest breakpoint, and no maximum for the largest one.

+ **Group:** General
+ **Access:** public

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

+ **[`@mixin media-breakpoint-up](##general-mixin-media-breakpoint-up)**
+ **[`@mixin media-breakpoint-down](##general-mixin-media-breakpoint-down)**

### Since

+ **0.1.0**

### Authors

+ Mark Otto

## `@mixin hover`

Creates hover mixin

+ **Group:** General
+ **Access:** public

### Contents

styles used on hover states

### Examples

```scss
.test {
  @include hover {
    text-decoration: underline;
  }
}
```

### Since

+ **0.1.0**

### Authors

+ Mark Otto

## `@mixin hover-focus`

Creates hover, focus combo mixin

+ **Group:** General
+ **Access:** public

### Contents

styles used on focus and hover states

### Examples

```scss
.test {
  @include hover-focus {
    text-decoration: underline;
    outline: 1px solid blue;
  }
}
```

### Since

+ **0.1.0**

### Authors

+ Mark Otto

## `@mixin plain-hover-focus`

Creates hover, focus and parent combo mixin

+ **Group:** General
+ **Access:** public

### Contents

styles used on selector, focus and hover states

### Examples

```scss
.test {
  @include plain-hover-focus {
    background-color: blue;
  }
}
```

### Since

+ **0.1.0**

### Authors

+ Mark Otto

## `@mixin hover-focus-active`

Creates hover, focus, and active combo mixin

+ **Group:** General
+ **Access:** public

### Contents

styles used on focus, active and hover states

### Examples

```scss
.test {
  @include hover-focus-active {
    background-color: blue;
  }
}
```

### Since

+ **0.1.0**

### Authors

+ Mark Otto

## `@mixin has-nth`

Creates has-nth

+ **Group:** General
+ **Access:** public

### Parameters

| Name          | Type                                                             | Description            | Default |
| :------------ | :--------------------------------------------------------------- | :--------------------- | :------ |
| `$expression` | **[String](https://sass-lang.com/documentation/values/strings)** | a valid CSS expression | -       |
| `$element`    | **[String](https://sass-lang.com/documentation/values/strings)** | a valid CSS selector   | `'*'`   |

### Contents

styles used on a narrowed set of elements

### Examples

```scss
li {
   @include has-nth('n + 4', 'li') {
      color: blue;
   }
}
```

### Dependents

+ **`@mixin at-least** Creates at-least
+ **`@mixin at-most** Creates at-most
+ **`@mixin divisible-by** Creates divisible-by
+ **`@mixin has-exactly** Creates has-exactly
+ **`@mixin has-odd** Creates has-odd
+ **`@mixin has-even** Creates has-even

### Since

+ **0.1.0**

### Authors

+ Adam Giese

## `@mixin at-least`

Creates at-least

+ **Group:** General
+ **Access:** public

### Parameters

| Name        | Type                                                             | Description                 | Default |
| :---------- | :--------------------------------------------------------------- | :-------------------------- | :------ |
| `$quantity` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a number of items to narrow | -       |
| `$element`  | **[String](https://sass-lang.com/documentation/values/strings)** | a valid CSS selector        | `'*'`   |

### Contents

styles used on a narrowed set of elements

### Examples

```scss
li {
   @include at-least(4, 'li') {
      color: blue;
   }
}
```

### Dependencies

+ **[`@mixin has-nth](##general-mixin-has-nth)**

### Since

+ **0.1.0**

### Authors

+ Adam Giese

## `@mixin at-most`

Creates at-most

+ **Group:** General
+ **Access:** public

### Parameters

| Name        | Type                                                             | Description                 | Default |
| :---------- | :--------------------------------------------------------------- | :-------------------------- | :------ |
| `$quantity` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a number of items to narrow | -       |
| `$element`  | **[String](https://sass-lang.com/documentation/values/strings)** | a valid CSS selector        | `'*'`   |

### Contents

styles used on a narrowed set of elements

### Examples

```scss
li {
   @include at-most(4, 'li') {
      color: blue;
   }
}
```

### Dependencies

+ **[`@mixin has-nth](##general-mixin-has-nth)**

### Since

+ **0.1.0**

### Authors

+ Adam Giese

## `@mixin divisible-by`

Creates divisible-by

+ **Group:** General
+ **Access:** public

### Parameters

| Name        | Type                                                             | Description                  | Default |
| :---------- | :--------------------------------------------------------------- | :--------------------------- | :------ |
| `$quantity` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a number of items to narrow  | -       |
| `$offset`   | **[Number](https://sass-lang.com/documentation/values/numbers)** | a number to add on to narrow | `0`     |
| `$element`  | **[String](https://sass-lang.com/documentation/values/strings)** | a valid CSS selector         | `'*'`   |

### Contents

styles used on a narrowed set of elements

### Examples

```scss
li {
   @include divisible-by(4, 0, 'li') {
      color: blue;
   }
}
```

### Dependencies

+ **[`@mixin has-nth](##general-mixin-has-nth)**

### Since

+ **0.1.0**

### Authors

+ Adam Giese

## `@mixin has-exactly`

Creates has-exactly

+ **Group:** General
+ **Access:** public

### Parameters

| Name        | Type                                                             | Description                 | Default |
| :---------- | :--------------------------------------------------------------- | :-------------------------- | :------ |
| `$quantity` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a number of items to narrow | -       |
| `$element`  | **[String](https://sass-lang.com/documentation/values/strings)** | a valid CSS selector        | `'*'`   |

### Contents

styles used on a narrowed set of elements

### Examples

```scss
li {
   @include has-exactly(4, 'li') {
      color: blue;
   }
}
```

### Dependencies

+ **[`@mixin has-nth](##general-mixin-has-nth)**

### Since

+ **0.1.0**

### Authors

+ Adam Giese

## `@mixin has-odd`

Creates has-odd

+ **Group:** General
+ **Access:** public

### Parameters

| Name       | Type                                                             | Description          | Default |
| :--------- | :--------------------------------------------------------------- | :------------------- | :------ |
| `$element` | **[String](https://sass-lang.com/documentation/values/strings)** | a valid CSS selector | `'*'`   |

### Contents

styles used on a narrowed set of elements

### Examples

```scss
li {
   @include has-odd('li') {
      color: blue;
   }
}
```

### Dependencies

+ **[`@mixin has-nth](##general-mixin-has-nth)**

### Since

+ **0.1.0**

### Authors

+ Adam Giese

## `@mixin has-even`

Creates has-even

+ **Group:** General
+ **Access:** public

### Parameters

| Name       | Type                                                             | Description          | Default |
| :--------- | :--------------------------------------------------------------- | :------------------- | :------ |
| `$element` | **[String](https://sass-lang.com/documentation/values/strings)** | a valid CSS selector | `'*'`   |

### Contents

styles used on a narrowed set of elements

### Examples

```scss
li {
   @include has-even('li') {
      color: blue;
   }
}
```

### Dependencies

+ **[`@mixin has-nth](##general-mixin-has-nth)**

### Since

+ **0.1.0**

### Authors

+ Adam Giese

