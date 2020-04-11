# Sledgehammer [![npm](https://img.shields.io/npm/v/@theholocron/sledgehammer)](https://www.npmjs.com/package/@theholocron/sledgehammer)

This utility droid provides a set of single-purpose, responsive and functional utilities for writing CSS within the Galaxy. 

These mixins were designed to map a CSS property and value to a class name and then add `!important` to ensure they override all specificity.  Every mixin written is meant to be responsive against a set of breakpoints that are provided.  However those breakpoints can be overridden by passing in your own configuration.

![sledgehammer](./sledgehammer.jpg)

## Installation

```shell
$ npm install --save-dev @theholocron/sledgehammer
```

## Table of Contents

* [Usage](#usage)
* [Documentation](#documentation)
* [Change Log](#how-we-track-changes)
* [Versioning](#how-we-version)
* [Contribution](#how-to-contribute)
* [Support](#where-to-find-suport)
* [License](#license)

## Usage

There are a few things that are provided with this library. At its core, this is a (S)CSS mixin library using [`dart-sass` modules](https://sass-lang.com/blog/the-module-system-is-launched).  By default, mixins are available in a namespace based on the basename of the URL, so check out below for ways to import.

```scss
// include all utilities with 'sledgehammer' as the namespace
// calls all mixins and will include in CSS output
@use "@theholocron/sledgehammer/src" as sledgehammer;

// use all utilities with a different set of breakpoints
// calls all mixins and will include in CSS output
@use "@theholocron/sledgehammer/src" as sledgehammer with (
    $breakpoints: (
        "xs": "0",
        "sm": "480px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
    )
);

// include only a specific group of mixins
@use "@theholocron/sledgehammer/src/display as *";
// call the mixins from this group
@include display();
@include visibility();

// use only a specific mixin
@use "@theholocron/sledgehammer/src/display/visibility";
// call the mixin you want to use
@include visibility();
// call the mixin you want, but override this breakpoints
@include visibility(
    $breakpoints: (
        "xs": "0",
        "sm": "480px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
    )
);
```

_The previous examples are only a sample of what utilities are available._

Provided in the `dist` directory are a set of compiled CSS files in both compressed and non-compressed forms.  The entire library is provided as well as each directories as described below.

## Documentation

The best way to find out what's available is to check out the source code.  More documentation and a possible site to explore are set to come.

* [**Animations**](./src/animations/README.md) - [Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations) is a module of CSS that lets you animate the values of CSS properties over time, using keyframes.
* [**Backgrounds & Borders**](./src/backgrounds-borders/README.md) - [Backgrounds and Borders](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders) is a module of CSS that allow filling backgrounds with color or an image (clipped or resized), or modifying them in other ways
* [**Basic User Interface**](./src/basic-user-interface/README.md) - [Basic User Interface](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Basic_User_Interface) is a CSS module that lets you define the rendering and functionality of features related to the user interface.
* [**Box Alignment**](./src/box-alignment/README.md) - [Box Alignment](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment) is a module of CSS features that relate to the alignment of boxes in the various CSS box layout models: block layout, table layout, flex layout, and grid layout.
* [**Box Model**](./src/box-model/README.md) - [Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model) is a module of CSS that defines the rectangular boxes—including their padding and margin—that are generated for elements and laid out according to the visual formatting model.
* [**Color**](./src/color/README.md) - [Color](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Color) is a CSS module that deals with colors, color types, color blending, opacity, and how you can apply these colors and effects to HTML content.
* [**Display**](./src/display/README.md) - [Display](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Display) is a module of CSS that defines how the CSS formatting box tree is generated from the document element tree and defines properties controlling it.
* [**Flexible Box Layout**](./src/flexible-box-layout/README.md) - [Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) is a module of CSS that defines a CSS box model optimized for user interface design, and the layout of items in one dimension.
* [**Fonts**](./src/fonts/README.md) - [Fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts) is a module of CSS that defines font-related properties and how font resources are loaded.
* [**Fragmentation**](./src/fragmentation/README.md) - [Fragmentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fragmentation) is a module of CSS that defines how content is displayed when it is broken (fragmented) across multiple pages, regions, or columns.
* [**Images**](./src/images/README.md) - [Images](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images) is a module of CSS that defines what types of images can be used (the `<image>` type, containing URLs, gradients and other types of images), how to resize them and how they, and other replaced content, interact with the different layout models.
* [**Miscellaneous**](./src/miscellaneous/README.md) - [Miscellaneous](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Miscellaneous) are CSS properties that are highly experimental or don't fit in any other categories.
* [**Overflow**](./src/overflow/README.md) - [Overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Overflow) is a CSS module that contains the features of CSS relating to scrollable overflow handling in visual media
* [**Pointer Events**](./src/pointer-events/README.md) - [Pointer Events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) is a CSS module that sets under what circumstances (if any) a particular graphic element can become the target of pointer events
* [**Positioning**](./src/positioning/README.md) - [Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning) is a module of CSS that defines how to position elements on the page.
* [**Scroll Snap**](./src/scroll-snap/README.md) - [Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap) is a module of CSS that introduces scroll snap positions, which enforce the scroll positions that a scroll container’s scrollport may end at after a scrolling operation has completed.
* [**Scrollbar**](./src/scrollbar/README.md) - [Scrollbars](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scrollbars) is an experimental module of CSS.
* [**Table**](./src/table/README.md) - [Table](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Table) is a CSS module that defines how to lay out table data.
* [**Text Decoration**](./src/text-decoration/README.md) - [Text Decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text_Decoration) is a module of CSS that defines features relating to text decoration, such as underlines, text shadows, and emphasis marks.
* [**Text**](./src/text/README.md) - [Text](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text) is a module of CSS that defines how to perform text manipulation, like line breaking, justification and alignment, white space handling, and text transformation.
* [**Transforms**](./src/transforms/README.md) - [Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms) is a module of CSS that defines how elements styled with CSS can be transformed in two-dimensional or three-dimensional space.
* [**Transitions**](./src/transitions/README.md) - [Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions) is a module of CSS that lets you create gradual transitions between the values of specific CSS properties.

## How We Track Changes [![Keep a Changelog](https://img.shields.io/badge/Keep%20a%20Changelog-1.0.0-orange)](https://keepachangelog.com/en/1.0.0/)

This project uses a CHANGELOG and [GitHub releases](https://help.github.com/en/github/administering-a-repository/about-releases) which contains a curated, chronologically ordered list of notable changes for each version of a project. [Read more about changelogs](https://keepachangelog.com/en/1.0.0/).

## How We Version [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

We use [SemVer](https://semver.org/) for its versioning providing us an opt-in approach to releases. This means we add a version number according to the spec, as you see below. So rather than force developers to consume the latest and greatest, they can choose which version to consume and test any newer ones before upgrading. Please the read the spec as it goes into further detail.

Given a version number **MAJOR.MINOR.PATCH**, increment the:

- **MAJOR** version when you make incompatible API changes.
- **MINOR** version when you add functionality in a backward-compatible manner.
- **PATCH** version when you make backward-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the **MAJOR.MINOR.PATCH** format.

## How to Contribute [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Have a bug or a feature request? Looking to contribute to advance the project? Read our [contribution guide](./github/CONTRIBUTING.md) or [maintenance guide](./.github/MAINTAINING.md) first in order to understand how we do things around here. Or you could look at some of our other guides below:

<details>
  <summary><strong>How do I…</strong> (click to expand)</summary>

- [Ask or Say Something?](./.github/SUPPORT.md)
    - [Request Support](./.github/SUPPORT.md#request-support)
    - [Report an Error or Bug](./.github/SUPPORT.md#report-an-error-or-bug)
    - [Request a Feature](./.github/SUPPORT.md#request-a-feature)
- [Make Something?](./.github/CONTRIBUTING.md)
    - [Setup the Project](./.github/CONTRIBUTING.md#get-started)
    - [Create an Issue](./.github/CONTRIBUTING.md#creating-a-good-issue)
    - [Create a Feature Request](./.github/CONTRIBUTING.md#create-a-good-feature-request)
    - [Contribute Documentation](./.github/CONTRIBUTING.md#contribute-to-documentation)
    - [Contribute Code](./.github/CONTRIBUTING.md#create-a-pull-request)
    - [Join the Team](./.github/CONTRIBUTING.md#join-the-team)
- [Manage Something](./.github/MAINTAINING.md)
    - [Provide Support on Issues](./.github/MAINTAINING.md#provide-support-on-issues)
    - [Label Issues](./.github/MAINTAINING.md#label-issues)
    - [Clean Up Issues and PRs](./.github/MAINTAINING.md#clean-up-issues-and-prs)
    - [Create a Pull Request](./.github/MAINTAINING.md#create-a-pull-request)
    - [Review Pull Requests](./.github/MAINTAINING.md#review-pull-requests)
    - [Merge Pull Requests](./.github/MAINTAINING.md#merge-pull-requests)
    - [Tag a Release](./.github/MAINTAINING.md#tag-a-release)
    - [Release a Version](./.github/MAINTAINING.md#release-a-version)

</details>

## Where to Find Support [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

Looking to talk to someone or need some help? Please read our [support guidelines](./.github/SUPPORT.md).

## Tools We Use

- [Browserslist](https://github.com/browserslist/browserslist) - Used to share to our code which browsers we support
- [CommitLint](https://commitlint.js.org/#/) - Used to ensure our commits follow our standards
- [Dart Sass](https://sass-lang.com/dart-sass) - Used to compile (S)CSS
- [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog) - Used to generate our CHANGELOG
- [Husky](https://github.com/typicode/husky) - Used for auto-fixing linting errors on each commit
- [MarkdownLint](https://github.com/DavidAnson/markdownlint) - Used to lint our Markdown docs
- [PostCSS](https://postcss.org/) - Used to compile (S)CSS
- [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) - Used for automating and releasing our library
- [StyleLint](https://stylelint.io/) - Used to lint our (S)CSS
- [True](https://www.oddbird.net/true/docs/) - Used to test our (S)CSS mixins and functions
- [@godban's Browser Support Badges](https://godban.github.io/browsers-support-badges) - The tool used to generate the "Which Browsers [sic] We Support" section

## References

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) - For how we format commit messages
- [Contributor Convenant](https://www.contributor-covenant.org)
- [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) - For building out a quality CHANGELOG
- [Make a README](https://www.makeareadme.com/) - For building out this README
- [SemVer](https://semver.org/) - For versioning this library

## License [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

©2020 GNU General Public License v3. See [LICENSE](./LICENSE.md) for specifics.
