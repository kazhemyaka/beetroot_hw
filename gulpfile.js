const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browsersync = require("browser-sync").create();
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

function sassTask() {
  return src("./hw_30/assets/styles/scss/style.scss")
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(dest("./hw_30/assets/styles/css/"));
}

function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: "./hw_30/",
    },
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

function watchTask() {
  watch("./hw_30/*.html", browsersyncReload);
  watch("./hw_30/*.js", browsersyncReload);
  watch("./hw_30/assets/styles/**/*.scss", series(sassTask, browsersyncReload));
}

exports.default = series(browsersyncServe, watchTask);
