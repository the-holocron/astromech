# Configuration

All of the following configuration maps can be overridden, but by default if you pass nothing to a mixin, these are what is provided.

## Table of Contents

<!-- toc -->

* [`$breakpoints`](#breakpoints)
* [`$font-size`](#font-size)
* [`$spacing`](#spacing)

<!-- tocstop -->

## `$breakpoints`

Default set of breakpoints

+ **Group:** General
+ **Access:** public

### Properties

| Name  | Type                                                             | Description                             | Default |
| :---- | :--------------------------------------------------------------- | :-------------------------------------- | :------ |
| `$xs` | **[Number](https://sass-lang.com/documentation/values/numbers)** | extra short amount of time              | `0`     |
| `$sm` | **[Number](https://sass-lang.com/documentation/values/numbers)** | screens between ~544px and ~767px wide  | `34em`  |
| `$md` | **[Number](https://sass-lang.com/documentation/values/numbers)** | screens between ~768px and ~991px wide  | `48em`  |
| `$lg` | **[Number](https://sass-lang.com/documentation/values/numbers)** | screens between ~992px and ~1199px wide | `62em`  |
| `$xl` | **[Number](https://sass-lang.com/documentation/values/numbers)** | screens larger than ~1200px wide        | `75em`  |

### Since

+ **0.1.0**

## `$font-sizes`

Default set of font-sizes

+ **Group:** General
+ **Access:** public

### Properties

| Name | Type                                                             | Description                     | Default   |
| :--- | :--------------------------------------------------------------- | :------------------------------ | :-------- |
| `$1` | **[Number](https://sass-lang.com/documentation/values/numbers)** | smallest font size, about ~14px | `.75rem`  |
| `$2` | **[Number](https://sass-lang.com/documentation/values/numbers)** | smaller font size, about ~16px  | `.85rem`  |
| `$3` | **[Number](https://sass-lang.com/documentation/values/numbers)** | medium font size, 18px         | `1rem`    |
| `$4` | **[Number](https://sass-lang.com/documentation/values/numbers)** | large font size, about ~21px    | `1.25rem` |
| `$5` | **[Number](https://sass-lang.com/documentation/values/numbers)** | larger font size, about ~27px   | `1.5rem`  |
| `$6` | **[Number](https://sass-lang.com/documentation/values/numbers)** | largest font size, 36px         | `2rem`    |

### Since

+ **0.1.0**

## `$spacing`

Default set of spacing

+ **Group:** General
+ **Access:** public

### Properties

| Name | Type                                                             | Description                     | Default   |
| :--- | :--------------------------------------------------------------- | :------------------------------ | :-------- |
| `$0` | **[Number](https://sass-lang.com/documentation/values/numbers)** | reset the size to 0 | `0`  |
| `$eighth` | **[Number](https://sass-lang.com/documentation/values/numbers)** | 1/8th the size of the default spacer | `.125rem`  |
| `$qtr` | **[Number](https://sass-lang.com/documentation/values/numbers)** | 1/4th the size of the default spacer | `.25rem`  |
| `$half` | **[Number](https://sass-lang.com/documentation/values/numbers)** | 1/2th the size of the default spacer | `.5rem`  |
| `$3qtr` | **[Number](https://sass-lang.com/documentation/values/numbers)** | 3/4th the size of the default spacer | `.75rem`  |
| `$1` | **[Number](https://sass-lang.com/documentation/values/numbers)** | the size of the default spacer | `1rem`    |
| `$2` | **[Number](https://sass-lang.com/documentation/values/numbers)** | 2 times the size of the default spacer | `2rem` |
| `$3` | **[Number](https://sass-lang.com/documentation/values/numbers)** | 3 times the size of the default spacer   | `3rem`  |

### Since

+ **0.1.0**
