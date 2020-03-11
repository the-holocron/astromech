# Chopper [![npm](https://img.shields.io/npm/v/@theholocron/chopper)](https://www.npmjs.com/package/@theholocron/chopper)

This utility droid provides a set of single-purpose, functional utilities for writing NodeJS within the Galaxy.

[![C1-10P droid](./chopper.png)](https://starwars.fandom.com/wiki/C1-10P)

## Installation

```shell
$ npm install --save-dev @theholocron/chopper
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

```javascript
import chopper from '@theholocron/chopper';

chopper.curl.getHTTPStatus('http://example.com'); // 200
chopper.file.isFileOfType('/foo/bar/baz.json', 'json') // true
chopper.git.remote() // 'https://github.com/the-holocron/astromech.git'
chopper.log.error('foo') // [ERROR] foo
chopper.semver.increment('1.0.0', 'major') // 2.0.0
chopper.str.encode('foo') // Zm9v
```

_The previous examples are only a sample of what utilities are available._

## Documentation

The best way to find out what's available is to check out the source code.  More documentation and a possible site to explore are set to come.

- [**curl**](./curl/README.md) - use NodeJS to curl and grab data from sites and/or APIs.
- [**file**](./file/README.md) - a set of functions that work with the Filesystem.
- [**git**](./git/README.md) - a translation of Git operations in NodeJS.
- [**log**](./log/README.md) - various functions that log different types and levels of output to the console
- [**semver**](./semver/README.md) - functions to work with Semantic Versioning and verifying numbers and keywords are valid.
- [**str**](./str/README.md) - any function that manipulates strings; input a direction and output the opposite, strip the unit suffix, replace parts of a string, and so on.

## How We Track Changes [![Keep a Changelog](https://img.shields.io/badge/Keep%20a%20Changelog-1.0.0-orange)](https://keepachangelog.com/en/1.0.0/)

This project uses a [CHANGELOG](./CHANGELOG.md) and [GitHub releases](https://help.github.com/en/github/administering-a-repository/about-releases) which contains a curated, chronologically ordered list of notable changes for each version of a project. [Read more about changelogs](https://keepachangelog.com/en/1.0.0/).

## How We Version [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

We use [SemVer](https://semver.org/) for its versioning providing us an opt-in approach to releases. This means we add a version number according to the spec, as you see below. So rather than force developers to consume the latest and greatest, they can choose which version to consume and test any newer ones before upgrading. Please the read the spec as it goes into further detail.

Given a version number **MAJOR.MINOR.PATCH**, increment the:

* **MAJOR** version when you make incompatible API changes.
* **MINOR** version when you add functionality in a backward-compatible manner.
* **PATCH** version when you make backward-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the **MAJOR.MINOR.PATCH** format.

## How to Contribute [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Have a bug or a feature request? Looking to contribute to advance the project? Read our [contribution guide](../../github/CONTRIBUTING.md) or [maintenance guide](../../.github/MAINTAINING.md) first in order to understand how we do things around here. Or you could look at some of our other guides below:

<details>
  <summary><strong>How do I…</strong> (click to expand)</summary>

* [Ask or Say Something?](../../.github/SUPPORT.md)
  * [Request Support](../../.github/SUPPORT.md#request-support)
  * [Report an Error or Bug](../../.github/SUPPORT.md#report-an-error-or-bug)
  * [Request a Feature](../../.github/SUPPORT.md#request-a-feature)
* [Make Something?](../../.github/CONTRIBUTING.md)
  * [Setup the Project](../../.github/CONTRIBUTING.md#get-started)
  * [Create an Issue](../../.github/CONTRIBUTING.md#creating-a-good-issue)
  * [Create a Feature Request](../../.github/CONTRIBUTING.md#create-a-good-feature-request)
  * [Contribute Documentation](../../.github/CONTRIBUTING.md#contribute-to-documentation)
  * [Contribute Code](../../.github/CONTRIBUTING.md#create-a-pull-request)
  * [Join the Team](../../.github/CONTRIBUTING.md#join-the-team)
* [Manage Something](../../.github/MAINTAINING.md)
  * [Provide Support on Issues](../../.github/MAINTAINING.md#provide-support-on-issues)
  * [Label Issues](../../.github/MAINTAINING.md#label-issues)
  * [Clean Up Issues and PRs](../../.github/MAINTAINING.md#clean-up-issues-and-prs)
  * [Create a Pull Request](../../.github/MAINTAINING.md#create-a-pull-request)
  * [Review Pull Requests](../../.github/MAINTAINING.md#review-pull-requests)
  * [Merge Pull Requests](./.github/MAINTAINING.md#merge-pull-requests)
  * [Tag a Release](../../.github/MAINTAINING.md#tag-a-release)
  * [Release a Version](../../.github/MAINTAINING.md#release-a-version)

</details>

## Where to Find Support [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

Looking to talk to someone or need some help? Please read our [support guidelines](../../.github/SUPPORT.md).

## License [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

©2020 GNU General Public License v3. See [LICENSE](../../LICENSE) for specifics.
