'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');

var AppGenerator = module.exports = function AppGenerator(args, options, config) {
    yeoman.generators.NamedBase.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({ skipInstall: options['skip-install'] });
    });
    console.log('You called the ub app generator with the argument ' + this.name + '.');
};

util.inherits(AppGenerator, yeoman.generators.NamedBase);

AppGenerator.prototype.app = function files() {
//    this.mkdir(this.name);
    this.mkdir(this.name + '/views');
    this.mkdir(this.name + '/components');

    this.template('_index.html',        'index.html');
    this.template('_404.html',          '404.html');
    this.template('_gulpfile.js',       'gulpfile.js');
    this.template('_package.json',      'package.json');
    this.template('_urls.json',         'urls.json');
    this.template('_webpack.config.js', 'webpack.config.js');
    this.template('jshintrc',           '.jshintrc');
    this.template('htaccess',           '.htaccess');
};
