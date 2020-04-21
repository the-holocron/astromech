# Positioning

Positioning utilities all revolve around positioning elements around the page, such as flexbox, floats, position, etc. Use these to force a element to layout accordingly.

<details>
	<summary><strong>Table of Contents</strong> (click to expand)</summary>

* [center](#center)

</details>

## center

Centers a element absolutely on any or multiple planes

* **Group:** General
* **Access:** public
* **Since:** 0.1.0

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

### Author(s)

* Mark Otto
