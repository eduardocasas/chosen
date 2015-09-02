var gulp = require('gulp');
var minifyCss = require("gulp-minify-css");
var uglify = require("gulp-uglify");
 
gulp.task('minify-css', function () {
    return gulp.src('./src/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./src/min/'));
});
gulp.task('minify-js', function () {
    gulp.src('./src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./src/min/'));
}); 

gulp.task('default', ['minify-css', 'minify-js']);
