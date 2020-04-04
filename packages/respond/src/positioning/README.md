# Positioning

Positioning utilities all revolve around positioning elements around the page, such as flexbox, floats, position, etc. Use these to force a element to layout accordingly.

## Table of Contents

<!-- toc -->

* [`@mixin align-content`](#mixin-align-content)
* [`@mixin align-items`](#mixin-align-items)
* [`@mixin align-self`](#mixin-align-self)
* [`@mixin clear`](#mixin-clear)
* [`@mixin flex-direction`](#mixin-flex-direction)
* [`@mixin flex-wrap`](#mixin-flex-wrap)
* [`@mixin float`](#mixin-float)
* [`@mixin justify-content`](#mixin-justify-content)
* [`@mixin justify-items`](#mixin-justify-items)
* [`@mixin justify-self`](#mixin-justify-self)
* [`@mixin place-content`](#mixin-place-content)
* [`@mixin place-items`](#mixin-place-items)
* [`@mixin place-self`](#mixin-place-self)
* [`@mixin position`](#mixin-position)

<!-- tocstop -->

## `@mixin align-content`

The align-content property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"align-content"`     |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include align-content($prefix: ac, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/align-content>

### Since

+ **0.1.0**

## `@mixin align-items`

The align-items property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"align-items"`       |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include align-items($prefix: ai, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/display>

### Since

+ **0.1.0**

## `@mixin align-self`

The align-self property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"align-self"`        |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include align-self($prefix: as, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/align-self>

### Since

+ **0.1.0**

## `@mixin clear`

The clear property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"clear"`             |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include clear($prefix: c, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/clear>

### Since

+ **0.1.0**

## `@mixin flex-direction`

The flex-direction property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"flex-direction"`    |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include flex-direction($prefix: fd, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction>

### Since

+ **0.1.0**

## `@mixin flex-wrap`

The flex-wrap property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"flex-wrap"`         |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include flex-wrap($prefix: fw, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap>

### Since

+ **0.1.0**

## `@mixin float`

The float property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"float"`             |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include float($prefix: pull, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/float>

### Since

+ **0.1.0**

## `@mixin justify-content`

The justify-content property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"justify-content"`   |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include justify-content($prefix: jc, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content>

### Since

+ **0.1.0**

## `@mixin justify-items`

The justify-items property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"justify-items"`     |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include justify-items($prefix: fd, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items>

### Since

+ **0.1.0**

## `@mixin justify-self`

The justify-self property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"justify-self"`      |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include justify-self($prefix: fd, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self>

### Since

+ **0.1.0**

## `@mixin place-content`

The place-content property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"place-content"`     |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include place-content($prefix: fd, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/place-content>

### Since

+ **0.1.0**

## `@mixin place-items`

The place-items property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"place-items"`       |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include place-items($prefix: fd, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/place-items>

### Since

+ **0.1.0**

## `@mixin place-self`

The place-self property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"place-self"`        |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include place-self($prefix: fd, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/place-self>

### Since

+ **0.1.0**

## `@mixin position`

The position property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"position"`          |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include position($prefix: fd, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/position>

### Since

+ **0.1.0**

