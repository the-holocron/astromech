# List

## Table of Contents

<!-- toc -->

* [@function collect](#function-collect)

<!-- tocstop -->

<a id="general-function-collect"></a>

## @function collect

Joins more than 1 list into a flattened list

* **Group:** General
* **Access:** public

### Parameters

| Name     | Type                                                         | Description                    | Default |
| :------- | :----------------------------------------------------------- | :----------------------------- | :------ |
| `$lists` | **[List](https://sass-lang.com/documentation/values/lists)** | any number of lists to combine | -       |

### Returns

**[List](https://sass-lang.com/documentation/values/lists)** a flattened list

### Examples

```scss
$somecollection: collect($list1, $list2, ...);
```

### Since

* **0.1.0**
