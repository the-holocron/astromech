# Math

A translation of mathematical functions into (S)CSS.

## Table of Contents

<!-- toc -->

* [`@function average`](#function-average)
* [`@function deg45`](#function-deg45)
* [`@function circle-angle`](#function-circle-angle)
* [`@function circle-normal`](#function-circle-normal)
* [`@function exp`](#function-exp)
* [`@function fact`](#function-fact)
* [`@function frexp`](#function-frexp)
* [`@function ldexp`](#function-ldexp)
* [`@function rad`](#function-rad)

<!-- tocstop -->

## `@function average`

Get the average of numbers provided a list of numbers

* **Group:** General
* **Access:** public

### Parameters

| Name    | Type                                                         | Description                      | Default |
| :------ | :----------------------------------------------------------- | :------------------------------- | :------ |
| `$nums` | **[List](https://sass-lang.com/documentation/values/lists)** | a list of numbers to average out | -       |

### Returns

**[Number](https://sass-lang.com/documentation/values/numbers)** - the average of all values

### Examples

```scss
average(10, 60, 20);
// 30
```

## `@function deg45`

Gives us 45 degrees of a circle

* **Group:** General
* **Access:** public

### Returns

**[Number](https://sass-lang.com/documentation/values/numbers)** - 45º

### Examples

```scss
deg45 // 0.70710678
```

### Dependents

* **`@function circle-angle** Gets the radius of a circle
* **`@function circle-normal** Gets the angle of a circle

### Since

* **0.1.0**

## `@function circle-angle`

Gets the radius of a circle

* **Group:** General
* **Access:** public

### Parameters

| Name    | Type     | Description       | Default |
| :------ | :------- | :---------------- | :------ |
| `$size` | CSS Unit | the expected size | -       |

### Returns

CSS Unit - an offset used for box-shadow

### Dependencies

* **[`@function deg45`](#general-function-deg45)**

### Since

* **0.1.0**

## `@function circle-normal`

Gets the angle of a circle

* **Group:** General
* **Access:** public

### Parameters

| Name    | Type     | Description       | Default |
| :------ | :------- | :---------------- | :------ |
| `$size` | CSS Unit | the expected size | -       |

### Returns

CSS Unit - an offset used for box-shadow

### Dependencies

* **[`@function deg45`](#general-function-deg45)**

### Since

* **0.1.0**

## `@function exp`

Returns E^x, where x is the argument, and E is Euler's constant, the base of the natural logarithms.

* **Group:** General
* **Access:** public

### Parameters

| Name | Type                                                             | Description                        | Default |
| :--- | :--------------------------------------------------------------- | :--------------------------------- | :------ |
| `$x` | **[Number](https://sass-lang.com/documentation/values/numbers)** | the number to modify exponentially | -       |

### Returns

**[Number](https://sass-lang.com/documentation/values/numbers)** - a modified number

### Examples

```scss
exp(1)  // 2.71828
exp(-1) // 0.36788
```

### Since

* **0.1.0**

### Authors

* Takeru Suzuki

## `@function fact`

Returns the factorial of a non-negative integer.

* **Group:** General
* **Access:** public

### Parameters

| Name | Type                                                             | Description             | Default |
| :--- | :--------------------------------------------------------------- | :---------------------- | :------ |
| `$x` | **[Number](https://sass-lang.com/documentation/values/numbers)** | A non-negative integer. | -       |

### Returns

**[Number](https://sass-lang.com/documentation/values/numbers)** - modified number

### Throws

* **@warn** Argument for `fact()` must be a positive integer

### Examples

```scss
fact(0) // 1
fact(8) // 40320
```

### Since

* **0.1.0**

### Authors

* Takeru Suzuki

## `@function frexp`

Returns a two-element list containing the normalized fraction and exponent of number.

* **Group:** General
* **Access:** public

### Parameters

| Name | Type                                                             | Description | Default |
| :--- | :--------------------------------------------------------------- | :---------- | :------ |
| `$x` | **[Number](https://sass-lang.com/documentation/values/numbers)** | -           | -       |

### Returns

**[List](https://sass-lang.com/documentation/values/lists)** - fraction, exponent

### Since

* **0.1.0**

### Authors

* Takeru Suzuki

## `@function ldexp`

Returns $x \* 2^$exp

* **Group:** General
* **Access:** public

### Parameters

| Name   | Type                                                             | Description | Default |
| :----- | :--------------------------------------------------------------- | :---------- | :------ |
| `$x`   | **[Number](https://sass-lang.com/documentation/values/numbers)** | -           | -       |
| `$exp` | **[Number](https://sass-lang.com/documentation/values/numbers)** | -           | -       |

### Returns

**[Number](https://sass-lang.com/documentation/values/numbers)** - modified number

### Since

* **0.1.0**

### Authors

* Takeru Suzuki

## `@function rad`

Returns a radian when given a degree

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description | Default |
| :------- | :--------------------------------------------------------------- | :---------- | :------ |
| `$angle` | **[Number](https://sass-lang.com/documentation/values/numbers)** | -           | -       |

### Returns

**[Number](https://sass-lang.com/documentation/values/numbers)** - a radian

### Examples

```scss
rad(45deg) // 0.78539816
```

### Since

* **0.1.0**

### Authors

* Daniel Perez Alvarez
