var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
    gulp.src(['src/scripts/**/*.js'])
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe(gulp.dest('dist'))
        .pipe($.connect.reload());
});

gulp.task('styles', function () {
    gulp.src('src/styles/**/*.scss')
        .pipe($.sass({
        	includePaths: require('node-neat').includePaths
        }))
        .pipe(gulp.dest('dist/'))
        .pipe($.connect.reload());
});

gulp.task('html', function() {  
	gulp.src(['src/**/*.html'])
		.pipe(gulp.dest('dist'))
        .pipe($.connect.reload());
});

gulp.task('images', function() {  
	gulp.src(['src/images/**'])
		.pipe(gulp.dest('dist/images'))
        .pipe($.connect.reload());
});

gulp.task('fonts', function() {  
	gulp.src(['src/fonts/**'])
		.pipe(gulp.dest('dist/fonts'))
        .pipe($.connect.reload());
});

gulp.task('build', ['scripts', 'styles', 'html', 'images', 'fonts'], function(){});

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

