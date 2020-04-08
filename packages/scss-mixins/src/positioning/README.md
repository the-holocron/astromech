# Positioning

Positioning utilities all revolve around positioning elements around the page, such as flexbox, floats, position, etc. Use these to force a element to layout accordingly.

## Table of Contents

<!-- toc -->

* [`@mixin center`](#mixin-center)

<!-- tocstop -->

## `@mixin center`

Centers a element absolutely on any or multiple planes

* **Group:** General
* **Access:** public

### Parameters

| Name        | Type                                                             | Description                     | Default      |
| :---------- | :--------------------------------------------------------------- | :------------------------------ | :----------- |
| `$position` | **[String](https://sass-lang.com/documentation/values/strings)** | The position or plane to center | `null` |

### Examples

```scss
.example {
  @include center();
}
```

### Since

* **0.1.0**

### Authors

* Mark Otto

