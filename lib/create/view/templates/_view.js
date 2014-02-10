'use strict'

var uibase = require('uibase');

var <%= _.capitalize(name) %> = uibase.Utils.createView({

    config: {},

    components: {
        root: {
            name: 'HtmlElement',
            tag: 'div',
            props: {
                class: '<%= "view" + _.capitalize(name) %>'
            }
        }
    },

    inputs: {},

    outputs: {},

    picture: function(config) {
        return this.components.root;
    }
});

module.exports = <%= _.capitalize(name) %>;