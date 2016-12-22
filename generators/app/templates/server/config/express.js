/**
 * Express configuration
 */

'use strict';

var express = require('express');
var favicon = require('serve-favicon');   
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var path = require('path');
var config = require('./environment');
var fs = require('fs');

module.exports = function (app) {
    var env = app.get('env');

    app.use(compression()); 
    app.use(bodyParser.urlencoded({extended: false})); 
    app.use(bodyParser.json()); 
    app.use(methodOverride());  
    app.use(cookieParser());  
    app.use(favicon(path.join(config.root, config.appPath, 'favicon.ico')));
    app.use(express.static(path.join(config.root, config.appPath)));
};
