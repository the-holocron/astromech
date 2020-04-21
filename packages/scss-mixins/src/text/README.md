# Text

CSS Text is a module of CSS that defines how to perform text manipulation, like line breaking, justification and alignment, white space handling, and text transformation.

<details>
	<summary><strong>Table of Contents</strong> (click to expand)</summary>

* [text-color](#text-color)

<details>

## text-color

Creates text color variants

* **Group:** General
* **Access:** public
* **Since:** 0.1.0

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
