var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var defineModule = require('gulp-define-module');
var nib = require('nib');
var jade = require('gulp-jade');
var replace = require('gulp-replace');
var glob = require('glob');
var path = require('path');
var async = require('async');

var handleErrors = function(stream){
  return stream.on('error',function(){
      gutil.log.apply(this,arguments);
      return stream.end();
    });
};
gulp.task('build',function(done){
  return async.parallel([
    function(done){
      return gulp.src('./public/javascripts/views/**/*.coffee').pipe(handleErrors(coffee({ bare:true }))).pipe(gulp.dest('./public/javascripts/views/')).on('end',done);},
    function(done){
      return glob('./public/templates/**/*.jade',function(err,files){
        return async.map(files,(function(file,done){
          var templateName = path.basename(file).replace('.jade','');
          var preamble = 'jade.templates = jade.templates || {};'+("jade.templates['"+templateName+"']=function");
          return gulp.src(file).pipe(handleErrors(jade({
            client:true,
            debug:false}))).pipe(replace('function template',preamble)).pipe(gulp.dest('./public/templates')).on('end',done)
          }),done);
        });
      }
    ],done);
});

gulp.task('watch',function(){
  return gulp.watch(["./public/templates/**/*.jade"],['build']);
});

gulp.task('default',['watch','build']);

