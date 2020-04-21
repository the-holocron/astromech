# Box Model

CSS Basic Box Model is a module of CSS that defines the rectangular boxes—including their padding and margin—that are generated for elements and laid out according to the [visual formatting model](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model).

<details>
	<summary><strong>Table of Contents</strong> (click to expand)</summary>

* [box-spacing](#box-spacing)

</details>

## box-spacing

Creates margin & padding helpers

* **Group**: Box model
* **Access**: public
* **Since**: 0.1.0

### Parameters

| Name         | Type                                                           | Description                                            | Default |
| :----------- | :------------------------------------------------------------- | :----------------------------------------------------- | :------ |
| `$radius`    | [`Number`](https://sass-lang.com/documentation/values/numbers) | a valid CSS unit to create a border-radius on the left | -       |
| `$direction` | [`String`](https://sass-lang.com/documentation/values/strings) | a valid box direction                                  | -       |

### Examples

```scss
.example {
  @include box-spacing(margin, 2px);
}
```
