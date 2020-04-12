# Variables

A set of non-theme based variables for writing (S)CSS.

<details>
	<summary><strong>Table of Contents</strong> (click to expand)</summary>
<!-- toc -->
* [$cubic-bezier](#cubic-bezier)
* [$durations](#durations)
* [$duration](#duration)
* [$border-colors](#border-colors)
* [$border-radii](#border-radii)
* [$border-radius](#border-radius)
* [$border-widths](#border-widths)
* [$border-width](#border-width)
* [$spacer](#spacer)
* [$spacing](#spacing)
* [$sizing](#sizing)
* [$sizing-prefixes](#sizing-prefixes)
* [$opacities](#opacities)
* [$font-families](#font-families)
* [$font-family](#font-family)
* [$font-sizes](#font-sizes)
* [$font-size](#font-size)
* [$font-weights](#font-weights)
* [$letter-spacings](#letter-spacings)
* [$line-heights](#line-heights)
* [$line-height](#line-height)
* [$line-height-heading](#line-height-heading)
* [$box-directions](#box-directions)
* [$breakpoints](#breakpoints)
* [$z-indices](#z-indices)
<!-- tocstop -->
</details>

## $cubic-bezier

Default cubic bezier function

+ **Group**: Animations, transitions
+ **Access**: public
+ **Type**: [`Function`](https://sass-lang.com/documentation/values/functions)
+ **Since**: 0.1.0

## $durations

Default set of animation durations

+ **Group**: Animations, transitions
+ **Access**: public
+ **Since**: 0.1.0

### Properties

| Name | Type                                                           | Description                | Default |
| :--- | :------------------------------------------------------------- | :------------------------- | :------ |
| `xs` | [`Number`](https://sass-lang.com/documentation/values/numbers) | extra short amount of time | `.125s` |
| `sm` | [`Number`](https://sass-lang.com/documentation/values/numbers) | small amount of time       | `.25s`  |
| `md` | [`Number`](https://sass-lang.com/documentation/values/numbers) | medium amount of time      | `.5s`   |
| `lg` | [`Number`](https://sass-lang.com/documentation/values/numbers) | large amount of time       | `1s`    |
| `xl` | [`Number`](https://sass-lang.com/documentation/values/numbers) | longest amount of time     | `1.5s`  |

### Dependents

+ **$duration** Default animation duration

## $duration

Default animation duration

+ **Group**: Animations, transitions
+ **Access**: public
+ **Type**: [`Number`](https://sass-lang.com/documentation/values/numbers)
+ **Since**: 0.1.0

### Dependencies

+ **[$durations](#animations--transitions-variable-durations)** - map of durations

## $border-colors

Default set of border colors

+ **Group**: Backgrounds & borders
+ **Access**: public
+ **Since**: 0.1.0

### Properties

| Name    | Type                                                         | Description                    | Default              |
| :------ | :----------------------------------------------------------- | :----------------------------- | :------------------- |
| `dark`  | [`Color`](https://sass-lang.com/documentation/values/colors) | dark border color              | `rgb(0, 0, 0)`       |
| `mid`   | [`Color`](https://sass-lang.com/documentation/values/colors) | middle contrasted border color | `rgb(128, 128, 128)` |
| `light` | [`Color`](https://sass-lang.com/documentation/values/colors) | light border color             | `rgb(255, 255, 255)` |

## $border-radii

Default set of border radii

+ **Group**: Backgrounds & borders
+ **Access**: public
+ **Since**: 0.1.0

### Properties

| Name    | Type                                                           | Description               | Default   |
| :------ | :------------------------------------------------------------- | :------------------------ | :-------- |
| `xs`    | [`Number`](https://sass-lang.com/documentation/values/numbers) | extra small border radius | `.125rem` |
| `sm`    | [`Number`](https://sass-lang.com/documentation/values/numbers) | small border radius       | `.25rem`  |
| `md`    | [`Number`](https://sass-lang.com/documentation/values/numbers) | medium border radius      | `.5rem`   |
| `lg`    | [`Number`](https://sass-lang.com/documentation/values/numbers) | large border radius       | `1rem`    |
| `xl`    | [`Number`](https://sass-lang.com/documentation/values/numbers) | extra large border radius | `2rem`    |
| `round` | [`Number`](https://sass-lang.com/documentation/values/numbers) | rounded border radius     | `100%`    |

### Dependents

+ **$border-radius** Default border radius

## $border-radius

Default border radius

+ **Group**: Backgrounds & borders
+ **Access**: public
+ **Type**: [`Number`](https://sass-lang.com/documentation/values/numbers)
+ **Since**: 0.1.0

### Dependencies

+ **[$border-radii](#backgrounds---borders-variable-border-radii)** - map of border radii

## $border-widths

Default set of border-widths

+ **Group**: Backgrounds & borders
+ **Access**: public
+ **Since**: 0.1.0

### Properties

| Name | Type                                                           | Description              | Default    |
| :--- | :------------------------------------------------------------- | :----------------------- | :--------- |
| `xs` | [`Number`](https://sass-lang.com/documentation/values/numbers) | extra small border width | `.0625rem` |
| `sm` | [`Number`](https://sass-lang.com/documentation/values/numbers) | small border width       | `.125rem`  |
| `md` | [`Number`](https://sass-lang.com/documentation/values/numbers) | medium border width      | `.1875rem` |
| `lg` | [`Number`](https://sass-lang.com/documentation/values/numbers) | large border width       | `.25rem`   |
| `xl` | [`Number`](https://sass-lang.com/documentation/values/numbers) | extra large border width | `.5rem`    |

### Dependents

+ **$border-width** Default border width

## $border-width

Default border width

+ **Group**: Backgrounds & borders
+ **Access**: public
+ **Type**: [`Number`](https://sass-lang.com/documentation/values/numbers)
+ **Since**: 0.1.0

### Dependencies

+ **[$border-widths](#backgrounds---borders-variable-border-widths)** - map of border widths

## $spacer

Base line multiplier for spacing

+ **Group**: Box model
+ **Access**: public
+ **Type**: [`Number`](https://sass-lang.com/documentation/values/numbers)
+ **Since**: 0.1.0

### Dependents

+ **$spacing** Default set of spacing

## $spacing

Default set of spacing

+ **Group**: Box model
+ **Access**: public
+ **Since**: 0.1.0

### Properties

| Name     | Type                                                           | Description                            | Default   |
| :------- | :------------------------------------------------------------- | :------------------------------------- | :-------- |
| `0`      | [`Number`](https://sass-lang.com/documentation/values/numbers) | reset the size to 0                    | `0`       |
| `eighth` | [`Number`](https://sass-lang.com/documentation/values/numbers) | 1/8th the size of the default spacer   | `.125rem` |
| `qtr`    | [`Number`](https://sass-lang.com/documentation/values/numbers) | 1/4th the size of the default spacer   | `.25rem`  |
| `half`   | [`Number`](https://sass-lang.com/documentation/values/numbers) | 1/2 the size of the default spacer     | `.5rem`   |
| `3qtr`   | [`Number`](https://sass-lang.com/documentation/values/numbers) | 3/4th the size of the default spacer   | `.75rem`  |
| `1`      | [`Number`](https://sass-lang.com/documentation/values/numbers) | the size of the default spacer         | `1rem`    |
| `2`      | [`Number`](https://sass-lang.com/documentation/values/numbers) | 2 times the size of the default spacer | `2rem`    |
| `3`      | [`Number`](https://sass-lang.com/documentation/values/numbers) | 3 times the size of the default spacer | `3rem`    |

### Dependencies

+ **[$spacer](#box-model-variable-spacer)** - multiplier for creating map

## $sizing

Default set of sizing

+ **Group**: Box model
+ **Access**: public
+ **Since**: 0.1.0

### Properties

| Name   | Type                                                           | Description                        | Default |
| :----- | :------------------------------------------------------------- | :--------------------------------- | :------ |
| `auto` | [`String`](https://sass-lang.com/documentation/values/strings) | 75% of the total containers space  | `auto`  |
| `0`    | [`Number`](https://sass-lang.com/documentation/values/numbers) | 0% of the total containers space   | `0`     |
| `25`   | [`Number`](https://sass-lang.com/documentation/values/numbers) | 25% of the total containers space  | `25%`   |
| `50`   | [`Number`](https://sass-lang.com/documentation/values/numbers) | 50% of the total containers space  | `50%`   |
| `75`   | [`Number`](https://sass-lang.com/documentation/values/numbers) | 75% of the total containers space  | `75%`   |
| `100`  | [`Number`](https://sass-lang.com/documentation/values/numbers) | 100% of the total containers space | `100%`  |

## $sizing-prefixes

Sizing prefixes used for widths and heights

+ **Group**: Box model
+ **Access**: public
+ **Type**: [`List`](https://sass-lang.com/documentation/values/lists)
+ **Since**: 0.1.0

## $opacities

Base line multiplier for spacing

+ **Group**: Color
+ **Access**: public
+ **Since**: 0.1.0

### Properties

| Name        | Type                                                           | Description                                           | Default |
| :---------- | :------------------------------------------------------------- | :---------------------------------------------------- | :------ |
| `invisible` | [`Number`](https://sass-lang.com/documentation/values/numbers) | set opacity to 0 to be invisible                      | `0`     |
| `disabled`  | [`Number`](https://sass-lang.com/documentation/values/numbers) | set opacity to appear disabled                        | `.65`   |
| `beneath`   | [`Number`](https://sass-lang.com/documentation/values/numbers) | set opacity to force stacking context and lay beneath | `.99`   |
| `visible`   | [`Number`](https://sass-lang.com/documentation/values/numbers) | set opacity to 1 to be visible                        | `1`     |

## $font-families

Default set of font families

+ **Group**: Fonts
+ **Access**: public
+ **Since**: 0.1.0

### Properties

| Name         | Type                                                           | Description                        | Default                                                                                                                                                    |
| :----------- | :------------------------------------------------------------- | :--------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `monospace`  | [`String`](https://sass-lang.com/documentation/values/strings) | the default monospace family       | `menlo, monaco, consolas, "Courier New", monospace`                                                                                                        |
| `sans-serif` | [`String`](https://sass-lang.com/documentation/values/strings) | the default sans serif font family | `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", arial, sans-serif` |
| `serif`      | [`String`](https://sass-lang.com/documentation/values/strings) | the default serif font family      | `georgia, "Times New Roman", times, serif`                                                                                                                 |

### Dependents

+ **$font-family** Default font family

## $font-family

Default font family

+ **Group**: Fonts
+ **Access**: public
+ **Type**: [`String`](https://sass-lang.com/documentation/values/strings)
+ **Since**: 0.1.0

### Dependencies

+ **[$font-families](#fonts-variable-font-families)** - map of font families

## $font-sizes

Default set of font sizes

+ **Group**: Fonts
+ **Access**: public
+ **Since**: 0.1.0

### Properties

| Name | Type                                                           | Description                     | Default   |
| :--- | :------------------------------------------------------------- | :------------------------------ | :-------- |
| `1`  | [`Number`](https://sass-lang.com/documentation/values/numbers) | smallest font size, about ~14px | `.75rem`  |
| `2`  | [`Number`](https://sass-lang.com/documentation/values/numbers) | smaller font size, about ~16px  | `.85rem`  |
| `3`  | [`Number`](https://sass-lang.com/documentation/values/numbers) | medium font size, 18px          | `1rem`    |
| `4`  | [`Number`](https://sass-lang.com/documentation/values/numbers) | large font size, about ~21px    | `1.25rem` |
| `5`  | [`Number`](https://sass-lang.com/documentation/values/numbers) | larger font size, about ~27px   | `1.5rem`  |
| `6`  | [`Number`](https://sass-lang.com/documentation/values/numbers) | largest font size, 36px         | `2rem`    |

### Dependents

+ **$font-size** Default font size

## $font-size

Default font size

+ **Group**: Fonts
+ **Access**: public
+ **Type**: [`Number`](https://sass-lang.com/documentation/values/numbers)
+ **Since**: 0.1.0

### Dependencies

+ **[$font-sizes](#fonts-variable-font-sizes)** - map of font sizes

## $font-weights

Default set of font weights

+ **Group**: Fonts
+ **Access**: public
+ **Since**: 0.1.0

### Properties

| Name       | Type                                                           | Description                                | Default |
| :--------- | :------------------------------------------------------------- | :----------------------------------------- | :------ |
| `thin`     | [`String`](https://sass-lang.com/documentation/values/strings) | thin font weight                           | `100`   |
| `slim`     | [`String`](https://sass-lang.com/documentation/values/strings) | slim font weight                           | `200`   |
| `light`    | [`String`](https://sass-lang.com/documentation/values/strings) | light font weight                          | `300`   |
| `normal`   | [`String`](https://sass-lang.com/documentation/values/strings) | normal font weight; matches normal keyword | `400`   |
| `demibold` | [`Number`](https://sass-lang.com/documentation/values/numbers) | demi bold weight                           | `500`   |
| `semibold` | [`Number`](https://sass-lang.com/documentation/values/numbers) | semi bold weight                           | `600`   |
| `bold`     | [`Number`](https://sass-lang.com/documentation/values/numbers) | bold font weight, matches bold keyword     | `700`   |
| `thick`    | [`Number`](https://sass-lang.com/documentation/values/numbers) | dark font weight                           | `800`   |
| `heavy`    | [`Number`](https://sass-lang.com/documentation/values/numbers) | darkest font weight                        | `900`   |

## $letter-spacings

Default set of letter-spacings

+ **Group**: Fonts
+ **Access**: public
+ **Since**: 0.1.0

### Properties

| Name    | Type                                                           | Description                                     | Default     |
| :------ | :------------------------------------------------------------- | :---------------------------------------------- | :---------- |
| `xs`    | [`Number`](https://sass-lang.com/documentation/values/numbers) | smallest letter spacing; ~-2px                  | `-.125rem`  |
| `sm`    | [`Number`](https://sass-lang.com/documentation/values/numbers) | smaller letter spacing, ~-1px                   | `-.0625rem` |
| `md[0]` | [`Number`](https://sass-lang.com/documentation/values/numbers) | 0 letter spacing; text is normal; used to reset | -           |
| `lg`    | [`Number`](https://sass-lang.com/documentation/values/numbers) | large letter spacing; ~1px                      | `.0625rem`  |
| `xl`    | [`Number`](https://sass-lang.com/documentation/values/numbers) | larger letter spacing; ~2px                     | `.125rem`   |

## $line-heights

Default set of line heights

+ **Group**: Fonts
+ **Access**: public
+ **Since**: 0.1.0

### Properties

| Name       | Type                                                           | Description                                           | Default |
| :--------- | :------------------------------------------------------------- | :---------------------------------------------------- | :------ |
| `xs`       | [`Number`](https://sass-lang.com/documentation/values/numbers) | smallest line-height; used to reset                   | `1`     |
| `sm`       | [`Number`](https://sass-lang.com/documentation/values/numbers) | smaller line-height, typically for headings           | `1.2`   |
| `md[1.25]` | [`Number`](https://sass-lang.com/documentation/values/numbers) | medium line-height                                    | -       |
| `lg`       | [`Number`](https://sass-lang.com/documentation/values/numbers) | large line-height, used as the baseline for most type | `1.5`   |
| `xl`       | [`Number`](https://sass-lang.com/documentation/values/numbers) | larger line-height, used for small type               | `2`     |

### Dependents

+ **$line-height** Default line-height
+ **$line-height-heading** Default line-height for headings

## $line-height

Default line-height

+ **Group**: Fonts
+ **Access**: public
+ **Type**: [`Number`](https://sass-lang.com/documentation/values/numbers)
+ **Since**: 0.1.0

### Dependencies

+ **[$line-heights](#fonts-variable-line-heights)** - map of line heights

## $line-height-heading

Default line-height for headings

+ **Group**: Fonts
+ **Access**: public
+ **Type**: [`Number`](https://sass-lang.com/documentation/values/numbers)
+ **Since**: 0.1.0

### Dependencies

+ **[$line-heights](#fonts-variable-line-heights)** - map of line heights

## $box-directions

Default set of directions for the box model

+ **Group**: Fragmentation
+ **Access**: public
+ **Since**: 0.1.0

### Properties

| Name     | Type                                                           | Description                           | Default    |
| :------- | :------------------------------------------------------------- | :------------------------------------ | :--------- |
| `all`    | [`String`](https://sass-lang.com/documentation/values/strings) | all sides of the box model            | `''`       |
| `bottom` | [`String`](https://sass-lang.com/documentation/values/strings) | only the bottom side will be affected | `'bottom'` |
| `left`   | [`String`](https://sass-lang.com/documentation/values/strings) | only the left side will be affected   | `'left'`   |
| `right`  | [`String`](https://sass-lang.com/documentation/values/strings) | only the right side will be affected  | `'right'`  |
| `top`    | [`String`](https://sass-lang.com/documentation/values/strings) | only the top will be affected         | `'top'`    |

## $breakpoints

Default set of breakpoints

+ **Group**: Media queries
+ **Access**: public
+ **Since**: 0.1.0

### Properties

| Name | Type                                                           | Description                             | Default |
| :--- | :------------------------------------------------------------- | :-------------------------------------- | :------ |
| `xs` | [`Number`](https://sass-lang.com/documentation/values/numbers) | screens between 0 and 534px             | `0`     |
| `sm` | [`Number`](https://sass-lang.com/documentation/values/numbers) | screens between ~544px and ~767px wide  | `34em`  |
| `md` | [`Number`](https://sass-lang.com/documentation/values/numbers) | screens between ~768px and ~991px wide  | `48em`  |
| `lg` | [`Number`](https://sass-lang.com/documentation/values/numbers) | screens between ~992px and ~1199px wide | `62em`  |
| `xl` | [`Number`](https://sass-lang.com/documentation/values/numbers) | screens larger than ~1200px wide        | `75em`  |

## $z-indices

Default set of z-indicies

+ **Group**: Positioning
+ **Access**: public
+ **Since**: 0.1.0

### Properties

| Name               | Type                                                           | Description         | Default |
| :----------------- | :------------------------------------------------------------- | :------------------ | :------ |
| `level-negative-1` | [`String`](https://sass-lang.com/documentation/values/strings) | negative z-index    | `-1000` |
| `level-0`          | [`Number`](https://sass-lang.com/documentation/values/numbers) | level 0, base level | `0`     |
| `level-1`          | [`Number`](https://sass-lang.com/documentation/values/numbers) | level 1             | `1000`  |
| `level-2`          | [`Number`](https://sass-lang.com/documentation/values/numbers) | level 2             | `2000`  |
| `level-3`          | [`Number`](https://sass-lang.com/documentation/values/numbers) | level 3             | `3000`  |
| `level-4`          | [`Number`](https://sass-lang.com/documentation/values/numbers) | level 4             | `4000`  |
| `level-5`          | [`Number`](https://sass-lang.com/documentation/values/numbers) | level 5             | `5000`  |
| `level-6`          | [`Number`](https://sass-lang.com/documentation/values/numbers) | level 6             | `6000`  |
| `level-7`          | [`Number`](https://sass-lang.com/documentation/values/numbers) | level 7             | `7000`  |
| `level-8`          | [`Number`](https://sass-lang.com/documentation/values/numbers) | level 8             | `8000`  |
| `level-9`          | [`Number`](https://sass-lang.com/documentation/values/numbers) | level 9             | `9000`  |
