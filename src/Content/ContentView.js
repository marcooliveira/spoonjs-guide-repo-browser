define([
    'spoon/View',
    'jquery',
    'doT',
    'text!./assets/tmpl/content.html',
    'css!./assets/css/content'
], function (View, $, doT, tmpl) {

    'use strict';

    return View.extend({
        $name: 'ContentView',

        _element: 'div.content',
        _template: doT.template(tmpl),

        /**
         * Returns the element in which the right content will be shown.
         *
         * @return {Object} The jQuery element
         */
        getContentElement: function () {
            return this._element.find('.right');
        },

        /**
         * Sets the active menu.
         *
         * @param {String} item The item to activate, valid ones are "code", "issues", "tags" and "history"
         */
        selectMenu: function (item) {
            this._element.find('.active').removeClass('active');
            this._element.find('.' + item).addClass('active');
        }
    });
});