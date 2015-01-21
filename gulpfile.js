var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('jshint', function () {
    gulp.src(['src/scripts/**/*.js'])
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['jshint'], function() {
  // place code for your default task here
});
