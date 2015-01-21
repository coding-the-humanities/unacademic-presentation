var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
    gulp.src(['src/scripts/**/*.js'])
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pint(gulp.dest('dist'));
});

gulp.task('styles', function () {
    gulp.src('src/styles/**/*.scss')
        .pipe($.sass({
        	includePaths: require('node-neat').includePaths
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('html', function() {  
	gulp.src(['src/**/*.html'])
		.pipe(gulp.dest('dist'));
});

gulp.task('images', function() {  
	gulp.src(['src/images/**'])
		.pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function() {  
	gulp.src(['src/fonts/**'])
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('build', ['scripts', 'styles', 'html', 'images', 'fonts'], function(){});

gulp.task('serve', ['build'], function(){ 
    gulp.watch(['src/**/*.html'], ['html']);
    gulp.watch(['src/styles/**/*.{scss,css}'], ['styles']);
    gulp.watch(['src/scripts/**/*.js'], ['jshint']);
    gulp.watch(['src/images/**/*'], ['images']);
});

gulp.task('default', ['serve'], function() {
	
});

gulp.task('deploy', function () {
    console.log($);

    return gulp.src('./dist/**/*')
        .pipe($.gh-pages());
});

