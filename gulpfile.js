// import gulp from "gulp";
// import less from "gulp-less";
// import browserSync from "browser-sync";
// const reload = browserSync.reload;
// import autoprefixer from "gulp-autoprefixer";

// /* Task to compile less */
// gulp.task("compile-less", function () {
//   return gulp
//     .src("./hw_15/assets/style/less/style.less")
//     .pipe(less())
//     .pipe(autoprefixer())
//     .pipe(gulp.dest("./hw_15/assets/style/css/"));
// });
// /* Task to watch less changes */
// gulp.task("watch-less", function () {
//   gulp.watch("./hw_15/assets/style/**/*.less", gulp.series("compile-less"));
// });

// gulp.task("serve", function () {
//   // Serve files from the root of this project
//   browserSync.init({
//     server: {
//       baseDir: "./",
//     },
//   });
//   gulp.watch("./hw_15/assets/style/**/*.less").on("change", reload);
//   gulp.watch("./hw_15/*.html").on("change", reload);
// });

// /* Task when running `gulp` from terminal */
// gulp.task("default", gulp.series("watch-less", "serve"));

const { src, dest, watch, series } = require("gulp");
const less = require("gulp-less");
const browsersync = require("browser-sync").create();
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

function lessTask() {
  return src("./hw_15/assets/style/less/style.less")
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(dest("./hw_15/assets/style/css/"));
}

function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

function watchTask() {
  watch("./hw_15/*.html", browsersyncReload);
  watch("./hw_15/assets/style/**/*.less", series(lessTask, browsersyncReload));
}

exports.default = series(lessTask, browsersyncServe, watchTask);
