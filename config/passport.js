var LocalStrategy = require('passport-local').Strategy;
var models = require("../models");
var bcrypt = require('bcrypt-nodejs');

module.exports = function(passport) {
  passport.serializeUser(function(user,done) {
    done(null,user.id);
  });
  passport.deserializeUser(function(id,done) {
    models.user.findOne({id: id}).then(function(user) {
      done(null, user);
    });
  });
  passport.use('local-signup',new LocalStrategy( {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req,email,password,done) {
    models.user.findOne({where:{email:email}}).then(function(existingUser) {
      if(existingUser) {
        console.log('duplicate')
        done(null,false,req.flash('signupMessage','The email is already taken.'));
      } else {
        console.log('work')
        var email = req.body.email;
        var password = req.body.password;
        models.user.create({
          email:email,
          password:bcrypt.hashSync(password,bcrypt.genSaltSync(8),null)
        }).then(function(user) {
          done(null, user);
        });
      }
    });
  }));
  passport.use('local-login',new LocalStrategy({
    usernameField:'email',
    passwordField:'password',
    passReqToCallback:true
  }, function(req,email,password,done) {
    models.user.findOne({where: {email:email}}).then(function(user) {
      if(!user)
        return done(null,false,req.flash('loginMessage','No user found.'));
      if(!validPassword(user,password))
        return done(null,false,req.flash('loginMessage','Wrong password.'));
      return done(null,user)
    });
  }))
  var validPassword = function(user,password) {
    return bcrypt.compareSync(password,user.password)
  }
};



