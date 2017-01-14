var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var nodemon = require('gulp-nodemon');

gulp.task('sass', function(){
  return gulp.src('public/stylesheets/src/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('public/stylesheets/dist'))
});

gulp.task('autoprefix-then-minify', function(){
  return gulp.src('public/stylesheets/dist/*.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions', '> 0%','Firefox ESR'],
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/stylesheets/dist'))
});

gulp.task('nodemon', function() {
    nodemon({
        script: 'bin/www'
    })
})

gulp.task('default', function() {
    gulp.start('nodemon');
	gulp.watch('public/stylesheets/src/*.scss', ['sass']);
	gulp.watch('public/stylesheets/dist/*.css', ['autoprefix-then-minify']);

});