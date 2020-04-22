# CSS Syntaxes

<details>
  <summary><strong>Table of Contents</strong> (click to expand)</summary>

* [custom](#custom)
  * [$break](#break)
  * [$pointer-events-svg-only](#pointer-events-svg-only)
  * [$sizing](#sizing)
* [properties](./properties/README.md)
  * [$animation-direction](./properties/README.md#animation-direction)
  * [$animation-fill-mode](./properties/README.md#animation-fill-mode)
  * [$animation-iteration-count](./properties/README.md#animation-iteration-count)
  * [$animation-name](./properties/README.md#animation-name)
  * [$animation-play-state](./properties/README.md#animation-play-state)
  * [$animation-timing-function](./properties/README.md#animation-timing-function)
  * [$appearance](./properties/README.md#appearance)
  * [$box-sizing](./properties/README.md#box-sizing)
  * [$cursor](./properties/README.md#cursor)
  * [$outline-style](./properties/README.md#outline-style)
  * [$resize](./properties/README.md#resize)
  * [$text-overflow](./properties/README.md#text-overflow)
  * [$user-select](./properties/README.md#user-select)
  * [$align-content](./properties/README.md#align-content)
  * [$align-items](./properties/README.md#align-items)
  * [$align-self](./properties/README.md#align-self)
  * [$justify-content](./properties/README.md#justify-content)
  * [$justify-items](./properties/README.md#justify-items)
  * [$justify-self](./properties/README.md#justify-self)
  * [$place-content](./properties/README.md#place-content)
  * [$place-items](./properties/README.md#place-items)
  * [$place-self](./properties/README.md#place-self)
  * [$height](./properties/README.md#height)
  * [$margin](./properties/README.md#margin)
  * [$overscroll-behavior](./properties/README.md#overscroll-behavior)
  * [$padding](./properties/README.md#padding)
  * [$visibility](./properties/README.md#visibility)
  * [$width](./properties/README.md#width)
  * [$opacity](./properties/README.md#opacity)
  * [$display](./properties/README.md#display)
  * [$flex-direction](./properties/README.md#flex-direction)
  * [$flex-wrap](./properties/README.md#flex-wrap)
  * [$flex-flow](./properties/README.md#flex-flow)
  * [$font-family](./properties/README.md#font-family)
  * [$font-size](./properties/README.md#font-size)
  * [$font-style](./properties/README.md#font-style)
  * [$font-variant-numeric](./properties/README.md#font-variant-numeric)
  * [$font-weight](./properties/README.md#font-weight)
  * [$line-height](./properties/README.md#line-height)
  * [$box-decoration-break](./properties/README.md#box-decoration-break)
  * [$break-after](./properties/README.md#break-after)
  * [$break-before](./properties/README.md#break-before)
  * [$break-inside](./properties/README.md#break-inside)
  * [$object-fit](./properties/README.md#object-fit)
  * [$all](./properties/README.md#all)
  * [$text-rendering](./properties/README.md#text-rendering)
  * [$overflow](./properties/README.md#overflow)
  * [$pointer-events](./properties/README.md#pointer-events)
  * [$touch-action](./properties/README.md#touch-action)
  * [$clear](./properties/README.md#clear)
  * [$float](./properties/README.md#float)
  * [$position](./properties/README.md#position)
  * [$z-index](./properties/README.md#z-index)
  * [$scroll-snap-align](./properties/README.md#scroll-snap-align)
  * [$scroll-snap-stop](./properties/README.md#scroll-snap-stop)
  * [$scroll-snap-type](./properties/README.md#scroll-snap-type)
  * [$scroll-snap-type-optionals](./properties/README.md#scroll-snap-type-optionals)
  * [$scrollbar-color](./properties/README.md#scrollbar-color)
  * [$scrollbar-width](./properties/README.md#scrollbar-width)
  * [$border-collapse](./properties/README.md#border-collapse)
  * [$caption-side](./properties/README.md#caption-side)
  * [$empty-cells](./properties/README.md#empty-cells)
  * [$table-layout](./properties/README.md#table-layout)
  * [$vertical-align](./properties/README.md#vertical-align)
  * [$text-decoration-line](./properties/README.md#text-decoration-line)
  * [$text-decoration-style](./properties/README.md#text-decoration-style)
  * [$text-decoration](./properties/README.md#text-decoration)
  * [$text-decoration-skip-ink](./properties/README.md#text-decoration-skip-ink)
  * [$letter-spacing](./properties/README.md#letter-spacing)
  * [$line-break](./properties/README.md#line-break)
  * [$overflow-wrap](./properties/README.md#overflow-wrap)
  * [$text-align](./properties/README.md#text-align)
  * [$text-justify](./properties/README.md#text-justify)
  * [$text-transform](./properties/README.md#text-transform)
  * [$white-space](./properties/README.md#white-space)
  * [$word-break](./properties/README.md#word-break)
  * [$backface-visibility](./properties/README.md#backface-visibility)
  * [$perspective-origin](./properties/README.md#perspective-origin)
  * [$transform-box](./properties/README.md#transform-box)
  * [$transform-style](./properties/README.md#transform-style)
  * [$transition-timing-function](./properties/README.md#transition-timing-function)
  * [$text-orientation](./properties/README.md#text-orientation)
* [syntaxes](#syntaxes)
  * [$global](#global)
  * [$absolute-size](#absolute-size)
  * [$attachment](#attachment)
  * [$baseline-position](#baseline-position)
  * [$bg-size](#bg-size)
  * [$box](#box)
  * [$compat](#compat)
  * [$content-distribution](#content-distribution)
  * [$content-position](#content-position)
  * [$cubic-bezier-timing-function](#cubic-bezier-timing-function)
  * [$display-box](#display-box)
  * [$display-inside](#display-inside)
  * [$display-internal](#display-internal)
  * [$display-legacy](#display-legacy)
  * [$display-listitem](#display-listitem)
  * [$display-outside](#display-outside)
  * [$generic-family](#generic-family)
  * [$line-style](#line-style)
  * [$named-color](#named-color)
  * [$numeric-figure-values](#numeric-figure-values)
  * [$numeric-fraction-values](#numeric-fraction-values)
  * [$numeric-spacing-values](#numeric-spacing-values)
  * [$overflow-position](#overflow-position)
  * [$relative-size](#relative-size)
  * [$repeat-style](#repeat-style)
  * [$self-position](#self-position)
  * [$single-animation-direction](#single-animation-direction)
  * [$single-animation-fill-mode](#single-animation-fill-mode)
  * [$single-animation-iteration-count](#single-animation-iteration-count)
  * [$single-animation-play-state](#single-animation-play-state)
  * [$step-timing-function](#step-timing-function)
  * [$timing-function](#timing-function)

</details>

## Custom

### $break

List of syntaxes used for breaks.

* **Group**: Fragmentation
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://developer.mozilla.org/docs/Web/CSS/break-after>
* <https://developer.mozilla.org/docs/Web/CSS/break-before>

### $pointer-events-svg-only

Pointer event syntaxes that only apply to SVG only.  This is a custom collection that was built to signify these events are only used on SVG elements.

* **Group**: Pointer events
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://developer.mozilla.org/docs/Web/CSS/pointer-events>

### $sizing

List of syntaxes that are used on min-, max- widths and heights

* **Group**: Box model
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://developer.mozilla.org/docs/Web/CSS/height>
* <https://developer.mozilla.org/docs/Web/CSS/max-height>
* <https://developer.mozilla.org/docs/Web/CSS/min-height>
* <https://developer.mozilla.org/docs/Web/CSS/width>
* <https://developer.mozilla.org/docs/Web/CSS/max-width>
* <https://developer.mozilla.org/docs/Web/CSS/min-width>

## Syntaxes

### $global

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://developer.mozilla.org/en-US/docs/Web/CSS/inherit>
* <https://developer.mozilla.org/en-US/docs/Web/CSS/initial>
* <https://developer.mozilla.org/en-US/docs/Web/CSS/unset>

### $absolute-size

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L2-L4>

### $attachment

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L23-L25>

### $baseline-position

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L44-L46>

### $bg-size

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L59-L61>

### $box

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L68-L70>

### $compat

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L125-L127>

### $content-distribution

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L152-L154>

### $content-position

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L158-L160>

#### $cubic-bezier-timing-function

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

##### Dependents

* **$timing-function**

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L182-L184>

#### $display-box

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L191-L193>

#### $display-inside

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L194-L196>

### $display-internal

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L197-199>

### $display-legacy

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L200-L202>

### $display-listitem

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L203-L205>

### $display-outside

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L206-L208>

### $generic-family

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L296-L298>

### $line-style

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L386-L388>

### $named-color

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L386-L388>

### $numeric-figure-values

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L488-L490>

### $numeric-fraction-values

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L491-L493>

### $numeric-spacing-values

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L494-L496>

### $overflow-position

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L503-L505>

### $relative-size

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L560-L562>

### $repeat-style

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L563-L565>

### $self-position

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L611-L613>

### $single-animation-direction

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L647-L649>

### $single-animation-fill-mode

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L650-L652>

### $single-animation-iteration-count

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L653-L655>

### $single-animation-play-state

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L656-L658>

### $step-timing-function

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Dependents

* **$timing-function**

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L671-L673>

### $timing-function

* **Group**: General
* **Access**: public
* **Since**: 0.1.0

#### Dependencies

* **[$cubic-bezier-timing-function](#cubic-bezier-timing-function)**
* **[$step-timing-function](#timing-function)**

#### Read More

* <https://github.com/mdn/data/blob/master/css/syntaxes.json#L710-L712>
