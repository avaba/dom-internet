'use strict';

// ---------packages
var gulp                 = require('gulp'),
    path                 = require('path'),
    fs                   = require('fs'),
    browserSync          = require("browser-sync"),
    reload               = browserSync.reload,
    plumber              = require('gulp-plumber'),
    changed              = require('gulp-changed'),
    sourcemaps           = require('gulp-sourcemaps'),
    flatten              = require('gulp-flatten'),
    runSequence          = require('gulp-run-sequence'),
    sass                 = require('gulp-sass'),
	autoprefixer         = require('gulp-autoprefixer');

var onError = require("./onError");
var route = require("./route")();

var scssSourceFilesBasePath = path.join('dev', 'scss')
var scssSourceFiles = path.join(fs.realpathSync(scssSourceFilesBasePath), '*.scss')

gulp.task('style:gen', function(callback) {
    var cssDestination = path.dirname(scssSourceFiles)

    return gulp
        .src(scssSourceFiles)
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(changed(cssDestination, { extension: '.css' }))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(route.build.styles))
        .on('end', browserSync.reload);
});

// gulp.task('style_components:replace', function(callback) {

//     gulp.src(route.src.componentsStyles)
//         .pipe(plumber())
//         .pipe(flatten({ includeParents: 0}))
//         .pipe(gulp.dest(route.build.style_components))
//         .on('end', function(){
//            callback();
//         });
// });

gulp.task('style:build', function(cb) {
    runSequence('style:gen', cb);
});