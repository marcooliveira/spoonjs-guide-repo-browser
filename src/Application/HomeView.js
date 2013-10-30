define([
    'spoon/View',
    'jquery',
    'doT',
    'text!./assets/tmpl/home.html',
    'css!./assets/css/home.css'
], function (View, $, doT, tmpl) {

    'use strict';

    return View.extend({
        $name: 'HomeView',

        _element: 'div.home',
        _template: doT.template(tmpl),

        _events: {
            'click .btn': '_onBtnClick',
            'focus .input-append': function (e, el) {
                // Remove the error class on focus
                // Note that in this case we are using an inline function
                el.removeClass('has-error');
            }
        },

        _onBtnClick: function (e, el) {
            var matches,
                value = this._element.find('input').val();

            console.log('User clicked go!');

            // Validate input value and extract org and repo information
            matches = value.match(/^git:\/\/github\.com\/(\S+?)\/(\S+?)(?:\.git)$/);

            // If it's valid, upcast the event
            if (matches) {
                this._upcast('go', { org: matches[1], repo: matches[2] });
            // Otherwise style with an error
            } else {
                el.closest('.input-append').addClass('has-error');
            }
        }
    });
});
