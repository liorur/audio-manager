const gulp = require("gulp");
const tslint = require("gulp-tslint");
//concat      = require('gulp-concat'),
//plumber     = require('gulp-plumber'),
//server      = require('tiny-lr')(),
//refresh     = require('gulp-livereload'),
//mocha       = require('gulp-mocha'),
//stylus      = require('gulp-stylus'),
//notify      = require('gulp-notify'),
//nodemon     = require('gulp-nodemon');
//jshint      = require('gulp-jshint'),
// lrPort      = 35729;
//
// var paths = {
//   //styles: ['./client/styles/sty/*.styl'],
//
//   //assets: ['./client/assets/'],
//   scripts: [
//     './**/*.js'
//   ],
//   html: [
//   '.public/**/*.html'
//   ],
//
//   server: {
//     js: ['./server/**/*.js'],
//     specs: ['./server/cards/specs/*.js']
//   }
// };


gulp.task('serve', function () {
    nodemon({
        script: 'app.js'
        , ext: 'js html'
        , env: {'NODE_ENV': 'development'}
    });
});
//
// gulp.task('lint', function(){
//   return gulp.src(paths.scripts)
//     .pipe(plumber())
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'))
//     .pipe(notify({message: 'jshint done'}));
// });
//
// gulp.task('scripts', function(){
//   return gulp.src(paths.scripts)
//     .pipe(plumber())
//     .pipe(concat('main.js'))
//     .pipe(gulp.dest('./client/'))
//     .pipe(refresh(server))
//     .pipe(notify({message: 'JS concated'}));
// });
//
// gulp.task('test', function(){
//   return gulp.src(paths.server.specs)
//     .pipe(mocha({reporter: 'spec'}))
//     .pipe(notify({message: "Specs ran"}));
// });
//
//
// gulp.task('stylus', function(){
//   return gulp.src(paths.styles)
//     .pipe(plumber())
//     .pipe(stylus())
//     .pipe(gulp.dest('./client/styles/css'))
//     .pipe(refresh(server))
//     .pipe(notify({message: 'stylus done'}));
// });
//
// gulp.task('html', function(){
//   return gulp.task('html', function(){
//     gulp.src(paths.html)
//       .pipe(refresh(server))
//       .pipe(notify({message: 'Views refreshed'}));
//   });
// });
//
// gulp.task('build', ['stylus', 'scripts', 'lint']);
//
// gulp.task('lr', function(){
//   server.listen(lrPort, function(err){
//     if(err) {return console.error(err);}
//   });
// });
//
// gulp.task('watch', function(){
//   gulp.watch(paths.html, ['html']);
//   gulp.watch(paths.scripts, ['lint', 'scripts']);
//   gulp.watch(paths.styles, ['stylus']);
// });

//gulp.task('default', ['test', 'build', 'lr', 'serve', 'watch']);


gulp.task("tslint", () =>
    gulp.src('./src/**/*.ts')
        .pipe(tslint({
            formatter: "stylish"
        }))
        .pipe(tslint.report())
);

gulp.task('default', ['tslint']);
