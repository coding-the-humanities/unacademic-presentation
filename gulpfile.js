var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSync = require('run-sequence');

gulp.task('clean', function(cb) {
    return del('dist', cb);
});

gulp.task('scripts', function () {
    return gulp.src(['src/scripts/**/*.js', '!src/scripts/vendor/**/*'])
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe(gulp.dest('dist/scripts'))
        .pipe($.connect.reload());
});

gulp.task('vendor', function () {
    return gulp.src(['src/scripts/vendor/**/*'])
        .pipe(gulp.dest('dist/scripts/vendor'))
        .pipe($.connect.reload());
});

gulp.task('styles', function () {
    return gulp.src('src/styles/main.scss')
        .pipe($.sass({
        	includePaths: require('node-neat').includePaths
        }))
        .pipe(gulp.dest('dist/'))
        .pipe($.connect.reload());
});

gulp.task('html', function() {  
	return gulp.src(['src/**/*.html'])
		.pipe(gulp.dest('dist'))
        .pipe($.connect.reload());
});

gulp.task('images', function() {  
	return gulp.src(['src/images/**'])
		.pipe(gulp.dest('dist/images'))
        .pipe($.connect.reload());
});

gulp.task('fonts', function() {  
	return gulp.src(['src/fonts/**'])
		.pipe(gulp.dest('dist/fonts'))
        .pipe($.connect.reload());
});

gulp.task('build', ['clean'], function(cb){
    runSync(['scripts', 'vendor', 'styles', 'html', 'images', 'fonts'], cb)
});

gulp.task('serve', ['build'], function(){
    $.connect.server({
        root: 'dist',
        livereload: true
    });

    gulp.watch(['src/**/*.html'], ['html']);
    gulp.watch(['src/styles/**/*.{scss,css}'], ['styles']);
    gulp.watch(['src/scripts/**/*.js'], ['scripts']);
    gulp.watch(['src/images/**/*'], ['images']);
    gulp.watch(['src/fonts/**/*'], ['fonts']);
});

gulp.task('default', ['serve'], function() {});

gulp.task('deploy', function () {
    return gulp.src('./dist/**/*')
        .pipe($.ghPages());
});

