# Fade

Fade animations are a bit more subtle.  They still come from the opposite direction listed in the class (named after the direction it travels) but they transition the opacity of the element instead.

## Table of Contents

<!-- toc -->

* [`@mixin fade-flash`](#mixin-fade-flash)
* [`@mixin fade-in-down`](#mixin-fade-in-down)
* [`@mixin fade-in-left`](#mixin-fade-in-left)
* [`@mixin fade-in-right`](#mixin-fade-in-right)
* [`@mixin fade-in-up`](#mixin-fade-in-up)
* [`@mixin fade-in`](#mixin-fade-in)
* [`@mixin fade-out-down`](#mixin-fade-out-down)
* [`@mixin fade-out-left`](#mixin-fade-out-left)
* [`@mixin fade-out-right`](#mixin-fade-out-right)
* [`@mixin fade-out-up`](#mixin-fade-out-up)
* [`@mixin fade-out`](#mixin-fade-out)

<!-- tocstop -->

## `@mixin fade-flash`

This will take the element and fade it in from its current position.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include fade-flash();
```

### Since

* **0.1.0**

## `@mixin fade-in-down`

This will take the element and fade it in from the top.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include fade-in-down();
```

### Since

* **0.1.0**

## `@mixin fade-in-left`

This will take the element and fade it in from the left.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include fade-in-left();
```

### Since

* **0.1.0**

## `@mixin fade-in-right`

This will take the element and fade it in from the right.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include fade-in-right();
```

### Since

* **0.1.0**

## `@mixin fade-in-up`

This will take the element and fade it in from the bottom.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include fade-in-up();
```

### Since

* **0.1.0**

## `@mixin fade-in`

This will take the element and fade it in from its current position.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include fade-in();
```

### Since

* **0.1.0**

## `@mixin fade-out-down`

This will take the element and fade it out from the bottom.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include fade-out-down();
```

### Since

* **0.1.0**

## `@mixin fade-out-left`

This will take the element and fade it out from the left.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include fade-out-left();
```

### Since

* **0.1.0**

## `@mixin fade-out-right`

This will take the element and fade it out from the right.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include fade-out-right();
```

### Since

* **0.1.0**

## `@mixin fade-out-up`

This will take the element and fade it out from the top.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include fade-out-up();
```

### Since

* **0.1.0**

## `@mixin fade-out`

This will take the element and fade it out from its current position.

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                             | Description                                       | Default      |
| :------- | :--------------------------------------------------------------- | :------------------------------------------------ | :----------- |
| `$class` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name to add to activate the animation | `".animate"` |

### Examples

```scss
@include fade-out();
```

### Since

* **0.1.0**
