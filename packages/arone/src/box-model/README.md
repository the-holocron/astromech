# Box Model

Box model utilities all revolve around the box-model properties, such as width, height, overflow, margin, padding, etc. Use these to force a element to size accordingly.

## Table of Contents

<!-- toc -->

* [`@mixin background-color`](#mixin-background-color)
* [`@mixin border-radius`](#mixin-border-radius)
* [`@mixin border-top-radius`](#mixin-border-top-radius)
* [`@mixin border-right-radius`](#mixin-border-right-radius)
* [`@mixin border-bottom-radius`](#mixin-border-bottom-radius)
* [`@mixin border-left-radius`](#mixin-border-left-radius)
* [`@mixin border`](#mixin-border)

<!-- tocstop -->

## `@mixin background-color`

Creates background color variants

+ **Group:** General
+ **Access:** public

### Parameters

| Name         | Type                                                             | Description                                                     | Default              |
| :----------- | :--------------------------------------------------------------- | :-------------------------------------------------------------- | :------------------- |
| `$parent`    | **[String](https://sass-lang.com/documentation/values/strings)** | a CSS selector; should not include an HTML element              | -                    |
| `$bgcolor`   | **[Color](https://sass-lang.com/documentation/values/colors)**   | the background color; will check the contrast with the $color   | -                    |
| `$color`     | **[Color](https://sass-lang.com/documentation/values/colors)**   | the text color                                                  | -                    |
| `$alt-color` | **[Color](https://sass-lang.com/documentation/values/colors)**   | a fallback color if for if the $color provided fails A11Y check | `rgb(255, 255, 255)` |

### Examples

```scss
.example {
  @include bg-color-variant('.bg-test', black, white);
}
```

### Since

+ **0.1.0**

## `@mixin border-radius`

Creates border-radius

+ **Group:** General
+ **Access:** public

### Parameters

| Name      | Type                                                             | Description                                             | Default   |
| :-------- | :--------------------------------------------------------------- | :------------------------------------------------------ | :-------- |
| `$radius` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a valid CSS unit to create a border-radius on all sides | `.125rem` |

### Examples

```scss
.example {
  @include border-radius();
}
```

### Since

+ **0.1.0**

### Authors

+ Mark Otto

## `@mixin border-top-radius`

Creates border-top-radius

+ **Group:** General
+ **Access:** public

### Parameters

| Name      | Type                                                             | Description                                           | Default |
| :-------- | :--------------------------------------------------------------- | :---------------------------------------------------- | :------ |
| `$radius` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a valid CSS unit to create a border-radius on the top | -       |

### Examples

```scss
.example {
  @include border-top-radius(2px);
}
```

### Since

+ **0.1.0**

### Authors

+ Mark Otto

## `@mixin border-right-radius`

Creates border-right-radius

+ **Group:** General
+ **Access:** public

### Parameters

| Name      | Type                                                             | Description                                             | Default |
| :-------- | :--------------------------------------------------------------- | :------------------------------------------------------ | :------ |
| `$radius` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a valid CSS unit to create a border-radius on the right | -       |

### Examples

```scss
.example {
  @include border-right-radius(2px);
}
```

### Since

+ **0.1.0**

### Authors

+ Mark Otto

## `@mixin border-bottom-radius`

Creates border-bottom-radius

+ **Group:** General
+ **Access:** public

### Parameters

| Name      | Type                                                             | Description                                              | Default |
| :-------- | :--------------------------------------------------------------- | :------------------------------------------------------- | :------ |
| `$radius` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a valid CSS unit to create a border-radius on the bottom | -       |

### Examples

```scss
.example {
  @include border-bottom-radius(2px);
}
```

### Since

+ **0.1.0**

### Authors

+ Mark Otto

## `@mixin border-left-radius`

Creates border-left-radius

+ **Group:** General
+ **Access:** public

### Parameters

| Name      | Type                                                             | Description                                            | Default |
| :-------- | :--------------------------------------------------------------- | :----------------------------------------------------- | :------ |
| `$radius` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a valid CSS unit to create a border-radius on the left | -       |

### Examples

```scss
.example {
  @include border-left-radius(2px);
}
```

### Since

+ **0.1.0**

### Authors

+ Mark Otto

## `@mixin border`

Creates border variants

+ **Group:** General
+ **Access:** public

### Parameters

| Name         | Type                                                             | Description                                                                            | Default |
| :----------- | :--------------------------------------------------------------- | :------------------------------------------------------------------------------------- | :------ |
| `$direction` | **[String](https://sass-lang.com/documentation/values/strings)** | either bottom, left, top, or right; if you don't provide then it defaults to all sides | -       |
| `$color`     | **[Color](https://sass-lang.com/documentation/values/colors)**   | a valid CSS color                                                                      | -       |
| `$style`     | **[String](https://sass-lang.com/documentation/values/strings)** | a valid border style                                                                   | -       |
| `$width`     | **[Number](https://sass-lang.com/documentation/values/numbers)** | a valid number                                                                         | -       |

### Examples

```scss
.example {
  @include border(right, red, solid, 2px);
}
```

### Since

+ **0.1.0**

