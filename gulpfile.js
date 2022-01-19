const { series, src, dest, watch } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sassGlob = require("gulp-sass-glob")
const prefix = require('gulp-autoprefixer')
const minify = require('gulp-clean-css')
const sourcemaps = require("gulp-sourcemaps")
const concat = require("gulp-concat")
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

const srcFolder = 'frontend/assets'
const distFolder = 'frontend/static'

async function compileSass() {
    return src(srcFolder+'/sass/main.scss')
        .pipe(sassGlob())
        .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(prefix({
                cascade: false
            }))
        .pipe(sourcemaps.write())
        .pipe(minify())
        .pipe(dest(distFolder+'/styles/'))
}

async function compilePoopJs() {
    return src(srcFolder+'/scripts/poop/**/*.js')
        .pipe(sourcemaps.init())
            .pipe(concat('poop.js'))
            // .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe((dest(distFolder+'/scripts/')))
}

async function compileMainJs() {
    return src(srcFolder+'/scripts/main/**/*.js')
        .pipe(sourcemaps.init())
            .pipe(concat('main.js'))
            // .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe((dest(distFolder+'/scripts/')))
}

async function compileImg() {
    return src(srcFolder+'/images/**/*')
        .pipe(imagemin())
        .pipe(dest(distFolder+'/images/'))
}

function watchTask() {
    watch(srcFolder+'/sass/**/*.scss', compileSass);
    watch(srcFolder+'/scripts/poop/**/*.js', compilePoopJs);
    watch(srcFolder+'/scripts/main/**/*.js', compileMainJs);
    watch(srcFolder+'/images/**/*', compileImg);
}

exports.default = series(
    compileSass,
    compilePoopJs,
    compileMainJs,
    compileImg,
    watchTask
)