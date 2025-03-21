# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.8.0](https://github.com/LoicViennois/Project-Euler-Solver/compare/v1.7.0...v1.8.0) (2025-03-21)


### Features

* update PWA config ([b8bce4e](https://github.com/LoicViennois/Project-Euler-Solver/commit/b8bce4e77852780c51fe38b2fcf3f672d2c165c7))


### Bug Fixes

* **client:** update matomo code ([087f95a](https://github.com/LoicViennois/Project-Euler-Solver/commit/087f95a2db3be05cde0f0227d624dbab01408173))

## [1.7.0](https://github.com/LoicViennois/Project-Euler-Solver/compare/v1.6.0...v1.7.0) (2022-10-05)


### Features

* update to angular 13 ([546bc8a](https://github.com/LoicViennois/Project-Euler-Solver/commit/546bc8a6d0ec0c60539efc6128b2e5fc20ea64a9))

## [1.6.0](https://github.com/LoicViennois/Project-Euler-Solver/compare/v1.5.0...v1.6.0) (2021-08-03)


### Features

* **server:** solve euler062 ([8a907f1](https://github.com/LoicViennois/Project-Euler-Solver/commit/8a907f118b90476260debd37e52df39854f165fd))
* **server:** solve euler063 ([5e804f5](https://github.com/LoicViennois/Project-Euler-Solver/commit/5e804f54fab0b2561bfb5a0bfb65ae871dc79253))
* **server:** solve euler064 ([8025f9a](https://github.com/LoicViennois/Project-Euler-Solver/commit/8025f9ad462f04645a91ae227a5afce6ab077b2c))
* **server:** solve euler065 ([81828df](https://github.com/LoicViennois/Project-Euler-Solver/commit/81828df10e6d2ca728885adef4e1c7a6daa86176))
* **server:** solve euler066 ([381cba7](https://github.com/LoicViennois/Project-Euler-Solver/commit/381cba78568dfcf1f743fda10373a8759e16dd91))
* **server:** solve euler067 ([99fd729](https://github.com/LoicViennois/Project-Euler-Solver/commit/99fd729253381c3eed0c8268ebf582a771f16c35))
* **server:** use custom number to words generator and remove npm package number-to-words ([16da490](https://github.com/LoicViennois/Project-Euler-Solver/commit/16da4905e1cb4a222e19faf7e5e541ea9524840a))


### Bug Fixes

* **server:** fix code fetch in production environment ([52886d1](https://github.com/LoicViennois/Project-Euler-Solver/commit/52886d1327a510cd20c7088e26fe12e7f3b6e7c2))

## [1.5.0](https://github.com/LoicViennois/Project-Euler-Solver/compare/v1.4.0...v1.5.0) (2021-07-08)


### Features

* **server:** use BigInt and remove npm package bignumber.js ([c334206](https://github.com/LoicViennois/Project-Euler-Solver/commit/c334206c2efc3f5ee08caffcbb7825e3303c0123))
* **server:** use custom combinatorics and remove npm package js-combinatorics ([6129cd2](https://github.com/LoicViennois/Project-Euler-Solver/commit/6129cd2c8e10bc8647810754ac564742bbd479e4))

## [1.4.0](https://github.com/LoicViennois/Project-Euler-Solver/compare/v1.3.1...v1.4.0) (2020-11-20)


### Features

* **client:** add matomo analytics (self-hosted) ([f873532](https://github.com/LoicViennois/Project-Euler-Solver/commit/f873532a6c484354503e48d8943130e6f7d201db))
* **client:** rename modal 'copyright' -> 'about' and change icon ([bb55272](https://github.com/LoicViennois/Project-Euler-Solver/commit/bb5527209cd6fba6923c8172f7c3537233833c5a))
* **client:** version number inside about modal is now a link to changelog ([4f59071](https://github.com/LoicViennois/Project-Euler-Solver/commit/4f590718eacc0e6b247afa0d7c4e840b22f92cba))


### Bug Fixes

* **client:** fix 404 error on page refresh ([b448eff](https://github.com/LoicViennois/Project-Euler-Solver/commit/b448eff9481fe4f709dbdae0f0697c94681534f7))
* **client:** fix service worker ([439d8ad](https://github.com/LoicViennois/Project-Euler-Solver/commit/439d8ad27a383d2ba43359bec62c686dfe2d6154))

### [1.3.1](https://github.com/LoicViennois/Project-Euler-Solver/compare/v1.3.0...v1.3.1) (2020-09-14)


### Bug Fixes

* improve version bump and fix version recovery form client ([170fb76](https://github.com/LoicViennois/Project-Euler-Solver/commit/170fb76e6e6c99f6c224f09e9a3c0bb8d1c5e818))

## [1.3.0](https://github.com/LoicViennois/Project-Euler-Solver/compare/v1.2.0...v1.3.0) (2020-09-13)


### Features

* add copyright modal ([8879e6e](https://github.com/LoicViennois/Project-Euler-Solver/commit/8879e6eeea156a9da13dfe71a604f0d4e17b1037))

## [1.2.0](https://github.com/LoicViennois/Project-Euler-Solver/compare/v1.1.0...v1.2.0) (2020-08-28)


### Features

* **client:** upgrade to Angular 10 ([26cac42](https://github.com/LoicViennois/Project-Euler-Solver/commit/26cac429221aa21c4ead638ff3cb779b9b3944fa))


### Bug Fixes

* **server:** deal with assets path resolution in dev and prod envs ([b8149c2](https://github.com/LoicViennois/Project-Euler-Solver/commit/b8149c2af965bfaabd59dee44d2868191d43ae75))
* **server:** display server error on server shutdown, if any ([ca36bb5](https://github.com/LoicViennois/Project-Euler-Solver/commit/ca36bb552782091251b3416b803dfcfb2808bd81))
* **server:** gracefully shutdown server on SIGINT and SIGTERM signals ([9c1b4d0](https://github.com/LoicViennois/Project-Euler-Solver/commit/9c1b4d09fb35c68f4792959608240d7091845a04))

## [1.1.0](https://github.com/LoicViennois/Project-Euler-Solver/compare/v1.0.0...v1.1.0) (2019-11-05)


### Features

* add loading icon when loading problems ([a297890](https://github.com/LoicViennois/Project-Euler-Solver/commit/a2978906764ad45a129c39ca0ce898ebefa25680))
