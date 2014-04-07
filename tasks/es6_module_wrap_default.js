/*
 * grunt-es6-module-wrap-default
 * https://github.com/stevoland/grunt-es6-module-wrap-default
 *
 * Copyright (c) 2014 Stephen J. Collings
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function (grunt) {

  grunt.registerMultiTask('es6_module_wrap_default', 'Wrap CommonJS and AMD modules created with es6-module-transpiler so that they can be required as as (\'name\') and not (\'name\').default', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      type: 'cjs'
    });

    if (options.type !== 'cjs' && options.type !== 'amd') {
      throw new Error('options.type must be cjs or amd');
    }

    // Iterate over all specified file groups.
    this.files.forEach(function (f) {
      // Concat specified files.
      f.src.forEach(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });


      var srcBaseName = path.basename(f.src[0], '.js');
      var srcDirname = path.dirname(f.src[0]);
      var destDirname = path.dirname(f.dest);

      var importPath = path.join(path.relative(destDirname, srcDirname), srcBaseName);

      // Path will use forward slash as delimiter on both Windows and Unix based systems.
      importPath = path.normalize(importPath).replace(/\\/g, '/');

      var src;

      switch (options.type) {
        case 'cjs':
          src = "var " + srcBaseName + " = require('./" + importPath + "')['default'];\n" +
            "module.exports = " + srcBaseName;
          break;

        case 'amd':
          src = "define(['./" + importPath + "'], function (" + srcBaseName + ") {\n" +
            "  return " + srcBaseName + "['default'];\n" +
            "})";
          break;
      }

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
