# Pseudo-Classes

A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, [`:hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) can be used to change a button's color when the user's pointer hovers over it.

<details>
	<summary><strong>Table of Contents</strong> (click to expand)</summary>

* [hover](#hover)
* [hover-focus](#hover-focus)
* [plain-hover-focus](#plain-hover-focus)
* [hover-focus-active](#hover-focus-active)
* [has-nth](#has-nth)
* [at-least](#at-least)
* [at-most](#at-most)
* [divisible-by](#divisible-by)
* [has-exactly](#has-exactly)
* [has-odd](#has-odd)
* [has-even](#has-even)

</details>

## hover-focus

Creates hover, focus combo mixin

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

### Contents

styles used on focus and hover states

### Examples

```scss
.test {
  @include hover-focus {
    text-decoration: underline;
    outline: 1px solid blue;
  }
}
```

### Author(s)

* Mark Otto

## plain-hover-focus

Creates hover, focus and parent combo mixin

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

### Contents

styles used on selector, focus and hover states

### Examples

```scss
.test {
  @include plain-hover-focus {
    background-color: blue;
  }
}
```

### Author(s)

* Mark Otto

## hover-focus-active

Creates hover, focus, and active combo mixin

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

### Contents

styles used on focus, active and hover states

### Examples

```scss
.test {
  @include hover-focus-active {
    background-color: blue;
  }
}
```

### Author(s)

* Mark Otto

## has-nth

Creates has-nth

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

### Parameters

| Name          | Type                                                             | Description            | Default |
| :------------ | :--------------------------------------------------------------- | :--------------------- | :------ |
| `$expression` | **[String](https://sass-lang.com/documentation/values/strings)** | a valid CSS expression | -       |
| `$element`    | **[String](https://sass-lang.com/documentation/values/strings)** | a valid CSS selector   | `'*'`   |

### Contents

styles used on a narrowed set of elements

### Examples

```scss
li {
   @include has-nth('n * 4', 'li') {
      color: blue;
   }
}
```

### Dependents

* **at-least** Creates at-least
* **at-most** Creates at-most
* **divisible-by** Creates divisible-by
* **has-exactly** Creates has-exactly
* **has-odd** Creates has-odd
* **has-even** Creates has-even

### Author(s)

* Adam Giese

## at-least

Creates at-least

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

### Parameters

| Name        | Type                                                             | Description                 | Default |
| :---------- | :--------------------------------------------------------------- | :-------------------------- | :------ |
| `$quantity` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a number of items to narrow | -       |
| `$element`  | **[String](https://sass-lang.com/documentation/values/strings)** | a valid CSS selector        | `'*'`   |

### Contents

styles used on a narrowed set of elements

### Examples

```scss
li {
   @include at-least(4, 'li') {
      color: blue;
   }
}
```

### Dependencies

* **[has-nth](#has-nth)**

### Author(s)

* Adam Giese

## at-most

Creates at-most

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

### Parameters

| Name        | Type                                                             | Description                 | Default |
| :---------- | :--------------------------------------------------------------- | :-------------------------- | :------ |
| `$quantity` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a number of items to narrow | -       |
| `$element`  | **[String](https://sass-lang.com/documentation/values/strings)** | a valid CSS selector        | `'*'`   |

### Contents

styles used on a narrowed set of elements

### Examples

```scss
li {
   @include at-most(4, 'li') {
      color: blue;
   }
}
```

### Dependencies

* **[has-nth](#has-nth)**

### Author(s)

* Adam Giese

## divisible-by

Creates divisible-by

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

### Parameters

| Name        | Type                                                             | Description                  | Default |
| :---------- | :--------------------------------------------------------------- | :--------------------------- | :------ |
| `$quantity` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a number of items to narrow  | -       |
| `$offset`   | **[Number](https://sass-lang.com/documentation/values/numbers)** | a number to add on to narrow | `0`     |
| `$element`  | **[String](https://sass-lang.com/documentation/values/strings)** | a valid CSS selector         | `'*'`   |

### Contents

styles used on a narrowed set of elements

### Examples

```scss
li {
   @include divisible-by(4, 0, 'li') {
      color: blue;
   }
}
```

### Dependencies

* **[has-nth](#has-nth)**

### Author(s)

* Adam Giese

## has-exactly

Creates has-exactly

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

### Parameters

| Name        | Type                                                             | Description                 | Default |
| :---------- | :--------------------------------------------------------------- | :-------------------------- | :------ |
| `$quantity` | **[Number](https://sass-lang.com/documentation/values/numbers)** | a number of items to narrow | -       |
| `$element`  | **[String](https://sass-lang.com/documentation/values/strings)** | a valid CSS selector        | `'*'`   |

### Contents

styles used on a narrowed set of elements

### Examples

```scss
li {
   @include has-exactly(4, 'li') {
      color: blue;
   }
}
```

### Dependencies

* **[has-nth](#has-nth)**

### Author(s)

* Adam Giese

## has-odd

Creates has-odd

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

### Parameters

| Name       | Type                                                             | Description          | Default |
| :--------- | :--------------------------------------------------------------- | :------------------- | :------ |
| `$element` | **[String](https://sass-lang.com/documentation/values/strings)** | a valid CSS selector | `'*'`   |

### Contents

styles used on a narrowed set of elements

### Examples

```scss
li {
   @include has-odd('li') {
      color: blue;
   }
}
```

### Dependencies

* **[has-nth](#has-nth)**

### Author(s)

* Adam Giese

## has-even

Creates has-even

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

### Parameters

| Name       | Type                                                             | Description          | Default |
| :--------- | :--------------------------------------------------------------- | :------------------- | :------ |
| `$element` | **[String](https://sass-lang.com/documentation/values/strings)** | a valid CSS selector | `'*'`   |

### Contents

styles used on a narrowed set of elements

### Examples

```scss
li {
   @include has-even('li') {
      color: blue;
   }
}
```

### Dependencies

* **[has-nth](#has-nth)**

### Author(s)

* Adam Giese

