# A11Y

 A set of accessibility functions. Check contrast to ensure its compliant, fix contrast, choose the best color to match a level of contrast, and more.

## Table of Contents

<!-- toc -->
* [`@function best-contrast`](#function-best-contrast)
* [`@function check-contrast`](#function-check-contrast)
* [`@function fix-color`](#function-fix-color)
* [`@function fix-contrast`](#function-fix-contrast)
* [`@function get-contrast-ratio`](#function-get-contrast-ratio)
<!-- tocstop -->

## `@function best-contrast`

Get the best contrasted color when compared against two colors

* **Group:** General
* **Access:** public

### Parameters

| Name      | Type                                                                                                                               | Description                                                                                                                                                       | Default     |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| `$color`  | **[Color](https://sass-lang.com/documentation/values/colors)**                                                                     | Color to be modified                                                                                                                                              | -           |
| `$color1` | **[Color](https://sass-lang.com/documentation/values/colors)**                                                                     | 1st color to test the contrast against                                                                                                                            | -           |
| `$color2` | **[Color](https://sass-lang.com/documentation/values/colors)**                                                                     | 2nd color to test the contrast against                                                                                                                            | -           |
| `$ratio1` | **[String](https://sass-lang.com/documentation/values/strings)**, **[Number](https://sass-lang.com/documentation/values/numbers)** | minimum ratio to test against. Accepted values for this ratio argument are AA and AAALG (4.5:1), AALG (3:1) and AAA (7:1) or a number between 1 and 21.           | `"AA"`      |
| `$ratio2` | **[String](https://sass-lang.com/documentation/values/strings)**, **[Number](https://sass-lang.com/documentation/values/numbers)** | a second minimum ration to test against. Accepted values for this ratio argument are AA and AAALG (4.5:1), AALG (3:1) and AAA (7:1) or a number between 1 and 21. | `"$ratio1"` |

### Returns

**[Color](https://sass-lang.com/documentation/values/colors)** - Updated color

### Throws

* Warning if color fails to contrast with `$color1` and/or `$color2`

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

### Links

* [18th Technique for WCAG 2.0: Contrast Test Procedure](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G18#G18-procedure)

### Since

* **0.1.0**

### Authors

* Giana Blantin

## `@function check-contrast`

Checks if two colors pass minimum contrast requirements

* **Group:** General
* **Access:** public

### Parameters

| Name            | Type                                                                                                                               | Description                                                                                                                                             | Default         |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------- |
| `$color1`       | **[Color](https://sass-lang.com/documentation/values/colors)**                                                                     | 1st color to test the contrast against                                                                                                                  | -               |
| `$color2`       | **[Color](https://sass-lang.com/documentation/values/colors)**                                                                     | 2nd color to test the contrast against                                                                                                                  | -               |
| `$min-ratio`    | **[String](https://sass-lang.com/documentation/values/strings)**, **[Number](https://sass-lang.com/documentation/values/numbers)** | minimum ratio to test against. Accepted values for this ratio argument are AA and AAALG (4.5:1), AALG (3:1) and AAA (7:1) or a number between 1 and 21. | `"AA"`          |
| `$return-ratio` | **[Boolean](https://sass-lang.com/documentation/values/booleans)**                                                                 | option to return ratio instead of true/false                                                                                                            | `"false"`       |

### Returns

**[Number](https://sass-lang.com/documentation/values/numbers)**, **[Boolean](https://sass-lang.com/documentation/values/booleans)** - A ratio or boolean if the colors meet the min-ratio

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

### Links

* <https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G18#G18-procedure>

### Since

* **1.12.0** The Sith

### Authors

* Giana Blantin

## `@function fix-color`

Tries to fix contrast by adjusting $color1

* **Group:** General
* **Access:** public

### Parameters

| Name          | Type                                                                                                                               | Description                                                                                                                                             | Default         |
| :------------ | :--------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------- |
| `$color1`     | **[Color](https://sass-lang.com/documentation/values/colors)**                                                                     | 1st color to test the contrast against                                                                                                                  | -               |
| `$color2`     | **[Color](https://sass-lang.com/documentation/values/colors)**                                                                     | 2nd color to test the contrast against                                                                                                                  | -               |
| `$min-ratio`  | **[String](https://sass-lang.com/documentation/values/strings)**, **[Number](https://sass-lang.com/documentation/values/numbers)** | minimum ratio to test against. Accepted values for this ratio argument are AA and AAALG (4.5:1), AALG (3:1) and AAA (7:1) or a number between 1 and 21. | `"AA"`          |
| `$iterations` | **[Number](https://sass-lang.com/documentation/values/numbers)**                                                                   | number of iterations to figure out contrast                                                                                                             | `"5"`           |

### Returns

**[Color](https://sass-lang.com/documentation/values/colors)** - a modified color

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

### Links

* <https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G18#G18-procedure>

### Since

* **0.1.0**

### Authors

* Giana Blantin

## `@function fix-contrast`

Tries to fix contrast of both colors by weighted balance (0–100). 0 = don't change first color, change second color. 100 = change first color, don't change second color.

* **Group:** General
* **Access:** public

### Parameters

| Name         | Type                                                                                                                               | Description                                                                                                                                             | Default |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ | :------ |
| `$color1`    | **[Color](https://sass-lang.com/documentation/values/colors)**                                                                     | 1st color to test the contrast against                                                                                                                  | -       |
| `$color2`    | **[Color](https://sass-lang.com/documentation/values/colors)**                                                                     | 2nd color to test the contrast against                                                                                                                  | -       |
| `$min-ratio` | **[String](https://sass-lang.com/documentation/values/strings)**, **[Number](https://sass-lang.com/documentation/values/numbers)** | minimum ratio to test against. Accepted values for this ratio argument are AA and AAALG (4.5:1), AALG (3:1) and AAA (7:1) or a number between 1 and 21. | `"AA"`  |
| `$balance`   | **[Number](https://sass-lang.com/documentation/values/numbers)**                                                                   | a number that lets you control how the colors are scaled to satisfy the contrast requirements                                                           | `"50"`  |

### Returns

**[List](https://sass-lang.com/documentation/values/lists)** - a list with both colors, use nth($result, 1) and nth($result, 2) to get colors

### Throws

* Warning Your settings didn't work. Modifying first color or second color in an attempt to fix.

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

### Links

* <https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G18#G18-procedure>

### Since

* **0.1.0**

### Authors

* Giana Blantin

## `@function get-contrast-ratio`

Get a contrast ratio from either a number or keyword

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                                                                                               | Description                                                                | Default |
| :------- | :--------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------- | :------ |
| `$ratio` | **[String](https://sass-lang.com/documentation/values/strings)**, **[Number](https://sass-lang.com/documentation/values/numbers)** | a number ratio or keyword specifying a type of WCAG contrast specification | -       |

### Returns

**[Number](https://sass-lang.com/documentation/values/numbers)** - a contrast ratio

### Since

* **0.1.0**
