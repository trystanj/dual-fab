var gulp = require('gulp');
var browserSync = require('browser-sync');

var sources = [
    '**/dual-fab.*',
    'index.html',
    'demo.html'
];

// Static server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: ['./','../'],
            index: 'demo.html'
        }
    });
});

gulp.task('default', ['browser-sync'], function() {
    gulp.watch(sources, browserSync.reload);
});