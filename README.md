# generator-fullstack-vue [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Scaffold out a Fullstack Vuejs project:vue2;vuex;vue-router;vue-resource;express;mongo

## Installation

First, install [Yeoman](http://yeoman.io) and generator-fullstack-vue using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-fullstack-vue
```

Then generate your new project:

```bash
yo fullstack-vue
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).



## About this web project

# a fullstack web project, use vue2.0 + vue-router + vuex + vue-router + express

> A fullstack Vue.js project
> use mockjs to split  FE develop & BE develop
> unit test

## Build Setup

``` bash
# install dependencies
npm install

FE: 
    # serve with hot reload at localhost:8080
    npm run dev

    # build for production with minification
    npm run build

    # run unit tests
    npm run unit

    # run e2e tests
    npm run e2e

BE: 
    # serve with hot reload at localhost:9000
    grunt server

    # build for production, when package project must be run after FE build
    grunt build

    #run unit tests
    grunt test

    #if you have a cms to publish a zip package, you can use grunt upload here


FE & BE
    
    when you are developing both side, you can anntate mockjs in src/main.js, and
    config the request url in  config/index.js  proxyTable 



## License

MIT © [lixiong](https://github.com/lix059)


[npm-image]: https://badge.fury.io/js/generator-fullstack-vue.svg
[npm-url]: https://npmjs.org/package/generator-fullstack-vue
[travis-image]: https://travis-ci.org/lix059/generator-fullstack-vue.svg?branch=master
[travis-url]: https://travis-ci.org/lix059/generator-fullstack-vue
[daviddm-image]: https://david-dm.org/lix059/generator-fullstack-vue.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/lix059/generator-fullstack-vue
[coveralls-image]: https://coveralls.io/repos/lix059/generator-fullstack-vue/badge.svg
[coveralls-url]: https://coveralls.io/r/lix059/generator-fullstack-vue
