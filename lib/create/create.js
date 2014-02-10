'use strict';

var path = require('path');

var commands = [
    {
        name: 'app',
        description: 'Create an application',
        action: function(appName) {
            var env = require('yeoman-generator')();

            env.register(path.resolve(__dirname + '/app/index'), 'app');
            env.run(['app', appName]);
        }
    },
    {
        name: 'view',
        description: 'Create a view',
        action: function(viewName) {
            var env = require('yeoman-generator')();

            env.register(path.resolve(__dirname + '/view/index'), 'view');
            env.run(['view', viewName], { 'skip-install': true });
        }
    }
];

module.exports = {
    commands: commands
};
