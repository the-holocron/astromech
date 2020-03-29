# Typography

These utilities all revolve around the typography, such as sizing, alignment, transformation, white space etc. Use these to force a elements text to display accordingly. All of these deal exclusively with positioning and not styling such as color or backgrounds All of these deal exclusively with positioning and not styling such as color or backgrounds.

## Table of Contents

<!-- toc -->

* [`@mixin font-size`](#mixin-font-size)
* [`@mixin text-align`](#mixin-text-align)
* [`@mixin text-overflow`](#mixin-text-overflow)
* [`@mixin text-transform`](#mixin-text-transform)
* [`@mixin valign`](#mixin-valign)
* [`@mixin white-space`](#mixin-white-space)
* [`@mixin word-break`](#mixin-word-break)

<!-- tocstop -->

## `@mixin font-size`

The font-size property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"font-size"`         |
| `$font-sizes`  | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of font sizes                           | `config.$font-sizes`  |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include font-size($prefix: fsize, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/font-size>

### Since

+ **0.1.0**

## `@mixin text-align`

The text-align property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"text-align"`        |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include text-align($prefix: talign, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/text-align>

### Since

+ **0.1.0**

## `@mixin text-overflow`

The text-overflow property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"text-overflow"`     |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include text-overflow($prefix: toverflow, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow>

### Since

+ **0.1.0**

## `@mixin text-transform`

The text-transform property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"text-transform"`    |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include text-transform($prefix: ttransform, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform>

### Since

+ **0.1.0**

## `@mixin valign`

The vertical-align property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"valign"`            |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include valign($prefix: va, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align>

### Since

+ **0.1.0**

## `@mixin white-space`

The white-space property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"white-space"`       |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include white-space($prefix: white-space, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/white-space>

### Since

+ **0.1.0**

## `@mixin word-break`

The word-break property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"word-break"`        |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include word-break($prefix: wbreak, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/word-break>

### Since

+ **0.1.0**

