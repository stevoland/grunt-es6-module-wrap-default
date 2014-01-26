# grunt-es6-module-wrap-default

> Wrap CommonJS and AMD modules created with [es6-module-transpiler](https://github.com/square/es6-module-transpiler) so that they can be required as ('name') and not ('name').default

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-es6-module-wrap-default --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-es6-module-wrap-default');
```

## The "es6_module_wrap_default" task

### Overview
In your project's Gruntfile, add a section named `es6_module_wrap_default` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  es6_module_wrap_default: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.type
Type: `String`
Default value: `'cjs'`

Either `'cjs'` or `'amd'`.

### Usage Examples

```js
grunt.initConfig({
  es6_module_wrap_default: {
    options: {
      type: 'cjs'
    },
    files: [{
      expand: true,
      cwd: 'cjs/transpiled',
      src: ['**/*.js'],
      dest: 'cjs'
    }]
  },
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
