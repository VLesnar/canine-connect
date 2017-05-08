const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
  return gulp.src(['./server/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('watch', () => {
  nodemon({ script: './server/app.js'
          , ext: 'js'
          , tasks: ['lint'] })
});

gulp.task('build', () => {
  gulp.start('lint');
});
