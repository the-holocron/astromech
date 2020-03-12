# Number

Functions that manipulate numbers; check if a value is a number, within a bounds, etc.

## Table of Contents

<!-- toc -->

* [`@function in-bounds`](#function-in-bounds)
* [`@function is-nan`](#function-is-nan)
* [`@function valid-quantity`](#function-valid-quantity)

<!-- tocstop -->

## `@function in-bounds`

Checks if value is within specified bounds, inclusive

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description       | Default |
| :------- | :--------------------------------------------------------------- | :---------------- | :------ |
| `$value` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a number to check | -       |
| `$min`   | **[Number](https://sass-lang.com/documentation/values/numbers)** | minimum number    | `"0"`   |
| `$max`   | **[Number](https://sass-lang.com/documentation/values/numbers)** | maximum number    | `"1"`   |

### Returns

**[Boolean](https://sass-lang.com/documentation/values/booleans)** - if the number is within range

### Examples

```scss
// outside the bounds
in-bounds(-1);
// false

//nside the bounds
in-bounds(1);
// true
```

### Since

* **0.1.0**

### Authors

* Takeru Suzuki

## `@function is-nan`

Check if value is not a number, eg, NaN or Infinity

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description       | Default |
| :------- | :--------------------------------------------------------------- | :---------------- | :------ |
| `$value` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a number to check | -       |

### Returns

**[Boolean](https://sass-lang.com/documentation/values/booleans)** - true if not a number, false if it is a number

### Examples

```scss
// not a number
is-nan('true');
// true

// is a number
is-nan(1);
// false
```

### Since

* **0.1.0**

### Authors

* Takeru Suzuki

## `@function valid-quantity`

Creates valid-quantity

* **Group:** General
* **Access:** public

### Parameters

| Name        | Type                                                             | Description    | Default |
| :---------- | :--------------------------------------------------------------- | :------------- | :------ |
| `$quantity` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a valid Number | -       |

### Returns

**[Boolean](https://sass-lang.com/documentation/values/booleans)**

### Examples

```scss
@if valid-quanity(4) {
  color: blue;
}
```

### Since

* **0.1.0**

### Authors

* Adam Giese
