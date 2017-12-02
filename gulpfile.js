var gulp        = require('gulp');
var sass        = require('gulp-sass');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var webReload 	= browserSync.reload;

// scss files converstion
gulp.task('build', function() {
  return gulp.src('app/scss/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('build/css/'))
});

// compress all js files
gulp.task( 'compress', function() {
  return gulp.src('app/js/myToDoList.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
} );

gulp.task('serve', function() {
    browserSync({
      port: "3010",
      ui: {
        port: "3011"
      },
      notify: false,
      server:{
            baseDir: "./build/"
        }
  });
});

gulp.task('watch', ['serve', 'build', 'compress'], function (){
  gulp.watch('app/scss/*.scss', ['build']);
  gulp.watch('app/js/myToDoList.js', ['compress']);
  // Reloads the browser whenever HTML or CSS files change
  gulp.watch('app/scss/*.scss', webReload);
  gulp.watch('app/js/myToDoList.js', webReload);
});

/* this will initially initiate all task one by one*/
gulp.task('default', function (callback) {
  runSequence(['watch','serve'],
    callback
  )
});