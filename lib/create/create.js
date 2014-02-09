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
    }
];

module.exports = {
    commands: commands
};
