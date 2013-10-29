define([
    'spoon/View',
    'jquery',
    'doT',
    'text!./assets/tmpl/application.html',
    'css!./assets/css/application.css',
    'css!bootstrap/css/bootstrap'
], function (View, $, doT, tmpl) {

    'use strict';

    return View.extend({
        $name: 'ApplicationView',

        _element: 'div#app',
        _template: doT.template(tmpl)
    });
});
