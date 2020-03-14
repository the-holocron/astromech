# Bounce

Bounce animations come from the opposite direction listed in the class (named after the direction it travels) and go slightly past the target and then oscillating a bit giving it the appearance of momentum and bounce.

## Table of Contents

<!-- toc -->

* [`@mixin bounce-back-forth`](#mixin-bounce-back-forth)
* [`@mixin bounce-in-down`](#mixin-bounce-in-down)
* [`@mixin bounce-in-left`](#mixin-bounce-in-left)
* [`@mixin bounce-in-right`](#mixin-bounce-in-right)
* [`@mixin bounce-in-up`](#mixin-bounce-in-up)
* [`@mixin bounce-out-down`](#mixin-bounce-out-down)
* [`@mixin bounce-out-left`](#mixin-bounce-out-left)
* [`@mixin bounce-out-right`](#mixin-bounce-out-right)
* [`@mixin bounce-out-up`](#mixin-bounce-out-up)

<!-- tocstop -->

## `@mixin bounce-back-forth`

This will take the element and animate it from the top down with a bounce at the end.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include bounce-back-forth();
```

### Since

* **0.1.0**

## `@mixin bounce-in-down`

This will take the element and animate it from the top down with a bounce at the end.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include bounce-in-down();
```

### Since

* **0.1.0**

## `@mixin bounce-in-left`

This will take the element and animate it from the left down with a bounce at the end.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include bounce-in-left();
```

### Since

* **0.1.0**

## `@mixin bounce-in-right`

This will take the element and animate it from the right down with a bounce at the end.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include bounce-in-right();
```

### Since

* **0.1.0**

## `@mixin bounce-in-up`

This will take the element and animate it from the bottom down with a bounce at the end.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include bounce-in-up();
```

### Since

* **0.1.0**

## `@mixin bounce-out-down`

This will take the element and animate it from the its current position with a bounce and then exit to through the bottom.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include bounce-out-down();
```

### Since

* **0.1.0**

## `@mixin bounce-out-left`

This will take the element and animate it from the its current position with a bounce and then exit to through the left.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include bounce-out-left();
```

### Since

* **0.1.0**

## `@mixin bounce-out-right`

This will take the element and animate it from the its current position with a bounce and then exit to through the right.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include bounce-out-right();
```

### Since

* **0.1.0**

## `@mixin bounce-out-up`

This will take the element and animate it from the its current position with a bounce and then exit to through the top.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include bounce-out-up();
```

### Since

* **0.1.0**
