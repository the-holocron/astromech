# Box Model

Box model utilities all revolve around the box-model properties, such as width, height, overflow, margin, padding, etc. Use these to force a element to size accordingly.

## Table of Contents

<!-- toc -->

* [`@mixin height`](#mixin-height)
* [`@mixin margin`](#mixin-margin)
* [`@mixin overflow`](#mixin-overflow)
* [`@mixin padding`](#mixin-padding)
* [`@mixin width`](#mixin-width)

<!-- tocstop -->

## `@mixin height`

The height property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"height"`            |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include height($prefix: h, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/height>

### Since

+ **0.1.0**

## `@mixin margin`

The margin property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"margin"`            |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include margin($prefix: m, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/margin>

### Since

+ **0.1.0**

## `@mixin overflow`

The overflow property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"overflow"`          |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include overflow($prefix: o, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/overflow>

### Since

+ **0.1.0**

## `@mixin padding`

The padding property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"padding"`           |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include padding($prefix: p, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/padding>

### Since

+ **0.1.0**

## `@mixin width`

The width property

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"width"`             |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include width($prefix: w, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/width>

### Since

+ **0.1.0**

