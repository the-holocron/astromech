# Backgrounds & Borders

Styles in the CSS Backgrounds and Borders module allow filling backgrounds with color or an image (clipped or resized), or modifying them in other ways. These styles can also decorate borders with lines or images, and make them square or rounded. (Additionally, element boxes can be decorated with a shadow.)

<details>
	<summary><strong>Table of Contents</strong> (click to expand)</summary>

* [background-color](#background-color)
* [border-radius](#border-radius)
* [border-top-radius](#border-top-radius)
* [border-right-radius](#border-right-radius)
* [border-bottom-radius](#border-bottom-radius)
* [border-left-radius](#border-left-radius)
* [border](#border)

</details>

## background-color

Creates background color variants

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

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

## border-radius

Creates border-radius

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

### Parameters

| Name      | Type                                                             | Description                                             | Default   |
| :-------- | :--------------------------------------------------------------- | :------------------------------------------------------ | :-------- |
| `$radius` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a valid CSS unit to create a border-radius on all sides | -         |

### Examples

```scss
.example {
  @include border-radius();
}
```

### Author(s)

* Mark Otto

## border-top-radius

Creates border-top-radius

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

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

### Author(s)

* Mark Otto

## border-right-radius

Creates border-right-radius

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

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

### Author(s)

* Mark Otto

## border-bottom-radius

Creates border-bottom-radius

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

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

### Author(s)

* Mark Otto

## border-left-radius

Creates border-left-radius

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

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

### Author(s)

* Mark Otto

## border

Creates border variants

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

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
