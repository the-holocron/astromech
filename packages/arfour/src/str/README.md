# String

Any function that manipulates strings; input a direction and output the opposite, strip the unit suffix, replace parts of a string, and so on.

## Table of Contents

<!-- toc -->

* [`@function opposite-direction`](#function-opposite-direction)
* [`@function str-replace-batch`](#function-str-replace-batch)
* [`@function str-replace`](#function-str-replace)
* [`@function strip-unit`](#function-strip-unit)

<!-- tocstop -->

## `@function opposite-direction`

Returns the opposite direction of each direction in a list

* **Group:** General
* **Access:** public

### Parameters

| Name          | Type                                                         | Description                | Default |
| :------------ | :----------------------------------------------------------- | :------------------------- | :------ |
| `$directions` | **[List](https://sass-lang.com/documentation/values/lists)** | List of initial directions | -       |

### Returns

**[List](https://sass-lang.com/documentation/values/lists)** - List of opposite directions

### Throws

* **@warn** No opposite direction can be found

### Examples

```scss
.triange-left {
  border-#{opposite-direction(left)}: 1.5em solid gray;
}
```

### Since

* **0.1.0**

### Authors

* Hugo Giraudel

## `@function str-replace-batch`

Replaces a batch of substrings (needles) in a string (haystack) with a single replacement string.

* **Group:** General
* **Access:** public

### Parameters

| Name           | Type                                                                                                                           | Description                                   | Default |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------- | :------ |
| `$haystack`    | **[String](https://sass-lang.com/documentation/values/strings)**                                                               | string to perform search and replacement on   | -       |
| `$needles`     | **[List](https://sass-lang.com/documentation/values/lists)**, **[String](https://sass-lang.com/documentation/values/strings)** | string or list of strings to replace globally | -       |
| `$replacement` | **[String](https://sass-lang.com/documentation/values/strings)**                                                               | ('') - replacement string to replace needles  | -       |

### Returns

**[String](https://sass-lang.com/documentation/values/strings)** - replaced string

### Since

* **0.1.0**

### Authors

* David Khourshid

## `@function str-replace`

Replace `$search` with `$replace` in `$string`

* **Group:** General
* **Access:** public

### Parameters

| Name       | Type                                                             | Description          | Default |
| :--------- | :--------------------------------------------------------------- | :------------------- | :------ |
| `$string`  | **[String](https://sass-lang.com/documentation/values/strings)** | Initial string       | -       |
| `$search`  | **[String](https://sass-lang.com/documentation/values/strings)** | Substring to replace | -       |
| `$replace` | **[String](https://sass-lang.com/documentation/values/strings)** | New value            | `""`    |

### Returns

**[String](https://sass-lang.com/documentation/values/strings)** - Updated string

### Examples

```scss
.lato-thin {
  font-family: str-replace('lato-thin', '-', ' ');
}
```

### Since

* **0.1.0**

### Authors

* Hugo Giraudel

## `@function strip-unit`

Strip unit from a number

* **Group:** General
* **Access:** public

### Parameters

| Name      | Type | Description                   | Default |
| :-------- | :--- | :---------------------------- | :------ |
| `$number` | Unit | any valid CSS value with unit | -       |

### Returns

**[Number](https://sass-lang.com/documentation/values/numbers)** - modified number

### Examples

```scss
strip-unit(2px) // 2
strip-unit(5em) // 5
```

### Since

* **0.1.0**

### Authors

* Hugo Giraudel
