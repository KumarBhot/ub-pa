'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var AppGenerator = module.exports = function AppGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);
    console.log('You called the post subgenerator with the argument ' + this.name + '.');
};

util.inherits(AppGenerator, yeoman.generators.NamedBase);

AppGenerator.prototype.files = function files() {
    this.copy('somefile.js', 'somefile.js');
};
