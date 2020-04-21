# (S)CSS Functions

<details>
	<summary><strong>Table of Contents</strong> (click to expand)</summary>

* [best-contrast](#best-contrast)
* [check-contrast](#check-contrast)
* [fix-color](#fix-color)
* [fix-contrast](#fix-contrast)
* [get-contrast-ratio](#get-contrast-ratio)
* [force-rgb](#force-rgb)
* [force-rgba](#force-rgba)
* [luminance](#luminance)
* [scale-light](#scale-light)
* [scale-luminance](#scale-luminance)
* [shade](#shade)
* [srgb](#srgb)
* [tint](#tint)
* [xyz](#xyz)
* [flat](#flat)
* [average](#average)
* [deg45](#deg45)
* [circle-angle](#circle-angle)
* [circle-normal](#circle-normal)
* [exp](#exp)
* [fact](#fact)
* [frexp](#frexp)
* [ldexp](#ldexp)
* [rad](#rad)
* [next](#next)
* [min-width](#min-width)
* [max-width](#max-width)
* [map-deep-get](#map-deep-get)
* [in-bounds](#in-bounds)
* [is-nan](#is-nan)
* [valid-quantity](#valid-quantity)
* [opposite-direction](#opposite-direction)
* [str-replace-batch](#str-replace-batch)
* [str-replace](#str-replace)
* [strip-unit](#strip-unit)
* [to-length](#to-length)
* [to-number](#to-number)

</details>

## best-contrast

Get the best contrasted color when compared against two colors

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name      | Type                                                                                                                           | Description                                                                                                                                                       | Default     |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| `$color`  | [`Color`](https://sass-lang.com/documentation/values/colors)                                                                   | Color to be modified                                                                                                                                              | -           |
| `$color1` | [`Color`](https://sass-lang.com/documentation/values/colors)                                                                   | 1st color to test the contrast against                                                                                                                            | -           |
| `$color2` | [`Color`](https://sass-lang.com/documentation/values/colors)                                                                   | 2nd color to test the contrast against                                                                                                                            | -           |
| `$ratio1` | [`String`](https://sass-lang.com/documentation/values/strings), [`Number`](https://sass-lang.com/documentation/values/numbers) | minimum ratio to test against. Accepted values for this ratio argument are AA and AAALG (4.5:1), AALG (3:1) and AAA (7:1) or a number between 1 and 21.           | `"AA"`      |
| `$ratio2` | [`String`](https://sass-lang.com/documentation/values/strings), [`Number`](https://sass-lang.com/documentation/values/numbers) | a second minimum ration to test against. Accepted values for this ratio argument are AA and AAALG (4.5:1), AALG (3:1) and AAA (7:1) or a number between 1 and 21. | `"$ratio1"` |

### Returns

[`Color`](https://sass-lang.com/documentation/values/colors) - Updated color

### Throws

Warning if color fails to contrast with `$color1` and/or `$color2`

### Examples

```scss
// using recommended ratio for links
best-contrast(blue, white, black, 4.5, 3)
// #4d4dff

// usage
.image-caption a {
  color: best-contrast(blue, gray, white);
}
```

### Author(s)

* Giana Blantin

### Read More

* [18th Technique for WCAG 2.0: Contrast Test Procedure](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G18#G18-procedure)

## check-contrast

Checks if two colors pass minimum contrast requirements

* **Group**: General
* **Access**: public
* **Since**: 1.12.0

### Parameters

| Name            | Type                                                                                                                           | Description                                                                                                                                             | Default   |
| :-------------- | :----------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------- |
| `$color1`       | [`Color`](https://sass-lang.com/documentation/values/colors)                                                                   | 1st color to test the contrast against                                                                                                                  | -         |
| `$color2`       | [`Color`](https://sass-lang.com/documentation/values/colors)                                                                   | 2nd color to test the contrast against                                                                                                                  | -         |
| `$min-ratio`    | [`String`](https://sass-lang.com/documentation/values/strings), [`Number`](https://sass-lang.com/documentation/values/numbers) | minimum ratio to test against. Accepted values for this ratio argument are AA and AAALG (4.5:1), AALG (3:1) and AAA (7:1) or a number between 1 and 21. | `"AA"`    |
| `$return-ratio` | [`Boolean`](https://sass-lang.com/documentation/values/booleans)                                                               | option to return ratio instead of true/false                                                                                                            | `"false"` |

### Returns

[`Number`](https://sass-lang.com/documentation/values/numbers), [`Boolean`](https://sass-lang.com/documentation/values/booleans) - A ratio or boolean if the colors meet the min-ratio

### Examples

```scss
// true/false & using a number as `$min-ratio`
check-contrast(#2aaabf, #2b2f31, 3)
// true

// ratio & using a keyword as `$min-ratio`
check-contrast(#ffbb9b, #91966d, AAALG, true)
// 1.8908

// if contrast between blue & white passes, use gray, otherwise use #fff
.image-caption {
  color: if( check-contrast(blue, white, AAA), gray, #fff );
}
```

### Author(s)

* Giana Blantin

### Read More

* <https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G18#G18-procedure>

## fix-color

Tries to fix contrast by adjusting $color1

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name          | Type                                                                                                                           | Description                                                                                                                                             | Default |
| :------------ | :----------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ | :------ |
| `$color1`     | [`Color`](https://sass-lang.com/documentation/values/colors)                                                                   | 1st color to test the contrast against                                                                                                                  | -       |
| `$color2`     | [`Color`](https://sass-lang.com/documentation/values/colors)                                                                   | 2nd color to test the contrast against                                                                                                                  | -       |
| `$min-ratio`  | [`String`](https://sass-lang.com/documentation/values/strings), [`Number`](https://sass-lang.com/documentation/values/numbers) | minimum ratio to test against. Accepted values for this ratio argument are AA and AAALG (4.5:1), AALG (3:1) and AAA (7:1) or a number between 1 and 21. | `"AA"`  |
| `$iterations` | [`Number`](https://sass-lang.com/documentation/values/numbers)                                                                 | number of iterations to figure out contrast                                                                                                             | `"5"`   |

### Returns

[`Color`](https://sass-lang.com/documentation/values/colors) - a modified color

### Examples

```scss
// using a number as `$min-ratio`
fix-color(#00bdd1, #005da3, 3.75)
// #00d4ea

// using a keyword as `$min-ratio`
fix-color(#3f464a, #678d7e, AAA)
// #000

// usage
.image-caption {
  color: fix-color(blue, gray);
}
```

### Author(s)

* Giana Blantin

### Read More

* <https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G18#G18-procedure>

## fix-contrast

Tries to fix contrast of both colors by weighted balance (0–100).  0 = don't change first color, change second color; 100 = change first color, don't change second color

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name         | Type                                                                                                                           | Description                                                                                                                                             | Default |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ | :------ |
| `$color1`    | [`Color`](https://sass-lang.com/documentation/values/colors)                                                                   | 1st color to test the contrast against                                                                                                                  | -       |
| `$color2`    | [`Color`](https://sass-lang.com/documentation/values/colors)                                                                   | 2nd color to test the contrast against                                                                                                                  | -       |
| `$min-ratio` | [`String`](https://sass-lang.com/documentation/values/strings), [`Number`](https://sass-lang.com/documentation/values/numbers) | minimum ratio to test against. Accepted values for this ratio argument are AA and AAALG (4.5:1), AALG (3:1) and AAA (7:1) or a number between 1 and 21. | `"AA"`  |
| `$balance`   | [`Number`](https://sass-lang.com/documentation/values/numbers)                                                                 | a number that lets you control how the colors are scaled to satisfy the contrast requirements                                                           | `"50"`  |

### Returns

[`List`](https://sass-lang.com/documentation/values/lists) - a list with both colors, use nth($result, 1) and nth($result, 2) to get colors

### Throws

Warning Your settings didn't work. Modifying first color or second color in an attempt to fix.

### Examples

```scss
// favoring $color1 change over $color2
fix-contrast(#aaf901, #bbffc8, 6, 70%)
// #460, #cfffd9

// splitting the difference between both colors equally
fix-contrast(#e5eae1, #9dffff, 3)
// #8b9089, #ceffff

// usage
.image-caption {
   $colors: fix-contrast(gray, blue, 5, 60%);
   background: nth($colors, 2);
   color: nth($colors, 1);
}
```

### Author(s)

* Giana Blantin

### Read More

* <https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G18#G18-procedure>

## get-contrast-ratio

Get a contrast ratio from either a number or keyword

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name     | Type                                                                                                                           | Description                                                                | Default |
| :------- | :----------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------- | :------ |
| `$ratio` | [`String`](https://sass-lang.com/documentation/values/strings), [`Number`](https://sass-lang.com/documentation/values/numbers) | a number ratio or keyword specifying a type of WCAG contrast specification | -       |

### Returns

[`Number`](https://sass-lang.com/documentation/values/numbers) - a contrast ratio

## force-rgb

Forces RGB channel values to a rgb() string

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name | Type                                                           | Description     | Default |
| :--- | :------------------------------------------------------------- | :-------------- | :------ |
| `$r` | [`Number`](https://sass-lang.com/documentation/values/numbers) | R channel value | -       |
| `$g` | [`Number`](https://sass-lang.com/documentation/values/numbers) | G channel value | -       |
| `$b` | [`Number`](https://sass-lang.com/documentation/values/numbers) | B channel value | -       |

### Returns

[`String`](https://sass-lang.com/documentation/values/strings) - RGB string

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

### Author(s)

* Giana Blantin

## force-rgba

Forces RGBA channel values to a rgba() string

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name | Type                                                           | Description     | Default |
| :--- | :------------------------------------------------------------- | :-------------- | :------ |
| `$r` | [`Number`](https://sass-lang.com/documentation/values/numbers) | R channel value | -       |
| `$g` | [`Number`](https://sass-lang.com/documentation/values/numbers) | G channel value | -       |
| `$b` | [`Number`](https://sass-lang.com/documentation/values/numbers) | B channel value | -       |
| `$a` | [`Number`](https://sass-lang.com/documentation/values/numbers) | A channel value | -       |

### Returns

[`String`](https://sass-lang.com/documentation/values/strings) - RGBA string

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

### Author(s)

* Giana Blantin

## luminance

Get the luminance of color

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name     | Type                                                         | Description          | Default |
| :------- | :----------------------------------------------------------- | :------------------- | :------ |
| `$color` | [`Color`](https://sass-lang.com/documentation/values/colors) | Color to be modified | -       |

### Returns

[`Number`](https://sass-lang.com/documentation/values/numbers) - relative luminance of color

### Author(s)

* Giana Blantin

## scale-light

Scales lightness by .1% while checking contrast ratio.

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name          | Type                                                                                                                           | Description                                                                                                                                             | Default |
| :------------ | :----------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ | :------ |
| `$color`      | [`Color`](https://sass-lang.com/documentation/values/colors)                                                                   | Color to be modified                                                                                                                                    | -       |
| `$color`      | [`Color`](https://sass-lang.com/documentation/values/colors)                                                                   | Color to be tested against                                                                                                                              | -       |
| `$min-ratio`  | [`String`](https://sass-lang.com/documentation/values/strings), [`Number`](https://sass-lang.com/documentation/values/numbers) | minimum ratio to test against. Accepted values for this ratio argument are AA and AAALG (4.5:1), AALG (3:1) and AAA (7:1) or a number between 1 and 21. | -       |
| `$operation`  | [`Function`](https://sass-lang.com/documentation/values/functions)                                                             | darken() or lighten()                                                                                                                                   | -       |
| `$iterations` | [`Number`](https://sass-lang.com/documentation/values/numbers)                                                                 | Number of iterations to perform specified operation                                                                                                     | -       |

### Returns

[`Color`](https://sass-lang.com/documentation/values/colors) - modified color

### Author(s)

* Giana Blantin

### Read More

* <https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G18#G18-procedure>

## scale-luminance

* [ ] **[TODO]** DRY out the checks on line 36-49

Changes a color to have the required luminance

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name                | Type                                                           | Description              | Default |
| :------------------ | :------------------------------------------------------------- | :----------------------- | :------ |
| `$color`            | [`Color`](https://sass-lang.com/documentation/values/colors)   | Color to be modified     | -       |
| `$target-luminance` | [`Number`](https://sass-lang.com/documentation/values/numbers) | a number between 0 and 1 | -       |

### Returns

[`Color`](https://sass-lang.com/documentation/values/colors) - modified color

### Author(s)

* Giana Blantin

## shade

Darkens a color by mixing it with black

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name       | Type                                                         | Description                              | Default |
| :--------- | :----------------------------------------------------------- | :--------------------------------------- | :------ |
| `$color`   | [`Color`](https://sass-lang.com/documentation/values/colors) | a color                                  | -       |
| `$percent` | Percentage                                                   | a percentage to mix the color with black | -       |

### Returns

[`Color`](https://sass-lang.com/documentation/values/colors) - modified color

### Examples

```scss
a:hover {
  background-color: shade(blue, 50%);
}
```

### Author(s)

* Newton Koumantzelis

## srgb

Reverse of xyz()

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name       | Type                                                           | Description  | Default |
| :--------- | :------------------------------------------------------------- | :----------- | :------ |
| `$channel` | [`Number`](https://sass-lang.com/documentation/values/numbers) | an xyz value | -       |

### Returns

[`Number`](https://sass-lang.com/documentation/values/numbers) - rgb channel value

### Author(s)

* Giana Blantin

### Read More

* <https://en.wikipedia.org/wiki/SRGB>

## tint

Lightens a color by mixing it with white

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name       | Type                                                         | Description                              | Default |
| :--------- | :----------------------------------------------------------- | :--------------------------------------- | :------ |
| `$color`   | [`Color`](https://sass-lang.com/documentation/values/colors) | a color                                  | -       |
| `$percent` | Percentage                                                   | a percentage to mix the color with white | -       |

### Returns

[`Color`](https://sass-lang.com/documentation/values/colors) - modified color

### Examples

```scss
a:active {
  background-color: tint(blue, 20%);
}
```

### Author(s)

* Newton Koumantzelis

## xyz

Returns an RGB channel processed as XYZ

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name       | Type                                                           | Description          | Default |
| :--------- | :------------------------------------------------------------- | :------------------- | :------ |
| `$channel` | [`Number`](https://sass-lang.com/documentation/values/numbers) | an RGB channel value | -       |

### Returns

[`Number`](https://sass-lang.com/documentation/values/numbers) - xyz value

### Author(s)

* Giana Blantin

### Read More

* <https://en.wikipedia.org/wiki/SRGB>

## flat

Joins more than 1 list into a flattened list

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name     | Type                                                       | Description                    | Default |
| :------- | :--------------------------------------------------------- | :----------------------------- | :------ |
| `$lists` | [`List`](https://sass-lang.com/documentation/values/lists) | any number of lists to combine | -       |

### Returns

[`List`](https://sass-lang.com/documentation/values/lists) - a flattened list

### Examples

```scss
$somecollection: flat($list1, $list2, ...);
```

## average

Get the average of numbers provided a list of numbers

* **Group**: General
* **Access**: public

### Parameters

| Name    | Type                                                       | Description                      | Default |
| :------ | :--------------------------------------------------------- | :------------------------------- | :------ |
| `$nums` | [`List`](https://sass-lang.com/documentation/values/lists) | a list of numbers to average out | -       |

### Returns

[`Number`](https://sass-lang.com/documentation/values/numbers) - the average of all values

### Examples

```scss
average(10, 60, 20);
// 30
```

## deg45

Gives us 45 degrees of a circle

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Returns

[`Number`](https://sass-lang.com/documentation/values/numbers) - 0.7853981634

### Dependents

* **circle-angle** Gets the radius of a circle
* **circle-normal** Gets the angle of a circle

## circle-angle

Gets the radius of a circle

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name    | Type                                                           | Description       | Default |
| :------ | :------------------------------------------------------------- | :---------------- | :------ |
| `$size` | [`Number`](https://sass-lang.com/documentation/values/numbers) | the expected size | -       |

### Returns

[`Number`](https://sass-lang.com/documentation/values/numbers) - an offset used for box-shadow

### Dependencies

* **[deg45](#deg45)**

## circle-normal

Gets the angle of a circle

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name    | Type                                                           | Description       | Default |
| :------ | :------------------------------------------------------------- | :---------------- | :------ |
| `$size` | [`Number`](https://sass-lang.com/documentation/values/numbers) | the expected size | -       |

### Returns

[`Number`](https://sass-lang.com/documentation/values/numbers) - an offset used for box-shadow

### Dependencies

* **[deg45](#deg45)**

## exp

Returns E^x, where x is the argument, and E is Euler's constant, the base of the natural logarithms.

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name | Type                                                           | Description                        | Default |
| :--- | :------------------------------------------------------------- | :--------------------------------- | :------ |
| `$x` | [`Number`](https://sass-lang.com/documentation/values/numbers) | the number to modify exponentially | -       |

### Returns

[`Number`](https://sass-lang.com/documentation/values/numbers) - a modified number

### Examples

```scss
exp(1)  // 2.71828
exp(-1) // 0.36788
```

### Author(s)

* Takeru Suzuki

## fact

Returns the factorial of a non-negative integer.

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name | Type                                                           | Description             | Default |
| :--- | :------------------------------------------------------------- | :---------------------- | :------ |
| `$x` | [`Number`](https://sass-lang.com/documentation/values/numbers) | A non-negative integer. | -       |

### Returns

[`Number`](https://sass-lang.com/documentation/values/numbers) - modified number

### Throws

**@warn** Argument for `fact()` must be a positive integer

### Examples

```scss
fact(0) // 1
fact(8) // 40320
```

### Author(s)

* Takeru Suzuki

## frexp

Returns a two-element list containing the normalized fraction and exponent of number.

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name | Type                                                           | Description | Default |
| :--- | :------------------------------------------------------------- | :---------- | :------ |
| `$x` | [`Number`](https://sass-lang.com/documentation/values/numbers) | -           | -       |

### Returns

[`List`](https://sass-lang.com/documentation/values/lists) - fraction, exponent

### Author(s)

* Takeru Suzuki

## ldexp

Returns $x \* 2^$exp

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name   | Type                                                           | Description | Default |
| :----- | :------------------------------------------------------------- | :---------- | :------ |
| `$x`   | [`Number`](https://sass-lang.com/documentation/values/numbers) | -           | -       |
| `$exp` | [`Number`](https://sass-lang.com/documentation/values/numbers) | -           | -       |

### Returns

[`Number`](https://sass-lang.com/documentation/values/numbers) - modified number

### Author(s)

* Takeru Suzuki

## rad

Returns a radian when given a degree

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name     | Type                                                           | Description | Default |
| :------- | :------------------------------------------------------------- | :---------- | :------ |
| `$angle` | [`Number`](https://sass-lang.com/documentation/values/numbers) | -           | -       |

### Returns

[`Number`](https://sass-lang.com/documentation/values/numbers) - a radian

### Examples

```scss
rad(45deg) // 0.78539816
```

### Author(s)

* Daniel Perez Alvarez

## next

Name of the next breakpoint, or null for the last breakpoint.
Breakpoints are defined as a map of (name: minimum width), order from small to large:
   (xs: 0, sm: 34rem, md: 45rem)

The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name                | Type                                                           | Description                                                      | Default                  |
| :------------------ | :------------------------------------------------------------- | :--------------------------------------------------------------- | :----------------------- |
| `$name`             | [`String`](https://sass-lang.com/documentation/values/strings) | the name for the breakpoint                                      | -                        |
| `$breakpoints`      | [`Map`](https://sass-lang.com/documentation/values/maps)       | a map of grid breakpoints                                        | -                        |
| `$breakpoint-names` | [`List`](https://sass-lang.com/documentation/values/lists)     | a list of names for breakpoints when passed a map of breakpoints | `map-keys($breakpoints)` |

### Returns

[`String`](https://sass-lang.com/documentation/values/strings) - the name of next breakpoint when passed a map of breakpoints

### Throws

breakpoint `#{$name}` not found in `#{$breakpoints}`

### Examples

```scss
@include breakpoint-next(sm)
// md
@include breakpoint-next(sm, $breakpoints: (xs: 0, sm: 34rem, md: 45rem))
// md
@include breakpoint-next(sm, $breakpoint-names: (xs sm md))
// md
```

### Dependents

* **max-width** Maximum breakpoint width.
  The maximum value is calculated as the minimum of the next one less 0.02px
  to work around the limitations of `min-` and `max-` prefixes and viewports with fractional widths.
  See <https://www.w3.org/TR/mediaqueries-4/#mq-min-max>
  Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
  See <https://bugs.webkit.org/show_bug.cgi?id=178261>

### Author(s)

* Mark Otto

## min-width

Minimum breakpoint width

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name           | Type                                                           | Description                 | Default |
| :------------- | :------------------------------------------------------------- | :-------------------------- | :------ |
| `$name`        | [`String`](https://sass-lang.com/documentation/values/strings) | the name for the breakpoint | -       |
| `$breakpoints` | [`Map`](https://sass-lang.com/documentation/values/maps)       | a map of grid breakpoints   | -       |

### Returns

[`Number`](https://sass-lang.com/documentation/values/numbers), [`Null`](https://sass-lang.com/documentation/values/null) - the minimum value is calculated as the minimum of the next one or `null` for the smallest (first) breakpoint

### Examples

```scss
@include breakpoint-min(sm, (xs: 0, sm: 34rem, md: 45rem))
// 34rem
```

### Dependents

* **max-width** Maximum breakpoint width.
  The maximum value is calculated as the minimum of the next one less 0.02px
  to work around the limitations of `min-` and `max-` prefixes and viewports with fractional widths.
  See <https://www.w3.org/TR/mediaqueries-4/#mq-min-max>
  Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
  See <https://bugs.webkit.org/show_bug.cgi?id=178261>

### Author(s)

* Mark Otto

## max-width

Maximum breakpoint width.
The maximum value is calculated as the minimum of the next one less 0.02px
to work around the limitations of `min-` and `max-` prefixes and viewports with fractional widths.
See <https://www.w3.org/TR/mediaqueries-4/#mq-min-max>
Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
See <https://bugs.webkit.org/show_bug.cgi?id=178261>

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name           | Type                                                           | Description                 | Default |
| :------------- | :------------------------------------------------------------- | :-------------------------- | :------ |
| `$name`        | [`String`](https://sass-lang.com/documentation/values/strings) | the name for the breakpoint | -       |
| `$breakpoints` | [`Map`](https://sass-lang.com/documentation/values/maps)       | a map of grid breakpoints   | -       |

### Returns

[`Number`](https://sass-lang.com/documentation/values/numbers), [`Null`](https://sass-lang.com/documentation/values/null) - the maximum value is calculated as the minimum of the next one less 0.1 or `null` for the largest (last) breakpoint.

### Examples

```scss
@include breakpoint-max(sm, (xs: 0, sm: 34rem, md: 45rem))
// 44.9rem
```

### Dependencies

* **[next](#next)**
* **[min-width](#min-width)**

### Author(s)

* Mark Otto

{ type: 'function', name: 'map-deep-get' }
{ type: 'function', name: 'map-deep-get' }

## map-deep-get

Searches through maps and grabs the key when it finds the map specified

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name    | Type                                                     | Description           | Default |
| :------ | :------------------------------------------------------- | :-------------------- | :------ |
| `$map`  | [`Map`](https://sass-lang.com/documentation/values/maps) | a structured map      | -       |
| `$keys` | Arglist                                                  | the key value to grab | -       |

### Returns

Desired value from the map(s)

### Author(s)

* Hugo Giraudel

## in-bounds

Checks if value is within specified bounds, inclusive

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name     | Type                                                           | Description       | Default |
| :------- | :------------------------------------------------------------- | :---------------- | :------ |
| `$value` | [`Number`](https://sass-lang.com/documentation/values/numbers) | a number to check | -       |
| `$min`   | [`Number`](https://sass-lang.com/documentation/values/numbers) | minimum number    | `"0"`   |
| `$max`   | [`Number`](https://sass-lang.com/documentation/values/numbers) | maximum number    | `"1"`   |

### Returns

[`Boolean`](https://sass-lang.com/documentation/values/booleans) - if the number is within range

### Examples

```scss
// outside the bounds
in-bounds(-1);
// false

//nside the bounds
in-bounds(1);
// true
```

### Author(s)

* Takeru Suzuki

## is-nan

Check if value is not a number, eg, NaN or Infinity

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name     | Type                                                           | Description       | Default |
| :------- | :------------------------------------------------------------- | :---------------- | :------ |
| `$value` | [`Number`](https://sass-lang.com/documentation/values/numbers) | a number to check | -       |

### Returns

[`Boolean`](https://sass-lang.com/documentation/values/booleans) - true if not a number, false if it is a number

### Examples

```scss
// not a number
is-nan('true');
// true

// is a number
is-nan(1);
// false
```

### Author(s)

* Takeru Suzuki

## valid-quantity

Creates valid-quantity

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name        | Type                                                           | Description    | Default |
| :---------- | :------------------------------------------------------------- | :------------- | :------ |
| `$quantity` | [`Number`](https://sass-lang.com/documentation/values/numbers) | a valid Number | -       |

### Returns

[`Boolean`](https://sass-lang.com/documentation/values/booleans)

### Examples

```scss
@if valid-quanity(4) {
  color: blue;
}
```

### Author(s)

* Adam Giese

## opposite-direction

Returns the opposite direction of each direction in a list

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name          | Type                                                       | Description                | Default |
| :------------ | :--------------------------------------------------------- | :------------------------- | :------ |
| `$directions` | [`List`](https://sass-lang.com/documentation/values/lists) | List of initial directions | -       |

### Returns

[`List`](https://sass-lang.com/documentation/values/lists) - List of opposite directions

### Throws

**@warn** No opposite direction can be found

### Examples

```scss
.triange-left {
  border-#{opposite-direction(left)}: 1.5em solid gray;
}
```

### Author(s)

* Hugo Giraudel

## str-replace-batch

Replaces a batch of substrings (needles) in a string (haystack)
with a single replacement string.

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name           | Type                                                                                                                       | Description                                   | Default |
| :------------- | :------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------- | :------ |
| `$haystack`    | [`String`](https://sass-lang.com/documentation/values/strings)                                                             | string to perform search and replacement on   | -       |
| `$needles`     | [`List`](https://sass-lang.com/documentation/values/lists), [`String`](https://sass-lang.com/documentation/values/strings) | string or list of strings to replace globally | -       |
| `$replacement` | [`String`](https://sass-lang.com/documentation/values/strings)                                                             | ('') - replacement string to replace needles  | -       |

### Returns

[`String`](https://sass-lang.com/documentation/values/strings) - replaced string

### Author(s)

* David Khourshid

## str-replace

Replace `$search` with `$replace` in `$string`

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name       | Type                                                           | Description          | Default |
| :--------- | :------------------------------------------------------------- | :------------------- | :------ |
| `$string`  | [`String`](https://sass-lang.com/documentation/values/strings) | Initial string       | -       |
| `$search`  | [`String`](https://sass-lang.com/documentation/values/strings) | Substring to replace | -       |
| `$replace` | [`String`](https://sass-lang.com/documentation/values/strings) | New value            | `""`    |

### Returns

[`String`](https://sass-lang.com/documentation/values/strings) - Updated string

### Examples

```scss
.lato-thin {
  font-family: str-replace('lato-thin', '-', ' ');
}
```

### Author(s)

* Hugo Giraudel

## strip-unit

Strip unit from a number

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name      | Type | Description                   | Default |
| :-------- | :--- | :---------------------------- | :------ |
| `$number` | Unit | any valid CSS value with unit | -       |

### Returns

[`Number`](https://sass-lang.com/documentation/values/numbers) - modified number

### Examples

```scss
strip-unit(2px) // 2
strip-unit(5em) // 5
```

### Author(s)

* Hugo Giraudel

## to-length

Add `$unit` to `$value`

* **Group**: General
* **Access**: public

### Parameters

| Name     | Type                                                           | Description                       | Default |
| :------- | :------------------------------------------------------------- | :-------------------------------- | :------ |
| `$value` | [`Number`](https://sass-lang.com/documentation/values/numbers) | Value to add unit to              | -       |
| `$unit`  | [`String`](https://sass-lang.com/documentation/values/strings) | String representation of the unit | -       |

### Returns

[`Number`](https://sass-lang.com/documentation/values/numbers) - `$value` expressed in `$unit`

### Throws

Invalid unit `#{$unit}`.

### Dependents

* **to-number** Casts a string into a number

### Author(s)

* Hugo Giraudel

## to-number

Casts a string into a number

* **Group**: General
* **Access**: public

### Parameters

| Name     | Type                                                                                                                           | Description        | Default |
| :------- | :----------------------------------------------------------------------------------------------------------------------------- | :----------------- | :------ |
| `$value` | [`String`](https://sass-lang.com/documentation/values/strings), [`Number`](https://sass-lang.com/documentation/values/numbers) | Value to be parsed | -       |

### Returns

[`Number`](https://sass-lang.com/documentation/values/numbers)

### Throws

Value for `to-number` should be a number or a string.

### Dependencies

* **[to-length](#to-length)**

### Author(s)

* Hugo Giraudel
