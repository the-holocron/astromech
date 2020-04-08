# Pseudo-Classes

A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, [`:hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) can be used to change a button's color when the user's pointer hovers over it.

## Table of Contents

<!-- toc -->

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

## `@mixin hover-focus`

Creates hover, focus combo mixin

* **Group:** General
* **Access:** public

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

* **0.1.0**

### Authors

* Mark Otto

## `@mixin plain-hover-focus`

Creates hover, focus and parent combo mixin

* **Group:** General
* **Access:** public

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

* **0.1.0**

### Authors

* Mark Otto

## `@mixin hover-focus-active`

Creates hover, focus, and active combo mixin

* **Group:** General
* **Access:** public

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

* **0.1.0**

### Authors

* Mark Otto

## `@mixin has-nth`

Creates has-nth

* **Group:** General
* **Access:** public

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
   @include has-nth('n * 4', 'li') {
      color: blue;
   }
}
```

### Dependents

* **`@mixin at-least** Creates at-least
* **`@mixin at-most** Creates at-most
* **`@mixin divisible-by** Creates divisible-by
* **`@mixin has-exactly** Creates has-exactly
* **`@mixin has-odd** Creates has-odd
* **`@mixin has-even** Creates has-even

### Since

* **0.1.0**

### Authors

* Adam Giese

## `@mixin at-least`

Creates at-least

* **Group:** General
* **Access:** public

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

* **[`@mixin has-nth](##general-mixin-has-nth)**

### Since

* **0.1.0**

### Authors

* Adam Giese

## `@mixin at-most`

Creates at-most

* **Group:** General
* **Access:** public

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

* **[`@mixin has-nth](##general-mixin-has-nth)**

### Since

* **0.1.0**

### Authors

* Adam Giese

## `@mixin divisible-by`

Creates divisible-by

* **Group:** General
* **Access:** public

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

* **[`@mixin has-nth](##general-mixin-has-nth)**

### Since

* **0.1.0**

### Authors

* Adam Giese

## `@mixin has-exactly`

Creates has-exactly

* **Group:** General
* **Access:** public

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

* **[`@mixin has-nth](##general-mixin-has-nth)**

### Since

* **0.1.0**

### Authors

* Adam Giese

## `@mixin has-odd`

Creates has-odd

* **Group:** General
* **Access:** public

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

* **[`@mixin has-nth](##general-mixin-has-nth)**

### Since

* **0.1.0**

### Authors

* Adam Giese

## `@mixin has-even`

Creates has-even

* **Group:** General
* **Access:** public

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

* **[`@mixin has-nth](##general-mixin-has-nth)**

### Since

* **0.1.0**

### Authors

* Adam Giese

