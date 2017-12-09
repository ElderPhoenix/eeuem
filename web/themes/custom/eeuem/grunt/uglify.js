'use strict';
module.exports = {
  beauty: {
    options: {
      mangle: false,
      compress: false,
      preserveComments: 'all',
      screwIE8: true,
      quoteStyle: 1,
      beautify: {
        beautify: true,
        width: 80,
        indent_level: 2,
        bracketize: true
      }
    },
    files: [
      {
        src: ['sources/js/{,**/}*.js', '!sources/js/parts/{,**/}*.js'],
        dest: 'sources/tmp/js/eeuem.js'
      },
      {
        src: ['sources/vendor/bootstrap/assets/javascripts/bootstrap.js'],
        dest: 'sources/tmp/js/bootstrap.js'
      },
      {
        expand: true,
        flatten: false,
        cwd: 'sources/js',
        dest: 'sources/tmp/js',
        src: ['parts/{,**/}*.js']
      }
    ]
  },
  compress: {
    options: {
      mangle: true,
      compress: true,
      preserveComments: false,
      screwIE8: true
    },
    files: [
      {
        expand: true,
        flatten: false,
        cwd: 'sources/tmp/js',
        dest: 'sources/tmp/js',
        src: ['{,**/}*.js']
      }
    ]
  }
};
