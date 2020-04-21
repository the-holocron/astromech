# At-Rules

At-rules are [CSS statements](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#CSS_statements) that instructs CSS how to behave. They begin with an at sign, `'@'` (`U*0040 COMMERCIAL AT`), followed by an identifier and includes everything up to the next semicolon, `';'` (`U*003B SEMICOLON`), or the next CSS block, whichever comes first.

<details>
	<summary><strong>Table of Contents</strong> (click to expand)</summary>

* [media-breakpoint-up](#media-breakpoint-up)
* [media-breakpoint-down](#media-breakpoint-down)
* [media-breakpoint-only](#media-breakpoint-only)

</details>

## media-breakpoint-up

Media of at least the minimum breakpoint width. No query for the smallest breakpoint.

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

### Parameters

| Name           | Type                                                             | Description                 | Default |
| :------------- | :--------------------------------------------------------------- | :-------------------------- | :------ |
| `$name`        | **[String](https://sass-lang.com/documentation/values/strings)** | the name for the breakpoint | -       |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints   | -       |

### Contents

applies to the given breakpoint and wider.

### Examples

```scss
.test {
  @include media-breakpoint-up('md') {
    width: 25%;
  }
}
```

### Dependents

* **`media-breakpoint-only** Media between the breakpoint's minimum and maximum widths.
  No minimum for the smallest breakpoint, and no maximum for the largest one.

### Author(s)

* Mark Otto

## media-breakpoint-down

Media of at most the maximum breakpoint width. No query for the largest breakpoint.

* **Group:** General
* **Access:** public
* **Since**: 0.1.0

### Parameters

| Name           | Type                                                             | Description                 | Default |
| :------------- | :--------------------------------------------------------------- | :-------------------------- | :------ |
| `$name`        | **[String](https://sass-lang.com/documentation/values/strings)** | the name for the breakpoint | -       |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints   | -       |

### Contents

applies to the given breakpoint and narrower.

### Examples

```scss
.test {
  @include media-breakpoint-down('md') {
    width: 100%;
  }
}
```

### Dependents

* **`media-breakpoint-only** Media between the breakpoint's minimum and maximum widths.
  No minimum for the smallest breakpoint, and no maximum for the largest one.

### Author(s)

* Mark Otto

## media-breakpoint-only

Media between the breakpoint's minimum and maximum widths.
No minimum for the smallest breakpoint, and no maximum for the largest one.

* **Group:** General
* **Access:** public
* **0.1.0**

### Parameters

| Name           | Type                                                             | Description                 | Default |
| :------------- | :--------------------------------------------------------------- | :-------------------------- | :------ |
| `$name`        | **[String](https://sass-lang.com/documentation/values/strings)** | the name for the breakpoint | -       |
| `$breakpoints` | **[Map](https://sass-lang.com/documentation/values/maps)**       | a map of grid breakpoints   | -       |

### Contents

applies only to the given breakpoint, not viewports any wider or narrower.

### Examples

```scss
.test {
  @include media-breakpoint-only('md') {
    width: 50%;
  }
}
```

### Dependencies

* **[media-breakpoint-up](#media-breakpoint-up)**
* **[media-breakpoint-down](#media-breakpoint-down)**

### Author(s)

* Mark Otto
