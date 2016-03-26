# hexo-filter-fancy-underline

[![npm](https://img.shields.io/npm/v/hexo-filter-fancy-underline.svg)](https://npmjs.org/package/hexo-filter-fancy-underline)
[![npm](https://img.shields.io/npm/dm/hexo-filter-fancy-underline.svg)](https://npmjs.org/package/hexo-filter-fancy-underline)
[![npm](https://img.shields.io/npm/dt/hexo-filter-fancy-underline.svg)](https://npmjs.org/package/hexo-filter-fancy-underline)
[![NPM Dependencies](https://img.shields.io/david/JamesPan/hexo-filter-fancy-underline.svg)](https://www.npmjs.com/package/hexo-filter-fancy-underline)
![](https://img.shields.io/npm/l/hexo-filter-fancy-underline.svg)


Play guitar with underlines, powered by [underline.js](https://wentin.github.io/underlineJS/).

## Instalation
To install `hexo-filter-fancy-underline` run:

```
npm install hexo-filter-fancy-underline --save
```

## Usage

By default, it will add class `hexo-fancy-underline` to all `<a>` tags with selector `.article-entry a`, you can change the selector in `_config.yml` if you like.

```
fancy_underline:
 enable: true
 underline_selectors:
   - ".article-entry a"
```
