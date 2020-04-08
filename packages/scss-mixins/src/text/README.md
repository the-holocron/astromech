# Text

These utilities all revolve around the typography, such as sizing, alignment, transformation, white space etc. Use these to force a elements text to display accordingly. All of these deal exclusively with positioning and not styling such as color or backgrounds All of these deal exclusively with positioning and not styling such as color or backgrounds.

## Table of Contents

<!-- toc -->

* [`@mixin text-color`](#mixin-text-color)

<!-- tocstop -->

## `@mixin text-color`

Creates text color variants

* **Group:** General
* **Access:** public

### Parameters

| Name      | Type                                                             | Description                                        | Default |
| :-------- | :--------------------------------------------------------------- | :------------------------------------------------- | :------ |
| `$parent` | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS selector; should not include an HTML element | -       |
| `$color`  | **[Color](https://sass-lang.com/documentation/values/colors)**   | the text color                                     | -       |

### Examples

```scss
.example {
  @include text-color('.text-test', black, white);
}
```

### Since

* **0.1.0**
