var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyCSS = require("gulp-clean-css");
var rename = require("gulp-rename");
var changed = require("gulp-changed");

var SCSS_SRC = "./src/Assets/scss/**/*.scss";
var SCSS_DEST = "./src/Assets/css";

function style() {
  return gulp
    .src(SCSS_SRC)
    .pipe(sass().on("error", sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
}

function watch() {
  gulp.watch("./src/Assets/scss/**/*.scss", style);
}

gulp.task("default", watch);
