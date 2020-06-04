var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


var cssDest = 'style';
var cssInputFile = 'source/style.scss';
var watchedFile = 'source/**/*.scss';

gulp.task('buildcss', function(){
	return gulp.src(cssInputFile)
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(autoprefixer({
            
        }))
        .pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest(cssDest));
});

gulp.task('concat', function(){
  return gulp.src([
  	'./source/javascript/jquery-3.3.1.min.js', 
  	'./source/javascript/bootstrap.min.js', 
  	'./source/javascript/whcookies.js',
  	'./source/javascript/jquery.waypoints.min.js',
  	'./source/javascript/jquery.counterup.js',
  	'./source/javascript/custom.js'


  	])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('javascript'));
});

gulp.task('watch', function(){
	gulp.watch(watchedFile, gulp.series('buildcss'));
});