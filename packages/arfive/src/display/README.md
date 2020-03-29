# Display

Display utilities all revolve around displaying elements around the page, such as showing and hiding, etc. Use these to force a element to show or hide accordingly.

## Table of Contents

<!-- toc -->

* [`@mixin display`](#mixin-display)
* [`@mixin hidden`](#mixin-hidden)
* [`@mixin visibility`](#mixin-visibility)

<!-- tocstop -->

## `@mixin display`

The display property can show, hide and change the context

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"display"`           |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include display($prefix: d, $breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/display>

### Since

+ **0.1.0**

## `@mixin hidden`

A shortcut to hide/display:none things

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                             | Description                                   | Default               |
| :------------- | :--------------------------------------------------------------- | :-------------------------------------------- | :-------------------- |
| `$prefix`      | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS class name that will prefix all helpers | `"hidden"`            |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints                     | `config.$breakpoints` |

### Examples

```scss
@include hidden($prefix: hide, $breakpoints: ("sm": 480px));
```

### Since

+ **0.1.0**

## `@mixin visibility`

The visibility property can show, hide and change the context

+ **Group:** General
+ **Access:** public

### Parameters

| Name           | Type                                                       | Description               | Default               |
| :------------- | :--------------------------------------------------------- | :------------------------ | :-------------------- |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)** | a map of grid breakpoints | `config.$breakpoints` |

### Examples

```scss
@include visibility($breakpoints: ("sm": 480px));
```

### Links

+ <https://developer.mozilla.org/en-US/docs/Web/CSS/visibility>

### Since

+ **0.1.0**

