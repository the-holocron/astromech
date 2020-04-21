# Box Model

<details>
	<summary><strong>Table of Contents</strong> (click to expand)</summary>

+ [box-spacing](#box-spacing)

</details>

## box-spacing

Creates margin & padding helpers

+ **Group**: Box model
+ **Access**: public
+ **Since**: 0.1.0

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
