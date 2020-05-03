var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var config = require('../config');

gulp.task('server', function() {
    var files = [
        config.dest.css,
        config.dest.js,
        config.src.iconsSvg + '/*.svg',
        // config.php,
    ];
    browserSync.init(files, {
        server: {
            baseDir: './',
        },
        // proxy: 'yoursite.loc',
        // notify: false,
        // browser: 'Name Browser',
        // port: 4000,
        // reloadDelay: 1000,
    });

    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch(config.src.sass, gulp.series('sass'));
    gulp.watch(config.src.js, gulp.series('js'));
    gulp.watch(config.src.files + '/svgo/**/*.svg', gulp.series('svgo'));
    gulp.watch(config.src.iconsSvg + '/*.svg', gulp.series('sprite:svg:build'));
    gulp.watch(
        config.src.images + '/**/*.{jpg,png,jpeg,svg,gif}',
        gulp.series('copy:images')
    );
});

module.exports = browserSync;
