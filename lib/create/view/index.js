'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
    yeoman.generators.NamedBase.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({ skipInstall: options['skip-install'] });
    });
    console.log('You called the ub app generator with the argument ' + this.name + '.');
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.app = function files() {
    this.template('_view.js',        this.name + '.js');
    this.template('_view.css',       this.name + '.css');
};
