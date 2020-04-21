# Color

A set of functions that work with, on and/or manipulate colors.

## Table of Contents

<!-- toc -->

* [`@function force-rgb`](#function-force-rgb)
* [`@function force-rgba`](#function-force-rgba)
* [`@function luminance`](#function-luminance)
* [`@function scale-light`](#function-scale-light)
* [`@function scale-luminance`](#function-scale-luminance)
* [`@function shade`](#function-shade)
* [`@function srgb`](#function-srgb)
* [`@function tint`](#function-tint)
* [`@function xyz`](#function-xyz)

<!-- tocstop -->

## `@function force-rgb`

Forces RGB channel values to a `rgb()` string

* **Group:** General
* **Access:** public

### Parameters

| Name | Type                                                             | Description     | Default |
| :--- | :--------------------------------------------------------------- | :-------------- | :------ |
| `$r` | **[Number](https://sass-lang.com/documentation/values/numbers)** | R channel value | -       |
| `$g` | **[Number](https://sass-lang.com/documentation/values/numbers)** | G channel value | -       |
| `$b` | **[Number](https://sass-lang.com/documentation/values/numbers)** | B channel value | -       |

### Returns

**[String](https://sass-lang.com/documentation/values/strings)** - RGB string

### Examples

```scss
// using strings around rgb components
.blah {
  color: rgb('255', '255', '255');
}
// @error: `$red`: "255" is not a number for `rgb`

.blah {
  color: force-rgb('255', '255', '255');
}
// color: rgb(255, 255, 255);
```

### Since

* **0.1.0**

### Authors

* Giana Blantin

## `@function force-rgba`

Forces RGBA channel values to a `rgba()` string

* **Group:** General
* **Access:** public

### Parameters

| Name | Type                                                             | Description     | Default |
| :--- | :--------------------------------------------------------------- | :-------------- | :------ |
| `$r` | **[Number](https://sass-lang.com/documentation/values/numbers)** | R channel value | -       |
| `$g` | **[Number](https://sass-lang.com/documentation/values/numbers)** | G channel value | -       |
| `$b` | **[Number](https://sass-lang.com/documentation/values/numbers)** | B channel value | -       |
| `$a` | **[Number](https://sass-lang.com/documentation/values/numbers)** | A channel value | -       |

### Returns

**[String](https://sass-lang.com/documentation/values/strings)** - RGBA string

### Examples

```scss
// using strings around rgb components
.blah {
  color: rgba('255', '255', '255', '0.5');
}
// @error: `$red`: "255" is not a number for `rgba`

.blah {
  color: force-rgba('255', '255', '255', '0.5');
}
// color: rgba(255, 255, 255, .5);
```

### Since

* **0.1.0**

### Authors

* Giana Blantin

## `@function luminance`

Get the luminance of color

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                           | Description          | Default |
| :------- | :------------------------------------------------------------- | :------------------- | :------ |
| `$color` | **[Color](https://sass-lang.com/documentation/values/colors)** | Color to be modified | -       |

### Returns

**[Number](https://sass-lang.com/documentation/values/numbers)** - relative luminance of color

### Since

* **0.1.0**

### Authors

* Giana Blantin

## `@function scale-light`

Scales lightness by .1% while checking contrast ratio.

* **Group:** General
* **Access:** public

### Parameters

| Name          | Type                                                                                                                               | Description                                                                                                                                             | Default |
| :------------ | :--------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ | :------ |
| `$color`      | **[Color](https://sass-lang.com/documentation/values/colors)**                                                                     | Color to be modified                                                                                                                                    | -       |
| `$color`      | **[Color](https://sass-lang.com/documentation/values/colors)**                                                                     | Color to be tested against                                                                                                                              | -       |
| `$min-ratio`  | **[String](https://sass-lang.com/documentation/values/strings)**, **[Number](https://sass-lang.com/documentation/values/numbers)** | minimum ratio to test against. Accepted values for this ratio argument are AA and AAALG (4.5:1), AALG (3:1) and AAA (7:1) or a number between 1 and 21. | -       |
| `$operation`  | **[Function](https://sass-lang.com/documentation/values/functions)**                                                               | darken() or lighten()                                                                                                                                   | -       |
| `$iterations` | **[Number](https://sass-lang.com/documentation/values/numbers)**                                                                   | Number of iterations to perform specified operation                                                                                                     | -       |

### Returns

**[Color](https://sass-lang.com/documentation/values/colors)** - modified color

### Links

* <https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G18#G18-procedure>

### Since

* **0.1.0**

### Authors

* Giana Blantin

## `@function scale-luminance`

**[TODO]** DRY out the checks on line 36-49

Changes a color to have the required luminance

* **Group:** General
* **Access:** public

### Parameters

| Name                | Type                                                             | Description              | Default |
| :------------------ | :--------------------------------------------------------------- | :----------------------- | :------ |
| `$color`            | **[Color](https://sass-lang.com/documentation/values/colors)**   | Color to be modified     | -       |
| `$target-luminance` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a number between 0 and 1 | -       |

### Returns

**[Color](https://sass-lang.com/documentation/values/colors)** - modified color

### Since

* **0.1.0**

### Authors

* Giana Blantin

## `@function shade`

Darkens a color by mixing it with black

* **Group:** General
* **Access:** public

### Parameters

| Name       | Type                                                           | Description                              | Default |
| :--------- | :------------------------------------------------------------- | :--------------------------------------- | :------ |
| `$color`   | **[Color](https://sass-lang.com/documentation/values/colors)** | a color                                  | -       |
| `$percent` | Percentage                                                     | a percentage to mix the color with black | -       |

### Returns

**[Color](https://sass-lang.com/documentation/values/colors)** - modified color

### Examples

```scss
a:hover {
  background-color: shade(blue, 50%);
}
```

### Since

* **0.1.0**

### Authors

* Newton Koumantzelis

## `@function srgb`

Reverse of `xyz()`

* **Group:** General
* **Access:** public

### Parameters

| Name       | Type                                                             | Description  | Default |
| :--------- | :--------------------------------------------------------------- | :----------- | :------ |
| `$channel` | **[Number](https://sass-lang.com/documentation/values/numbers)** | an xyz value | -       |

### Returns

**[Number](https://sass-lang.com/documentation/values/numbers)** - RGB channel value

### Links

* <https://en.wikipedia.org/wiki/SRGB>

### Since

* **0.1.0**

### Authors

* Giana Blantin

## `@function tint`

Lightens a color by mixing it with white

* **Group:** General
* **Access:** public

### Parameters

| Name       | Type                                                           | Description                              | Default |
| :--------- | :------------------------------------------------------------- | :--------------------------------------- | :------ |
| `$color`   | **[Color](https://sass-lang.com/documentation/values/colors)** | a color                                  | -       |
| `$percent` | Percentage                                                     | a percentage to mix the color with white | -       |

### Returns

**[Color](https://sass-lang.com/documentation/values/colors)** - modified color

### Examples

```scss
a:active {
  background-color: tint(blue, 20%);
}
```

### Since

* **0.1.0**

### Authors

* Newton Koumantzelis

## `@function xyz`

Returns an RGB channel processed as XYZ

* **Group:** General
* **Access:** public

### Parameters

| Name       | Type                                                             | Description          | Default |
| :--------- | :--------------------------------------------------------------- | :------------------- | :------ |
| `$channel` | **[Number](https://sass-lang.com/documentation/values/numbers)** | an RGB channel value | -       |

### Returns

**[Number](https://sass-lang.com/documentation/values/numbers)** - XYZ value

### Links

* <https://en.wikipedia.org/wiki/SRGB>

### Since

* **0.1.0**

### Authors

* Giana Blantin
