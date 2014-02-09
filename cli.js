'use strict';

var Command = require('commander').Command;
var pkg = require('./package.json');

var create = require('./lib/create/create');
//var build = require('./lib/build');
//var lint = require('./lib/lint');
//var test = require('./lib/test');

var cli = new Command();

cli.version(pkg.version);

//build.commands.forEach(function(command) {
//    cli.command('build:' + command.name)
//        .description(command.description)
//        .action(command.action);
//});

create.commands.forEach(function(command) {
    cli.command('create:' + command.name)
        .description(command.description)
        .action(command.action);
});

//lint.commands.forEach(function(command) {
//    cli.command(command.name)
//        .description(command.description)
//        .action(command.action);
//});
//
//test.commands.forEach(function(command) {
//    cli.command(command.name)
//        .description(command.description)
//        .action(command.action);
//});

module.exports.command = cli;