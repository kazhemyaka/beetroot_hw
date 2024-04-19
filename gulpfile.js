const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browsersync = require("browser-sync").create();
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

function sassTask() {
  return src("./hw_17/assets/styles/scss/style.scss")
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(dest("./hw_17/assets/styles/css/"));
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
  watch("./hw_17/*.html", browsersyncReload);
  watch("./hw_17/assets/styles/**/*.scss", series(sassTask, browsersyncReload));
}

exports.default = series(sassTask, browsersyncServe, watchTask);
